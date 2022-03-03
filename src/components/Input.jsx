import { useState } from 'react';
import EyeIcon from '../assets/icons/eye.svg';
import EyeSlashIcon from '../assets/icons/eye_slash.svg';

/**
 * 
 * @param {icon, disabled, type, name, value, placeholder
 * , onValueChange, type, EmeraldStyle} props 
 * @returns an input that is fully customizable
 */
 export const Input = (props) => {
    let icon;
    let bg;

    if(props.icon){
        icon = <img src={props.icon} alt="icon" className="h-[25px] mr-3"/>
    }else{
        icon = <div></div>
    }

    if(props.disabled){
        bg = `bg-disabled`
    }else{
        bg = `bg-primary-screen`
    }

    return (
        <div className={`h-[60px] px-3 
        inline-flex flex-row items-center rounded-lg ${bg} ${props.EmeraldStyle}`}>

            {icon}
            <input 
                disabled={props.disabled}
                type={props.type} 
                name={props.name} 
                value={props.value}
                placeholder={props.placeholder}
                onChange={event => props.onValueChange(event)}
                className="h-full w-full outline-none disabled:bg-disabled 
                disabled:placeholder:text-disabled-dark rounded-lg"/>
        </div>
    )
}


export const PasswordInput = (props) => {
    let icon;
    let bg;
    const [eyeIcon, setEyeIcon] = useState(EyeSlashIcon);
    const [isActive, setIsActive] = useState(false);
    const [type, setType] = useState("text");

    if(props.icon){
        icon = <img src={props.icon} alt="icon" className="h-[25px] mr-3"/>
    }else{
        icon = <div></div>
    }

    if(props.disabled){
        bg = `bg-disabled`
    }else{
        bg = `bg-primary-screen`
    }

    function togglePassword(){
        setIsActive(!isActive);
        if(isActive){
            setEyeIcon(EyeSlashIcon);
            setType("text");
        }else{
            setEyeIcon(EyeIcon);
            setType("password");
        }
    }

    return (
        <div className={`h-[60px] px-3 
        inline-flex flex-row items-center rounded-lg ${bg} ${props.EmeraldStyle}`}>
            {icon}
            <input 
                disabled={props.disabled}
                type={type} 
                name={props.name} 
                value={props.value}
                placeholder={props.placeholder}
                onChange={event => props.onValueChange(event)}
                className="h-full w-full outline-none disabled:bg-disabled 
                disabled:placeholder:text-disabled-dark rounded-lg"/>
            <img src={eyeIcon} alt="eyeIcon" onClick={togglePassword} className="h-[20px] mx-3"/>
        </div>
    )
}


export const ActionInput = (props) => {
    let bg;

    if(props.disabled){
        bg = `bg-disabled`
    }else{
        bg = `bg-primary-screen`
    }

    return (
        <div className={`h-[60px] px-3 
        inline-flex flex-row items-center rounded-lg ${bg} ${props.EmeraldStyle}`}>
            <input 
                disabled={props.disabled}
                type={props.type} 
                name={props.name} 
                value={props.value}
                placeholder={props.placeholder}
                onChange={event => props.onValueChange(event)}
                className="h-full w-full outline-none disabled:bg-disabled 
                disabled:placeholder:text-disabled-dark rounded-lg"/>

            <button disabled={props.disabled}
                    className="h-[40px] w-[40px] bg-primary-accent 
                    hover:bg-primary disabled:bg-disabled rounded-lg transition-all">
                <img src={props.actionIcon} alt="eyeIcon" 
                onClick={props.onActionClick} className="h-[20px] m-auto"/>
            </button>
        </div>
    )
}


