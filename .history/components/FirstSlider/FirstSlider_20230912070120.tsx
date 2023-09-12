import Controller from './components/Controller'
import Carousel from './components/Carousel'
import SliderContext from './SliderContext';

import { 
    useState, 
    useEffect 
} from 'react';

function FirstSlider() {
    const [eventSignal, setEventSignal] = useState<any | null>(null);

    return (
        <>
            <SliderContext.Provider value={{eventSignal, setEventSignal}}>
                <Controller/>
                <Carousel 
                    controllerSignal={eventSignal}
                />
            </SliderContext.Provider>
        </>
    )
}

export default FirstSlider;