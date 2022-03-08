
/**
 * 
 * @param {space, orientation} props 
 * @returns 
 */
export const Spacer = (props) => {
    let space = props.space;
    let orientation = props.orientation;
    if(orientation.toUpperCase() === "VERTICAL"){
        return (
            <div style={{height: space}} ></div>
        )
    }else{
        return (
            <div style={{width: space}} ></div>
        )
    }
    
}