import { 
    Box
} from '@chakra-ui/react'

import { Provider } from "chakra-ui-carousel";

function Carousel() {
    return (
        <Box>
            <Provider>// Carousel content</Provider>
        </Box>
    )
}

export default Carousel;