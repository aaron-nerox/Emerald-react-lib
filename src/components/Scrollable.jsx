

export const Scrollable = (props) => {

    let orientation = props.orientation;
    const style = props.emeraldStyle;
    let orientationStyle = "";

    if(orientation){
        if(orientation.toUpperCase() == "HORIZONTAL"){
            orientationStyle = "overflow-x-scroll overflow-y-hidden"
        }else if(orientation.toUpperCase() === "XY"){
            orientationStyle = "overflow-y-scroll overflow-x-scroll"
        }else{
            orientationStyle = "overflow-y-scroll overflow-x-hidden"
        }
    }
    

    return (
        <div className={`${orientationStyle} ${style}`}>
            {props.children}
        </div>
    )
}