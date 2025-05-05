
import * as React from "react"
import { toast as sonnerToast } from "sonner";

export type ToastProps = React.ComponentPropsWithoutRef<typeof sonnerToast> & {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export type ToastActionElement = React.ReactElement<typeof ToastAction>

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
