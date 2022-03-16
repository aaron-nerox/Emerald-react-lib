
/**
 * 
 * @param {height, width, checked, onCheckChange, src, emeraldStyle, overlayStyle} props 
 * @returns 
 */
export const ImageCheckBox = (props) => {

    const height = props.height;
    const width = props.width;

    let checkOverlay;

    if(!props.checked){
        checkOverlay = "opacity-0"
    }else{
        checkOverlay = "opacity-1"
    }
    
    
    return (
        <div 
            style={{height: height, width: width}}
            className={`grid place-content-center 
            place-items-center relative select-none overflow-clip ${props.emeraldStyle}`}
            onClick={props.onCheckChange}>
            <img
                style={{height: height, width: width}} 
                src={props.src} 
                alt="checkImage" 
                className={`rounded-xl object-cover`}
            />
            <div className={`h-full w-full bg-emerald-primary/60 rounded-xl absolute ${checkOverlay} transition-all ${props.overlayStyle}`}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                        className={`h-1/6 w-1/6 m-2 pointer-events-none 
                        stroke-emerald-primary-screen absolute bottom-0 left-0`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
        </div>
    )
}