

/**
 * 
 * @param {count, adaptiveCount height, width, emeraldStyle} props 
 * @returns 
 */
export const Grid = (props) => {

    const cols = props.count;

    let style = {
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, auto)`,
        height: props.height? props.height : 'fit-content',
        width: props.width? props.width : 'fit-content'
    }

    return (
        <div style={style} className={props.emeraldStyle}>
            {props.children}
        </div>
    )
}