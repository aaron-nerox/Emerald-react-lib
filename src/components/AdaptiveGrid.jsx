

export const AdaptiveGrid = (props) => {
    let elementSize = props.elementSize;
    let style = props.emeraldStyle;
    let gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${elementSize}, 1fr))`,
    }

    return (
        <div style={gridStyle} className={`${style}`}>
            {props.children}
        </div>
    )
}