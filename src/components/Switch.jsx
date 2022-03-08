
/**
 * 
 * @param {disabled, toggled, emeraldColor, onToggle} props 
 * @returns 
 */
export const RoundSwitch = (props) => {
    
    let toggleBody;
    let toggleTic;
    let color = {};

    if(props.disabled){
        toggleBody = "bg-emerald-disabled justify-items-start"
        toggleTic = "bg-emerald-disabled-dark"
        color = {}
    }else{
        toggleTic = "bg-emerald-primary-screen"
        if(props.toggled){
            toggleBody = "justify-items-end bg-emerald-primary"
            color = {backgroundColor: props.emeraldColor}
        }else{
            toggleBody = "justify-items-start bg-emerald-disabled"
            color = {}
        }
    }

    function handleToggle(){
        if(!props.disabled){
            props.onToggle();
        }
    }

    return (
        <div    style={color}
                className={`w-[54px] h-[32px] grid content-center  
                rounded-full cursor-pointer transition-all  ${toggleBody}`}
                onClick={handleToggle}>
            <div className={`w-[22px] h-[22px] m-1 rounded-full 
                 transition-all ${toggleTic}`}></div>
        </div>
    )
}

/**
 * 
 * @param {disabled, toggled, emeraldColor, onToggle} props 
 * @returns 
 */
export const SquareSwitch = (props) => {
    
    let toggleBody;
    let toggleTic;
    let color = {};

    if(props.disabled){
        toggleBody = "bg-emerald-disabled justify-items-start"
        toggleTic = "bg-emerald-disabled-dark"
        color = {}
    }else{
        toggleTic = "bg-emerald-primary-screen"
        if(props.toggled){
            toggleBody = "justify-items-end bg-emerald-primary"
            color = {backgroundColor: props.emeraldColor}
        }else{
            toggleBody = "justify-items-start bg-emerald-disabled"
            color = {}
        }
    }

    return (
        <div style={color}
             className={`w-[54px] h-[32px] grid content-center  
                rounded-md cursor-pointer transition-all ${toggleBody}`}
                onClick={props.onToggle}>
            <div className={`w-[22px] h-[22px] m-1 rounded-sm
                 transition-all ${toggleTic}`}></div>
        </div>
    )
}