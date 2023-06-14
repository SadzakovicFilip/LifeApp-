import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Dashboard from '@/components/Dashboard/dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <Dashboard/>
}
