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
  CardBody 
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
    '/carousel_browse.svg',
    '/carousel_purchase.svg',
    '/carousel_own.svg',
    '/carousel_exit.svg',
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
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            sx={{
              background: 'linear-gradient(180deg, #fff 10%, #121c30 10%)'
            }}
          >
            <Card>
              <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody> 
            </Card>
            <Center>
              <Box
                key={index}
                height={800}
                width={400}
                backgroundImage={`url(${url})`}
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
            </Center>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}