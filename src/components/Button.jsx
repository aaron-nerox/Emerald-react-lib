
const buttonStyle = `inline-flex flex-row items-center 
            bg-primary hover:bg-primary-dark disabled:bg-disabled 
            disabled:text-disabled-dark text-primary-screen 
            rounded-lg transition-all font-semibold`


/**
 * 
 * @param {isDisabled, onClick, children, EmeraldStyle} props 
 * @returns a normal button component that can contain a combination of text and icon
 */
export const Button = (props, EmeraldStyle) => {

    const isDisabled = props.isDisabled;
    
    const handleOnClick = ()=>{
        if(!isDisabled){
            props.onClick();
        }
    };

    return (
        <button 
            disabled={isDisabled}
            className={`m-3 py-3 px-5 ${buttonStyle} ${EmeraldStyle}`}
            onClick={()=> handleOnClick()}>
            {props.children}
        </button>
    )
}

/**
 * 
 * @param {isDisabled, icon, onClick, EmeraldStyle} props 
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
            className={`m-3 p-4 ${buttonStyle} ${props.EmeraldStyle}`}
            disabled={props.isDisabled}
            onClick={handleOnClick}>
            <ButtonIcon icon={props.icon}/>
        </button>
    )
}

/**
 * 
 * @param {isDisabled, text, EmeraldStyle} props 
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
            className={`m-3 py-3 px-5 text-primary hover:bg-primary-surface
            rounded-lg hover:text-primary-dark disabled:text-disabled transition-all 
            font-semibold ${props.EmeraldStyle}`}
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
