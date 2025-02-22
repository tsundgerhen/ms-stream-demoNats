import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html suppressHydrationWarning>
      <Head />
      <body className="bg-transparent">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}