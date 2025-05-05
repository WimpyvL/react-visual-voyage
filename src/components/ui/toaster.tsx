
import React from "react"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

export function Toaster() {
  // Sonner toaster is used now, no need for the toasts property
  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  )
}
