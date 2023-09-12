import { 
    Box
} from '@chakra-ui/react'

import { 
    Provider, 
    Carousel as ChakraCarousel
} from "chakra-ui-carousel";

function Carousel() {
    return (
        <Box>
            <Provider>
                <ChakraCarousel children={0} gap={50}>
                    asd
                </ChakraCarousel>
                <ChakraCarousel children={1} gap={50}>
                    asd2
                </ChakraCarousel>
            </Provider>
        </Box>
    )
}

export default Carousel;