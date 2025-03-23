
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

export type ProductCategory = 'Web' | 'Fiber' | 'Solar' | 'Hosting' | 'Other';

export interface ProductFeature {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  commissionRate: number; // Default commission percentage for this product
  features: ProductFeature[];
  active: boolean;
  imageUrl?: string;
}

interface ProductState {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => string;
  updateProduct: (id: string, updates: Partial<Omit<Product, 'id'>>) => void;
  deleteProduct: (id: string) => void;
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (category: ProductCategory) => Product[];
  getActiveProducts: () => Product[];
}

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      addProduct: (product) => {
        const id = uuidv4();
        set((state) => ({
          products: [...state.products, { ...product, id }],
        }));
        return id;
      },
      updateProduct: (id, updates) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id ? { ...product, ...updates } : product
          ),
        }));
      },
      deleteProduct: (id) => {
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        }));
      },
      getProductById: (id) => {
        return get().products.find((product) => product.id === id);
      },
      getProductsByCategory: (category) => {
        return get().products.filter((product) => product.category === category);
      },
      getActiveProducts: () => {
        return get().products.filter((product) => product.active);
      },
    }),
    {
      name: 'product-storage',
    }
  )
);
