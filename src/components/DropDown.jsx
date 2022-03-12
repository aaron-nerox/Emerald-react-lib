import { useState } from "react";

export const DropDown = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [mainName, setMainName] = useState(props.name);

    const options = props.options;
    const style = props.emeraldStyle;
    const itemStyle = props.itemEmeraldStyle;
    const arrowColor = (props.arrowColor !== '') ? props.arrowColor : "#292D32"
    let menuDispaly = "hidden"
    let arrow = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[20px] absolute right-3">
                    <path d="m12 16.8c-0.7 0-1.4-0.27-1.93-0.8l-6.52-6.52c-0.29-0.29-0.29-0.77 0-1.06s0.77-0.29 1.06 0l6.52 6.52c0.48 0.48 1.26 0.48 1.74 0l6.52-6.52c0.29-0.29 0.77-0.29 1.06 0s0.29 0.77 0 1.06l-6.52 6.52c-0.53 0.53-1.23 0.8-1.93 0.8z" fill={arrowColor}/>
                </svg>
    
    function handleOptionSelection(index, option){

        props.onOptionSelect(index, option.value)
        setMainName(mn => mn = option.name)
        setIsExpanded(ie => ie = !isExpanded)

    }

    if(isExpanded){
        menuDispaly = ""
        arrow = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[20px] absolute right-3">
                    <path d="m19.92 15.8c-0.19 0-0.38-0.07-0.53-0.22l-6.52-6.52c-0.48-0.48-1.26-0.48-1.74 0l-6.52 6.52c-0.29 0.29-0.77 0.29-1.06 0s-0.29-0.77 0-1.06l6.52-6.52c1.06-1.06 2.79-1.06 3.86 0l6.52 6.52c0.29 0.29 0.29 0.77 0 1.06-0.15 0.14-0.34 0.22-0.53 0.22z" fill={arrowColor}/>
                </svg>
    }else{
        menuDispaly = "hidden"
        arrow = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[20px] absolute right-3">
                    <path d="m12 16.8c-0.7 0-1.4-0.27-1.93-0.8l-6.52-6.52c-0.29-0.29-0.29-0.77 0-1.06s0.77-0.29 1.06 0l6.52 6.52c0.48 0.48 1.26 0.48 1.74 0l6.52-6.52c0.29-0.29 0.77-0.29 1.06 0s0.29 0.77 0 1.06l-6.52 6.52c-0.53 0.53-1.23 0.8-1.93 0.8z" fill={arrowColor}/>
                </svg>
    }

    return (
        <div className={`h-fit bg-emerald-primary-screen rounded-lg ${style} transition-all`}>
            <div 
                onClick={() => {setIsExpanded(exp => exp = !isExpanded)}}
                className="h-fit w-full px-3 py-3 cursor-pointer inline-flex flex-row items-center relative">
                <p className="select-none">{mainName}</p>
                {arrow}
            </div>
            
            <div className={`h-fit p-1 ${menuDispaly} transition-all`}>
                {options?.map((option, index) => {
                    return <Option 
                                key={index}
                                name={option.name} 
                                onClick={() => handleOptionSelection(index,option)}
                                emeraldStyle={itemStyle}/>
                })}
            </div>
        </div>
    )
}

const Option = (props) => {
    return (
        <div
            className={`select-none cursor-pointer h-fit p-2 py-2 bg-emerald-disabled/20 
                    hover:bg-emerald-primary-surface rounded-lg m-1 my-2 
                    transition-all ${props.emeraldStyle}`}
            onClick={props.onClick}>
            {props.name}
        </div>
    )
}