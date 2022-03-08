
const buttonStyle = `inline-flex flex-row items-center 
            bg-emerald-primary hover:bg-emerald-primary-dark disabled:bg-emerald-disabled 
            disabled:text-emerald-disabled-dark text-emerald-primary-screen 
            rounded-lg transition-all font-semibold`


/**
 * 
 * @param {isDisabled, onClick, children, emeraldStyle} props 
 * @returns a normal button component that can contain a combination of text and icon
 */
export const Button = (props) => {

    const isDisabled = props.isDisabled;
    
    const handleOnClick = ()=>{
        if(!isDisabled){
            props.onClick();
        }
    };

    return (
        <button 
            disabled={isDisabled}
            className={`${props.emeraldStyle} m-3 py-3 px-5 ${buttonStyle}`}
            onClick={()=> handleOnClick()}>
            {props.children}
        </button>
    )
}

/**
 * 
 * @param {isDisabled, icon, onClick, emeraldStyle} props 
 * @returns an icon button as a perfect square
 */
export const IconifiedButton = (props) => {

    function handleOnClick(){
        if(!props.isDisabled){
            props.onClick()
        }
    }

    return (
        <button 
            className={`${props.emeraldStyle} m-3 p-4 ${buttonStyle}`}
            disabled={props.isDisabled}
            onClick={handleOnClick}>
            <ButtonIcon icon={props.icon}/>
        </button>
    )
}

/**
 * 
 * @param {isDisabled, text, emeraldStyle} props 
 * @returns 
 */
export const TextButton = (props) => {

    function handleOnClick(){
        if(!props.isDisabled){
            props.onClick();
        }
    }

    return (
        <button 
            disabled={props.isDisabled}
            className={`${props.emeraldStyle} m-3 py-3 px-5 
            text-emerald-primary hover:bg-emerald-primary-surface
            rounded-lg hover:text-emerald-primary-dark disabled:text-emerald-disabled 
            transition-all font-semibold`}
            onClick={handleOnClick}>
            {props.text}
        </button>
    )
}


/**
 * 
 * @param {icon} props 
 * @returns an icon with specified height
 */
export const ButtonIcon = (props) => {
    const icon = props.icon;

    return (
        <img src={icon} alt="icon" className="h-[20px]" />
    )
}
