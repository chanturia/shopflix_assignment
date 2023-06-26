import {ReactNode} from "react";
import './globals.css'

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
        <body suppressHydrationWarning={true}>{children}</body>
        </html>
    )
}
