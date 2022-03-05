
export const RoundSwitch = (props) => {
    
    let toggleBody;
    let toggleTic;

    if(props.disabled){
        toggleBody = "bg-disabled justify-items-start"
        toggleTic = "bg-disabled-dark"
    }else{
        toggleTic = "bg-primary-screen"
        if(props.toggled){
            toggleBody = "justify-items-end bg-primary"
        }else{
            toggleBody = "justify-items-start bg-disabled"
        }
    }

    function handleToggle(){
        if(!props.disabled){
            props.onToggle();
        }
    }

    return (
        <div className={`w-[54px] h-[32px] grid content-center  
                rounded-full cursor-pointer transition-all  ${toggleBody}`}
                onClick={handleToggle}>
            <div className={`w-[22px] h-[22px] m-1 rounded-full 
                 transition-all ${toggleTic}`}></div>
        </div>
    )
}

export const SquareSwitch = (props) => {
    
    let toggleBody;
    let toggleTic;

    if(props.disabled){
        toggleBody = "bg-disabled justify-items-start"
        toggleTic = "bg-disabled-dark"
    }else{
        toggleTic = "bg-primary-screen"
        if(props.toggled){
            toggleBody = "justify-items-end bg-primary"
        }else{
            toggleBody = "justify-items-start bg-disabled"
        }
    }

    return (
        <div className={`w-[54px] h-[32px] grid content-center  
                rounded-md cursor-pointer transition-all ${toggleBody}`}
                onClick={props.onToggle}>
            <div className={`w-[22px] h-[22px] m-1 rounded-sm
                 transition-all ${toggleTic}`}></div>
        </div>
    )
}