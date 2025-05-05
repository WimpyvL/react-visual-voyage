
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { ArrowUp, ArrowDown, DollarSign, Users } from 'lucide-react';
import { useAuth } from '@/contexts/auth';

const AgentDashboard: React.FC = () => {
  const { profile, user } = useAuth();
  const [statistics, setStatistics] = useState({
    totalSales: 0,
    totalCommissions: 0,
    totalClients: 0,
    salesTrend: 0,
    clientsTrend: 0
  });
  
  const { data: recentTransactions } = useQuery({
    queryKey: ['agentRecentTransactions', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('transactions')
        .select(`
          id, 
          amount, 
          transaction_date, 
          status,
          clients(first_name, last_name),
          products(name)
        `)
        .eq('agent_id', user?.id)
        .order('transaction_date', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data || [];
    },
    enabled: !!user?.id,
  });

  const { data: chartData } = useQuery({
    queryKey: ['agentSalesChart', user?.id],
    queryFn: async () => {
      // Get last 6 months of sales data for the agent
      const today = new Date();
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(today.getMonth() - 6);
      
      const { data, error } = await supabase
        .from('transactions')
        .select('amount, transaction_date')
        .eq('agent_id', user?.id)
        .gte('transaction_date', sixMonthsAgo.toISOString())
        .order('transaction_date', { ascending: true });
      
      if (error) throw error;
      
      // Group by month
      const months: Record<string, number> = {};
      data?.forEach(transaction => {
        const date = new Date(transaction.transaction_date);
        const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
        
        if (!months[monthYear]) {
          months[monthYear] = 0;
        }
        
        months[monthYear] += Number(transaction.amount);
      });
      
      return Object.keys(months).map(month => ({
        name: month,
        value: months[month]
      }));
    },
    enabled: !!user?.id,
  });

  useEffect(() => {
    if (!user?.id) return;

    const fetchStatistics = async () => {
      try {
        // Get agent's total sales
        const { data: salesData, error: salesError } = await supabase
          .from('transactions')
          .select('amount')
          .eq('agent_id', user.id)
          .eq('status', 'completed');
        
        // Get agent's total commissions
        const { data: commissionsData, error: commissionsError } = await supabase
          .from('commissions')
          .select('amount')
          .eq('agent_id', user.id);
        
        // Get agent's total clients
        const { count: clientsCount, error: clientsError } = await supabase
          .from('clients')
          .select('id', { count: 'exact', head: true })
          .eq('agent_id', user.id);
        
        if (salesError || commissionsError || clientsError) {
          throw new Error('Error fetching statistics');
        }
        
        const totalSales = salesData?.reduce((sum, item) => sum + Number(item.amount), 0) || 0;
        const totalCommissions = commissionsData?.reduce((sum, item) => sum + Number(item.amount), 0) || 0;
        
        setStatistics({
          totalSales,
          totalCommissions,
          totalClients: clientsCount || 0,
          salesTrend: 3.8, // Example value, would calculate real trend
          clientsTrend: 7.2 // Example value
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    
    fetchStatistics();
  }, [user?.id]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back, {profile?.first_name}!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Your Sales</p>
                  <p className="text-2xl font-bold">R{statistics.totalSales.toLocaleString()}</p>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-xs">
                <div className={`flex items-center ${statistics.salesTrend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {statistics.salesTrend >= 0 ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  )}
                  <span>{Math.abs(statistics.salesTrend)}%</span>
                </div>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Your Commissions</p>
                  <p className="text-2xl font-bold">R{statistics.totalCommissions.toLocaleString()}</p>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-xs">
                <span className="text-muted-foreground">Earned from your sales</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Your Clients</p>
                  <p className="text-2xl font-bold">{statistics.totalClients}</p>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-xs">
                <div className={`flex items-center ${statistics.clientsTrend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {statistics.clientsTrend >= 0 ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  )}
                  <span>{Math.abs(statistics.clientsTrend)}%</span>
                </div>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Your Sales Overview</CardTitle>
              <CardDescription>Monthly sales for the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData || []}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`R${Number(value).toLocaleString()}`, 'Sales']} 
                      labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest 5 transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions?.map((transaction: any) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">
                        {transaction.clients?.first_name} {transaction.clients?.last_name}
                      </TableCell>
                      <TableCell className="text-right">
                        R{Number(transaction.amount).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                  {(!recentTransactions || recentTransactions.length === 0) && (
                    <TableRow>
                      <TableCell colSpan={2} className="text-center py-4 text-muted-foreground">
                        No transactions found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AgentDashboard;
