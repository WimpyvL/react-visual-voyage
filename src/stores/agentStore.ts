
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

export interface Agent {
  id: string;
  userId: string; // Supabase auth user ID
  name: string;
  email: string;
  phone: string;
  commissionRate: number; // Default commission percentage
  status: 'active' | 'inactive';
  joinDate: string;
  totalSales: number;
  totalCommission: number;
  profileImageUrl?: string;
}

interface AgentState {
  agents: Agent[];
  addAgent: (agent: Omit<Agent, 'id'>) => string;
  updateAgent: (id: string, updates: Partial<Omit<Agent, 'id'>>) => void;
  deleteAgent: (id: string) => void;
  getAgentByUserId: (userId: string) => Agent | undefined;
  getAgentById: (id: string) => Agent | undefined;
}

export const useAgentStore = create<AgentState>()(
  persist(
    (set, get) => ({
      agents: [],
      addAgent: (agent) => {
        const id = uuidv4();
        set((state) => ({
          agents: [...state.agents, { ...agent, id }],
        }));
        return id;
      },
      updateAgent: (id, updates) => {
        set((state) => ({
          agents: state.agents.map((agent) =>
            agent.id === id ? { ...agent, ...updates } : agent
          ),
        }));
      },
      deleteAgent: (id) => {
        set((state) => ({
          agents: state.agents.filter((agent) => agent.id !== id),
        }));
      },
      getAgentByUserId: (userId) => {
        return get().agents.find((agent) => agent.userId === userId);
      },
      getAgentById: (id) => {
        return get().agents.find((agent) => agent.id === id);
      },
    }),
    {
      name: 'agent-storage',
    }
  )
);
