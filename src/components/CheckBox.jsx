
export const RoundCheckBox = (props) => {

    const style = props.EmeraldStyle;
    let tic;

    if(props.checked){
        let stroke;
        if(!props.disabled){
            stroke = "stroke-primary-surface"
        }else{
            stroke = "stroke-disabled"
        }
        tic = <svg xmlns="http://www.w3.org/2000/svg" className={`absolute h-5 w-5 pointer-events-none ${stroke}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
    }else{
        tic = <div></div>
    }

    return (
        <div className="w-fit h-fit grid grid-cols-1 grid-rows-1 place-items-center place-content-center relative">
            <input 
            type="checkbox"
            name={props.name}
            value={props.value}
            checked={props.checked}
            onChange={props.onCheckChange}
            disabled={props.disabled}
            className={`h-7 w-7 m-2 rounded-full appearance-none
            border-[2px] border-primary bg-primary-surface 
            checked:bg-primary disabled:bg-disabled-dark disabled:border-disabled-dark 
            transition-all ${style}`}
            />
            {tic}
        </div>
    )
}

export const RoundLineCheckBox = (props) => {

    const style = props.EmeraldStyle;
    let tic;

    if(props.checked){
        let stroke;
        if(!props.disabled){
            stroke = "stroke-primary"
        }else{
            stroke = "stroke-disabled-dark"
        }
        tic = <svg xmlns="http://www.w3.org/2000/svg" className={`absolute h-5 w-5 pointer-events-none ${stroke}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
    }else{
        tic = <div></div>
    }

    return (
        <div className="w-fit h-fit grid grid-cols-1 grid-rows-1 place-items-center place-content-center relative">
            <input 
            type="checkbox"
            name={props.name}
            value={props.value}
            checked={props.checked}
            onChange={props.onCheckChange}
            disabled={props.disabled}
            className={`h-7 w-7 m-2 rounded-full appearance-none
            border-[2px] border-primary disabled:bg-disabled
            disabled:border-disabled-dark 
            transition-all ${style}`}
            />
            {tic}
        </div>
    )
}

export const SquareCheckBox = (props) => {

    const style = props.EmeraldStyle;
    let tic;

    if(props.checked){
        let stroke;
        if(!props.disabled){
            stroke = "stroke-primary-surface"
        }else{
            stroke = "stroke-disabled"
        }
        tic = <svg xmlns="http://www.w3.org/2000/svg" className={`absolute h-5 w-5 pointer-events-none ${stroke}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
    }else{
        tic = <div></div>
    }

    return (
        <div className="w-fit h-fit grid grid-cols-1 grid-rows-1 place-items-center place-content-center relative ">
            <input 
            type="checkbox"
            name={props.name}
            value={props.value}
            checked={props.checked}
            onChange={props.onCheckChange}
            disabled={props.disabled}
            className={`h-7 w-7 m-2 rounded-md appearance-none
            border-[2px] border-primary bg-primary-surface 
            checked:bg-primary disabled:bg-disabled-dark disabled:border-disabled-dark 
            transition-all ${style}`}
            />
            {tic}
        </div>
    )
}

export const SquareLineCheckBox = (props) => {

    const style = props.EmeraldStyle;
    let tic;

    if(props.checked){
        let stroke;
        if(!props.disabled){
            stroke = "stroke-primary"
        }else{
            stroke = "stroke-disabled-dark"
        }
        tic = <svg xmlns="http://www.w3.org/2000/svg" className={`absolute h-5 w-5 pointer-events-none ${stroke}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
    }else{
        tic = <div></div>
    }

    return (
        <div className="w-fit h-fit grid grid-cols-1 grid-rows-1 place-items-center place-content-center relative ">
            <input 
            type="checkbox"
            name={props.name}
            value={props.value}
            checked={props.checked}
            onChange={props.onCheckChange}
            disabled={props.disabled}
            className={`h-7 w-7 m-2 rounded-md appearance-none
            border-[2px] border-primary disabled:bg-disabled
            disabled:border-disabled-dark 
            transition-all ${style}`}
            />
            {tic}
        </div>
    )
}