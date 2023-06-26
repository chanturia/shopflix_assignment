import {ReactNode} from "react";
import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Shopflix Assignment',
    description: 'Shopflix Assignment',
}

interface RootLayoutT {
    children: ReactNode
}

export default function RootLayout({children}: RootLayoutT) {
    return (
        <html>
        <head>
            <title>Shopflix Assignment</title>
        </head>
        <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
        </html>
    )
}
