import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

export default function ({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}