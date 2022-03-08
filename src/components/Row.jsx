
/**
 * 
 * @param {alignment, emeraldStyle, children} props 
 * @returns 
 */
export const Row = (props) => {

    const alignment = props.alignment;
    const style = props.emeraldStyle;

    let cssAlignment;

    if(alignment){
        if(alignment.toUpperCase() === "TOP"){
            cssAlignment = "items-start"
        }else if(alignment.toUpperCase() === "BOTTOM"){
            cssAlignment = "items-end"
        }else{
            cssAlignment = "items-center"
        }
    }else{
        cssAlignment = "items-center"
    }

    return (
        <div className={`inline-flex flex-row ${style} ${cssAlignment}`}>
            {props.children}
        </div>
    )
}