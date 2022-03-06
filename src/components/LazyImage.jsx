

export const LazyImage = (props) => {
    return (
        <img src={props.src} alt={props.alt} loading="lazy" className={props.EmeraldStyle} />
    )
}