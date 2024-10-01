import './globals.css'

export const metadata = {
  title: 'Todo App',
  description: 'A simple todo app built with Next.js, Prisma, and Vercel Postgres',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}