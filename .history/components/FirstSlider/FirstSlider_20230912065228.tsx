import Controller from './components/Controller'
import Carousel from './components/Carousel'
import SliderContext from './SliderContext';

import React from 'react';

function FirstSlider() {
    const [eventSignal, setEventSignal] = React.useState<any | null>(null);

    return (
        <>
            <SliderContext.Provider value={{eventSignal, setEventSignal}}>
                <Controller/>
                <Carousel />
            </SliderContext.Provider>
        </>
    )
}

export default FirstSlider;