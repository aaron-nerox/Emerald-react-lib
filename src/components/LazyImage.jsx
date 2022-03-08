
/**
 * 
 * @param {src, alt, emeraldStyle} props 
 * @returns 
 */
export const LazyImage = (props) => {
    return (
        <img src={props.src} alt={props.alt} loading="lazy" className={props.emeraldStyle} />
    )
}