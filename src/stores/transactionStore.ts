
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

export interface Transaction {
  id: string;
  agentId: string;
  clientId: string;
  productId: string;
  date: string;
  amount: number;
  commissionAmount: number;
  commissionRate: number;
  status: 'pending' | 'completed' | 'cancelled';
  paymentMethod?: string;
  notes?: string;
}

interface TransactionState {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => string;
  updateTransaction: (id: string, updates: Partial<Omit<Transaction, 'id'>>) => void;
  deleteTransaction: (id: string) => void;
  getTransactionById: (id: string) => Transaction | undefined;
  getTransactionsByAgentId: (agentId: string) => Transaction[];
  getTransactionsByClientId: (clientId: string) => Transaction[];
  getTransactionsByStatus: (status: Transaction['status']) => Transaction[];
}

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set, get) => ({
      transactions: [],
      addTransaction: (transaction) => {
        const id = uuidv4();
        set((state) => ({
          transactions: [...state.transactions, { ...transaction, id }],
        }));
        return id;
      },
      updateTransaction: (id, updates) => {
        set((state) => ({
          transactions: state.transactions.map((transaction) =>
            transaction.id === id ? { ...transaction, ...updates } : transaction
          ),
        }));
      },
      deleteTransaction: (id) => {
        set((state) => ({
          transactions: state.transactions.filter((transaction) => transaction.id !== id),
        }));
      },
      getTransactionById: (id) => {
        return get().transactions.find((transaction) => transaction.id === id);
      },
      getTransactionsByAgentId: (agentId) => {
        return get().transactions.filter((transaction) => transaction.agentId === agentId);
      },
      getTransactionsByClientId: (clientId) => {
        return get().transactions.filter((transaction) => transaction.clientId === clientId);
      },
      getTransactionsByStatus: (status) => {
        return get().transactions.filter((transaction) => transaction.status === status);
      },
    }),
    {
      name: 'transaction-storage',
    }
  )
);
