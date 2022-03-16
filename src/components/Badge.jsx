

export const Badge = (props) => {
    let color = props.color;
    let visibility = props.visible;
    let visibilityStyle = "opacity-0"
    let position = props.position;
    let positionStyle = "top-0 right-0"

    if(visibility){
        visibilityStyle = "opacity-1"
    }else{
        visibilityStyle = "opacity-0"
    }

    switch(position.toUpperCase()){
        case "TOPLEFT": {
            positionStyle = "top-0 left-0"
            break;
        }
        case "BOTTOMRIGHT": {
            positionStyle = "bottom-0 right-0"
            break;
        }
        case "BOTTOMLEFT": {
            positionStyle = "bottom-0 left-0"
            break;
        }
        default: {
            positionStyle = "top-0 right-0"
            break;
        }
    }

    return (
        <div className="w-fit h-fit relative">
            <div 
                style={{backgroundColor: color}}
                className={`w-[15px] h-[15px] rounded-full 
            bg-emerald-primary absolute ${positionStyle} ${visibilityStyle} 
            transition-all`}></div>
            <div className="w-fit h-fit m-1">
                {props.children}
            </div>
        </div>
    )
}

export const LabeledBadge = (props) => {
    let color = props.color;
    let textColor = props.labelColor;
    let visibility = props.visible;
    let visibilityStyle = "opacity-0"
    let position = props.position;
    let positionStyle = "top-0 right-0"

    if(visibility){
        visibilityStyle = "opacity-1"
    }else{
        visibilityStyle = "opacity-0"
    }

    switch(position.toUpperCase()){
        case "TOPLEFT": {
            positionStyle = "top-0 left-0"
            break;
        }
        case "BOTTOMRIGHT": {
            positionStyle = "bottom-0 right-0"
            break;
        }
        case "BOTTOMLEFT": {
            positionStyle = "bottom-0 left-0"
            break;
        }
        default: {
            positionStyle = "top-0 right-0"
            break;
        }
    }

    return (
        <div className="w-fit h-fit relative">
            <div 
                style={{backgroundColor: color, color: textColor}}
                className={`w-[20px] h-[20px] rounded-full grid content-center 
                justify-items-center text-xs bg-emerald-primary text-emerald-primary-screen 
                absolute ${positionStyle} ${visibilityStyle} transition-all`}>
                {props.label}
            </div>
            <div className="w-fit h-fit m-1">
                {props.children}
            </div>
        </div>
    )
}

export const AdaptiveBadge = (props) => {
    let color = props.color;
    let textColor = props.labelColor;
    let visibility = props.visible;
    let visibilityStyle = "opacity-0"
    let position = props.position;
    let positionStyle = "top-0 right-0"

    if(visibility){
        visibilityStyle = "opacity-1"
    }else{
        visibilityStyle = "opacity-0"
    }

    switch(position.toUpperCase()){
        case "TOPLEFT": {
            positionStyle = "top-0 left-0"
            break;
        }
        case "BOTTOMRIGHT": {
            positionStyle = "bottom-0 right-0"
            break;
        }
        case "BOTTOMLEFT": {
            positionStyle = "bottom-0 left-0"
            break;
        }
        default: {
            positionStyle = "top-0 right-0"
            break;
        }
    }

    return (
        <div className="w-fit h-fit relative">
            <div 
                style={{backgroundColor: color, color: textColor}}
                className={`min-w-[20px] max-w-[33px] w-fit h-[20px] px-1 rounded-full grid content-center 
                justify-items-center text-xs bg-emerald-primary text-emerald-primary-screen 
                absolute ${positionStyle} ${visibilityStyle} transition-all overflow-hidden`}>
                {props.label}
            </div>
            <div className="w-fit h-fit m-1">
                {props.children}
            </div>
        </div>
    )
}