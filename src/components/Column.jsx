

export const Column = (props) => {
    const width = props.width;
    const alignment = props.alignment

    let cssAlignment;

    if(alignment === "center"){
        cssAlignment = "items-center"
    }else if(alignment === "start"){
        cssAlignment = "items-start"
    }else{
        cssAlignment = "items-end"
    }

    return (
        <div
            style={{width: width}}
            className={"h-fit inline-flex flex-col " + cssAlignment}>
            {props.children}
        </div>
    )
}