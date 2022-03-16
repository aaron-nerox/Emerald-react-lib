

export const Avatar = (props) => {

    return(
        <img src={props.src} 
            alt="image" 
            style={{height: props.size, width: props.size}} 
            className="rounded-full object-cover"/>
    )
}

export const SquareAvatar = (props) => {

    return(
            <img src={props.src} 
            alt="image" 
            style={{height: props.size, width: props.size}} 
            className="rounded-lg object-cover"/>
    )
}