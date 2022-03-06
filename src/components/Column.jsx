

export const Column = (props) => {
    const width = props.width;
    const alignment = props.alignment;
    const style = props.EmeraldStyle;

    let cssAlignment;

    if(alignment.toUpperCase() === "START"){
        cssAlignment = "items-start"
    }else if(alignment.toUpperCase() === "END"){
        cssAlignment = "items-end"
    }else{
        cssAlignment = "items-center"
    }

    return (
        <div
            style={{width: width}}
            className={`h-fit inline-flex flex-col ${style} ${cssAlignment}`}>
            {props.children}
        </div>
    )
}