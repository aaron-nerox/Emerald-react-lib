

/**
 * 
 * @param {alignment, emeraldStyle, children} props 
 * @returns 
 */
export const Column = (props) => {
    const alignment = props.alignment;
    const style = props.emeraldStyle;

    let cssAlignment;

    if(alignment.toUpperCase() === "START"){
        cssAlignment = "items-start"
    }else if(alignment.toUpperCase() === "END"){
        cssAlignment = "items-end"
    }else{
        cssAlignment = "items-center"
    }

    return (
        <div className={`h-fit inline-flex flex-col ${cssAlignment} ${style}`}>
            {props.children}
        </div>
    )
}