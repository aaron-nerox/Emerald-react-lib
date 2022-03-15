import { useState } from "react";

export const ToolTip = (props) => {
    const placement = props.placement;
    let positioning = 'top-[100%]';
    let alignment = 'flex-col';
    const [visibility, setVisibility] = useState('hidden opacity-0');
    let ToolTipStyle = `w-max h-[42px] px-6 py-2 rounded-md bg-emerald-primary-text/90
    grid content-center justify-items-center text-emerald-primary-screen drop-shadow-lg 
    cursor-pointer ${props.emeraldStyle} absolute z-10 transition-all`;
    let content = <>
                    {props.children}
                    <div className={`${ToolTipStyle} ${positioning} ${visibility}`}>
                        {props.tip}
                    </div>
                </>;
    
    if(placement){
        switch(placement.toUpperCase()){
            case 'TOP': {
                alignment = 'flex-col';
                positioning = 'bottom-[100%]'
                content = <>
                            <div className={`${ToolTipStyle} ${positioning} ${visibility}`}>
                                {props.tip}
                            </div>
                            {props.children}
                        </>;
                break;
            }
            case 'LEFT': {
                alignment = 'flex-row';
                positioning = 'right-[100%]'
                content = <>
                            <div className={`${ToolTipStyle} ${positioning} ${visibility}`}>
                                {props.tip}
                            </div>
                            {props.children}
                        </>;
                break;
            }
            case 'RIGHT': {
                alignment = 'flex-row';
                positioning = 'left-[100%]';
                content = <>
                            {props.children}
                            <div className={`${ToolTipStyle} ${positioning} ${visibility}`}>
                                {props.tip}
                            </div>
                        </>;
                break;
            }
            default: {
                alignment = 'flex-col';
                positioning = 'top-[100%]'
                content = <>
                            {props.children}
                            <div className={`${ToolTipStyle} ${positioning} ${visibility}`}>
                                {props.tip}
                            </div>
                        </>
                break;
            }
        }
    }

    return (
        <div className={`inline-flex ${alignment} items-center relative cursor-pointer`}
            onMouseOver={() => {setVisibility('opacity-1')}}
            onMouseLeave={() => {setVisibility('hidden opacity-0')}}
        >
            {content}
        </div>
    )
}