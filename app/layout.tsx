import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { headers, cookies } from 'next/headers';

export const runtime = 'edge';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // server side logic is ok
  const { name } = await (await fetch('https://swapi.dev/api/people/4')).json();
  console.log(`\x1b[31m\x1b[40m ${name}! \x1b[0m`);

  // using headers() is also ok
  const reqHeaders = headers();
  console.log(JSON.stringify({reqHeaders}));

  // using cookies() is ok too
  const reqCookies = cookies();
  console.log(JSON.stringify({reqCookies}));

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
