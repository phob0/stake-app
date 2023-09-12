import React from 'react'

interface SliderContextValue {
    eventSignal: any | null;
    setEventSignal: React.Dispatch<React.SetStateAction<any | null>>;
}

const SliderContext = React.createContext<SliderContextValue 
| undefined>(undefined);

export default SliderContext;