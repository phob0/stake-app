import Controller from './components/Controller'
import Carousel from './components/Carousel'
import React from 'react'

interface SliderContextValue {
    eventSignal: any | null;
    setEventSignal: React.Dispatch<React.SetStateAction<any | null>>;
}

const SliderContext = React.createContext<SliderContextValue 
| undefined>(undefined);

function FirstSlider() {
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