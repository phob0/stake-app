import type { AppProps } from 'next/app'
import Layout from './layout'
import { ChakraProvider } from '@chakra-ui/react'

export default function ({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}