import { useState } from 'react';

export function useScreenClass() {
    let screenWidth = screen.availWidth;

    const [screenClass, setScreenWidth] = useState(getScreenWidth());
    
    window.onresize = () => setScreenWidth(getScreenWidth());
    
    function getScreenWidth(){
        if(screenWidth >= 1008){
            return 'LARGE'
        }else if(screenWidth > 641 && screenWidth < 1008){
            return 'MEDIUM'
        }else{
            return 'SMALL'
        }
    }

    return screenClass;

    
}
