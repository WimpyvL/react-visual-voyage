
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, PiggyBank, DollarSign } from 'lucide-react';
import { useAgentStore } from '@/stores/agentStore';
import { useClientStore } from '@/stores/clientStore';
import { useTransactionStore } from '@/stores/transactionStore';
import { useCommissionStore } from '@/stores/commissionStore';

export default function AdminDashboard() {
  const { agents } = useAgentStore();
  const { clients } = useClientStore();
  const { transactions } = useTransactionStore();
  const { commissions } = useCommissionStore();
  
  // Calculate stats
  const totalAgents = agents.length;
  const activeAgents = agents.filter(agent => agent.status === 'active').length;
  
  const totalClients = clients.length;
  
  const totalTransactions = transactions.length;
  const transactionValue = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  
  const pendingCommissions = commissions.filter(commission => commission.status === 'pending');
  const pendingCommissionsValue = pendingCommissions.reduce((sum, commission) => sum + commission.amount, 0);
  
  const stats = [
    {
      title: 'Total Agents',
      value: totalAgents,
      description: `${activeAgents} active`,
      icon: Users,
      iconClass: 'text-blue-500',
    },
    {
      title: 'Active Clients',
      value: totalClients,
      description: 'Total registered clients',
      icon: UserCheck,
      iconClass: 'text-green-500',
    },
    {
      title: 'Pending Commissions',
      value: pendingCommissions.length,
      description: `$${pendingCommissionsValue.toFixed(2)}`,
      icon: PiggyBank,
      iconClass: 'text-amber-500',
    },
    {
      title: 'Monthly Revenue',
      value: `$${transactionValue.toFixed(2)}`,
      description: `${totalTransactions} transactions`,
      icon: DollarSign,
      iconClass: 'text-indigo-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the Admin Dashboard</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.iconClass}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            {transactions.length === 0 ? (
              <p className="text-muted-foreground">No transactions yet</p>
            ) : (
              <p>Transaction list will be implemented here</p>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Agents</CardTitle>
          </CardHeader>
          <CardContent>
            {agents.length === 0 ? (
              <p className="text-muted-foreground">No agents yet</p>
            ) : (
              <p>Agent performance chart will be implemented here</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
