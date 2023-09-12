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
                <ChakraCarousel gap={50} />
            </Provider>
        </Box>
    )
}

export default Carousel;