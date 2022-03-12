
/**
 * 
 * @param {emeraldStyle, children} props 
 * @returns 
 */
export const AdaptiveContainer = (props) => {
    const style = props.emeraldStyle;
    
    return (
        <div className={`inline-flex flex-col sm:flex-row items-center ${style}`}>
            {props.children}
        </div> 
    )
    
}