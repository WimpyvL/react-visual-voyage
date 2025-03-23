
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

export interface Client {
  id: string;
  agentId: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  address?: string;
  registrationDate: string;
  status: 'active' | 'inactive' | 'lead';
  notes?: string;
}

interface ClientState {
  clients: Client[];
  addClient: (client: Omit<Client, 'id'>) => string;
  updateClient: (id: string, updates: Partial<Omit<Client, 'id'>>) => void;
  deleteClient: (id: string) => void;
  getClientsByAgentId: (agentId: string) => Client[];
  getClientById: (id: string) => Client | undefined;
}

export const useClientStore = create<ClientState>()(
  persist(
    (set, get) => ({
      clients: [],
      addClient: (client) => {
        const id = uuidv4();
        set((state) => ({
          clients: [...state.clients, { ...client, id }],
        }));
        return id;
      },
      updateClient: (id, updates) => {
        set((state) => ({
          clients: state.clients.map((client) =>
            client.id === id ? { ...client, ...updates } : client
          ),
        }));
      },
      deleteClient: (id) => {
        set((state) => ({
          clients: state.clients.filter((client) => client.id !== id),
        }));
      },
      getClientsByAgentId: (agentId) => {
        return get().clients.filter((client) => client.agentId === agentId);
      },
      getClientById: (id) => {
        return get().clients.find((client) => client.id === id);
      },
    }),
    {
      name: 'client-storage',
    }
  )
);
