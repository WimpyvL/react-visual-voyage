
import * as React from "react"
import { toast as sonnerToast, ToastT } from "sonner";

export type ToastProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
  [key: string]: any;
}

export const toast = ({
  title,
  description,
  variant,
  action,
  ...props
}: ToastProps) => {
  return sonnerToast(title || "", {
    description,
    action,
    ...props,
  })
}

export function useToast() {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
    error: (title: string, description?: string) => {
      return toast({
        title,
        description,
        // We still pass variant for compatibility with other code,
        // though sonner doesn't use it directly
        variant: "destructive",
      })
    },
    success: (title: string, description?: string) => {
      return toast({
        title,
        description,
      })
    }
  }
}
