
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

export interface Commission {
  id: string;
  transactionId: string;
  agentId: string;
  amount: number;
  status: 'pending' | 'approved' | 'paid' | 'rejected';
  dateEarned: string;
  datePaid?: string;
  paymentMethod?: string;
  notes?: string;
}

interface CommissionState {
  commissions: Commission[];
  addCommission: (commission: Omit<Commission, 'id'>) => string;
  updateCommission: (id: string, updates: Partial<Omit<Commission, 'id'>>) => void;
  deleteCommission: (id: string) => void;
  getCommissionById: (id: string) => Commission | undefined;
  getCommissionsByAgentId: (agentId: string) => Commission[];
  getCommissionsByStatus: (status: Commission['status']) => Commission[];
  getCommissionsByTransactionId: (transactionId: string) => Commission | undefined;
}

export const useCommissionStore = create<CommissionState>()(
  persist(
    (set, get) => ({
      commissions: [],
      addCommission: (commission) => {
        const id = uuidv4();
        set((state) => ({
          commissions: [...state.commissions, { ...commission, id }],
        }));
        return id;
      },
      updateCommission: (id, updates) => {
        set((state) => ({
          commissions: state.commissions.map((commission) =>
            commission.id === id ? { ...commission, ...updates } : commission
          ),
        }));
      },
      deleteCommission: (id) => {
        set((state) => ({
          commissions: state.commissions.filter((commission) => commission.id !== id),
        }));
      },
      getCommissionById: (id) => {
        return get().commissions.find((commission) => commission.id === id);
      },
      getCommissionsByAgentId: (agentId) => {
        return get().commissions.filter((commission) => commission.agentId === agentId);
      },
      getCommissionsByStatus: (status) => {
        return get().commissions.filter((commission) => commission.status === status);
      },
      getCommissionsByTransactionId: (transactionId) => {
        return get().commissions.find((commission) => commission.transactionId === transactionId);
      },
    }),
    {
      name: 'commission-storage',
    }
  )
);
