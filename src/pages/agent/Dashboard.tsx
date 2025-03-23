
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Package, PiggyBank, DollarSign } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { useAgentStore } from '@/stores/agentStore';
import { useClientStore } from '@/stores/clientStore';
import { useTransactionStore } from '@/stores/transactionStore';
import { useCommissionStore } from '@/stores/commissionStore';

export default function AgentDashboard() {
  const { user } = useAuthStore();
  const { agents } = useAgentStore();
  const { clients } = useClientStore();
  const { transactions } = useTransactionStore();
  const { commissions } = useCommissionStore();
  
  // Find current agent
  const currentAgent = agents.find(agent => agent.userId === user?.id);
  
  // Calculate agent-specific stats
  const agentId = currentAgent?.id || '';
  
  const agentClients = clients.filter(client => client.agentId === agentId);
  const totalClients = agentClients.length;
  
  const agentTransactions = transactions.filter(transaction => transaction.agentId === agentId);
  const totalTransactions = agentTransactions.length;
  const totalSales = agentTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  
  const agentCommissions = commissions.filter(commission => commission.agentId === agentId);
  const pendingCommissions = agentCommissions.filter(commission => ['pending', 'approved'].includes(commission.status));
  const totalCommissions = agentCommissions.reduce((sum, commission) => sum + commission.amount, 0);
  const pendingAmount = pendingCommissions.reduce((sum, commission) => sum + commission.amount, 0);
  
  const stats = [
    {
      title: 'Total Clients',
      value: totalClients,
      description: 'Clients you\'ve registered',
      icon: Users,
      iconClass: 'text-blue-500',
    },
    {
      title: 'Total Sales',
      value: `$${totalSales.toFixed(2)}`,
      description: `${totalTransactions} transactions`,
      icon: Package,
      iconClass: 'text-green-500',
    },
    {
      title: 'Earned Commissions',
      value: `$${totalCommissions.toFixed(2)}`,
      description: `${agentCommissions.length} commission entries`,
      icon: DollarSign,
      iconClass: 'text-indigo-500',
    },
    {
      title: 'Pending Payout',
      value: `$${pendingAmount.toFixed(2)}`,
      description: `${pendingCommissions.length} pending entries`,
      icon: PiggyBank,
      iconClass: 'text-amber-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Agent Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {currentAgent?.name || user?.email}
        </p>
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
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            {agentTransactions.length === 0 ? (
              <p className="text-muted-foreground">No sales yet</p>
            ) : (
              <p>Recent sales will be displayed here</p>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Commission History</CardTitle>
          </CardHeader>
          <CardContent>
            {agentCommissions.length === 0 ? (
              <p className="text-muted-foreground">No commissions yet</p>
            ) : (
              <p>Commission history will be displayed here</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
