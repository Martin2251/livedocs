
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata ={
  title:"LiveDocs",
  description:"Your editor"
}

export default function RootLayout({ children }: {children:React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
   
      <body
        className={cn(
          "min-h-screen  font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
