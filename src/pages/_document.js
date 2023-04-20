import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  // only the background color was set here
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[#f2f2f2]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
