

export const Row = (props) => {

    const height = props.height;
    const alignment = props.alignment;
    const style = props.EmeraldStyle;

    let cssAlignment;

    if(alignment.toUpperCase() === "TOP"){
        cssAlignment = "items-start"
    }else if(alignment.toUpperCase() === "BOTTOM"){
        cssAlignment = "items-end"
    }else{
        cssAlignment = "items-center"
    }

    return (
        <div style={{height: height}}
            className={`inline-flex flex-row ${style} ${cssAlignment}`}>
            {props.children}
        </div>
    )
}