import { 
    Box,
    Card,
    Heading
 } from '@chakra-ui/react'

function InvestmentController() {
    return (
        <Box>
            <Card>
                <Heading as='h5' size='sm'>How much do you want to invest?</Heading>
            </Card>
        </Box>
    )
}

export default InvestmentController