import type React from "react"
import { AuthRequired } from "../(components)/auth-required"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <AuthRequired>{children}</AuthRequired>
}
