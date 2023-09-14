'use client'

import {
  useState, 
  useEffect
} from 'react'

import { 
  Box, 
  IconButton, 
  useBreakpointValue, 
  Image, 
  Center,
  Card, 
  CardHeader, 
  CardBody,
  Heading,
  Text,
  HStack,
  Flex,
  SimpleGrid,
  Show
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Carousel({ controllerSignal } : any) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  // The iphone frame
  const frame = '/iphone-13-pro-frame.webp'

  // These are the images used in the slide
  const cards = [
    {
      text: "Our team of property professionals combine a data driven valuation and analysis process with over 20 years of leadership experience at the top real estate companies in Dubai, to source the best rental properties with the highest investment potential for you.",
      image: '/carousel_browse.svg',
      icon: '/browse_icon.svg'
    },
    {
      text: "You can purchase shares in the properties that make sense for you, no matter where you are in the world. All investor funds are held in a segregated account, which is used to create an SPV (holding company) in the DIFC to purchase each property (100% owned by you and the other investors).",
      image: '/carousel_purchase.svg',
      icon: '/purchase_icon.svg'
    },
    {
      text: "Once you invest, we’ll take care of everything, from maintaining the property, to making sure there’s always a tenant in place. You can track your monthly income and manage your investments in real time using our mobile app or web platform.",
      image: '/carousel_own.svg',
      icon: '/own_icon.svg'
    },
    {
      text: 'We work to sell all of our assets at a significantly higher valuation than the purchase price, with investors voting to accept or reject any offers we receive. You can also resell your Stakes during Exit windows, but we do recommend a holding period of 5 years in order to maximise your return.',
      image: '/carousel_exit.svg',
      icon: '/exit_icon.svg'
    }
  ]

  useEffect(() => {
      console.log('carousel', controllerSignal)
      if (controllerSignal != null) {
        slider?.slickGoTo(controllerSignal)
      }
  })

  return (
    <Box position={'relative'} height={'570px'} width={'full'} overflow={'hidden'} mt={20}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Slider */}
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {cards.map((item, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            sx={{
              background: 'linear-gradient(180deg, #fff 10%, #121c30 10%)'
            }}
          >

            <Center>
              <SimpleGrid columns={3}>

                <Card sx={{ 
                    width: 310, 
                    height: 250,
                    right: '-122px',
                    bottom: '-158px' 
                  }}>
                  <CardBody>
                    <Text>
                      { item.text }
                    </Text>
                  </CardBody> 
                </Card>

                <Box
                  key={index}
                  height={800}
                  width={400}
                  backgroundImage={`url(${item.image})`}
                  backgroundSize="cover"
                  backgroundRepeat="no-repeat"
                >
                  <Box
                    key={index}
                    height={821}
                    width={400}
                    backgroundImage={`url(${frame})`}
                    backgroundSize="contain"
                    backgroundRepeat="no-repeat"
                    ml={"-11px"}
                  />
                </Box>

                <Card sx={{ width: 144, height: 144, bottom: '-365px' }}>
                  <CardBody>
                    <Image
                      src={item.icon}
                    />
                  </CardBody> 
                </Card> 

              </SimpleGrid>
            </Center>

          </Box>
        ))}
      </Slider>
    </Box>
  )
}