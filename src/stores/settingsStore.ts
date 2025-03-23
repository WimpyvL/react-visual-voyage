
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SystemSettings {
  companyName: string;
  companyLogo?: string;
  defaultCommissionRate: number;
  paymentMethods: string[];
  notificationsEnabled: boolean;
  theme: 'light' | 'dark';
}

interface SettingsState {
  settings: SystemSettings;
  updateSettings: (updates: Partial<SystemSettings>) => void;
}

const DEFAULT_SETTINGS: SystemSettings = {
  companyName: 'Agent Commission System',
  defaultCommissionRate: 10, // 10%
  paymentMethods: ['Bank Transfer', 'Check', 'Cash'],
  notificationsEnabled: true,
  theme: 'light',
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: DEFAULT_SETTINGS,
      updateSettings: (updates) => {
        set((state) => ({
          settings: { ...state.settings, ...updates },
        }));
      },
    }),
    {
      name: 'settings-storage',
    }
  )
);
