

export const Divider = (props) => {

    const orientation = props.orientation;
    let sizing = 'h-[1.5px]';
    const style = props.emeraldStyle;

    if(orientation){
        if(orientation.toUpperCase() === 'VERTICAL'){
            sizing = 'w-[1.5px] h-screen'
        }else{
            sizing = 'h-[1.5px]'
        }
    }

    return (
        <div className={`${sizing} ${style} bg-emerald-disabled`}>
        </div>
    )
}