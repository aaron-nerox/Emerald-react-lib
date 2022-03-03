

export const ImageCheckBox = (props) => {

    let checkOverlay;

    if(!props.checked){
        checkOverlay = "opacity-0"
    }else{
        checkOverlay = "opacity-1"
    }
    
    
    return (
        <div className="w-fit h-fit grid grid-cols-1 grid-rows-1 place-content-center 
        place-items-center relative select-none" 
            onClick={props.onCheckChange}>
            <img src={props.src} 
                alt="checkImage" 
                className={`rounded-xl object-cover ${props.EmeraldStyle}`}
            />
            <div className={`h-full w-full bg-primary/60 rounded-xl absolute ${checkOverlay} transition-all`}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                        className={`h-1/6 w-1/6 m-2 pointer-events-none 
                        stroke-primary-screen absolute bottom-0 left-0`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
        </div>
    )
}