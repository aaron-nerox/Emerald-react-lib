
/**
 * 
 * @param {options, disabled, orientation, index, emeraldColor} props 
 * @returns 
 */
export const RadioGroup = (props) => {
    const items = props.options;
    const isDisabled = props.disabled;
    const orientation = props.orientation;
    let displayStyle ="";
    let itemMargin =""
    let selectedIndex = (props.index)? props.index : 0

    if(orientation.toUpperCase() === "HORIZONTAL"){
        displayStyle = "flex-row items-center"
        itemMargin = "mx-2"
    }else{
        displayStyle = "flex-col items-start"
        itemMargin = ""
    }

    function handleItemSelection(index){
        if(!isDisabled){
            props.onOptionSelected(index)
        }
    }

    return (
        <div className={`inline-flex ${displayStyle}`}>{
            items.map((item, index) => {
                return <RadioButton 
                    disabled={isDisabled}
                    onItemSelected={() => handleItemSelection(index)}
                    selected={(selectedIndex === index)}
                    key={index}
                    option={item}
                    color={props.emeraldColor}
                    />
            })
        }</div>
    )
}

/**
 * 
 * @param {options, disabled, orientation, index, emeraldColor} props 
 * @returns 
 */
export const SquareRadioGroup = (props) => {
    const items = props.options;
    const isDisabled = props.disabled;
    const orientation = props.orientation;
    let displayStyle ="";
    let selectedIndex = (props.index)? props.index : 0


    if(orientation.toUpperCase() === "HORIZONTAL"){
        displayStyle = "flex-row items-center"
    }else{
        displayStyle = "flex-col items-start"
    }

    function handleItemSelection(index){
        if(!isDisabled){
            props.onOptionSelected(index)
        }
    }

    return (
        <div className={`inline-flex ${displayStyle}`}>{
            items.map((item, index) => {
                return <SquareRadioButton 
                    disabled={isDisabled}
                    onItemSelected={() => handleItemSelection(index)}
                    selected={(selectedIndex === index)}
                    key={index}
                    option={item}
                    color={props.emeraldColor}
                    />
            })
        }</div>
    )
}

/**
 * 
 * @param {disabled, selected, color, option, onItemSelected} props 
 * @returns 
 */
const RadioButton = (props) => {

    let outlineColor;
    let backgroundColor;
    let outlineStyle = {};
    let innerStyle = {};

    if(props.disabled){
        outlineColor = "outline-emerald-disabled-dark"
        backgroundColor= "bg-emerald-disabled-dark"
    }else{
        if(props.selected){
            outlineColor = "outline-emerald-primary"
            backgroundColor = "bg-emerald-primary"
            outlineStyle = {outlineColor: props.color}
            innerStyle = {backgroundColor: props.color}
        }else{
            outlineColor = "outline-emerald-disabled"
            backgroundColor = "bg-emerald-transparent"
        }
    }

    function handleItemSelection(){
        if(!props.disabled){
            props.onItemSelected()
        }
    }

    return (
        <div className={`inline-flex flex-row items-center m-2`}
            onClick={handleItemSelection}>
            <div
                style={outlineStyle}
                className={`w-[25px] h-[25px] mx-3 p-[2px]
                rounded-full outline outline-3 ${outlineColor}`}>
                    <div 
                        style={innerStyle}
                        className={`w-full h-full rounded-full 
                        ${backgroundColor}`}></div>
            </div>
            <p className="mr-2">{props.option}</p>
        </div>
    )
}

/**
 * 
 * @param {disabled, selected, color, option, onItemSelected} props 
 * @returns 
 */
const SquareRadioButton = (props) => {

    let outlineColor;
    let backgroundColor;
    let outlineStyle = {};
    let innerStyle = {};

    if(props.disabled){
        outlineColor = "outline-emerald-disabled-dark"
        backgroundColor= "bg-emerald-disabled-dark"
    }else{
        if(props.selected){
            outlineColor = "outline-emerald-primary"
            backgroundColor = "bg-emerald-primary"
            outlineStyle = {outlineColor: props.color}
            innerStyle = {backgroundColor: props.color}
        }else{
            outlineColor = "outline-emerald-disabled"
            backgroundColor = "bg-emerald-transparent"
        }
    }

    function handleItemSelection(){
        if(!props.disabled){
            props.onItemSelected()
        }
    }

    return (
        <div className={`inline-flex flex-row items-center m-2`}
            onClick={handleItemSelection}>
            <div 
                style={outlineStyle}
                className={`w-[25px] h-[25px] mx-3 p-[2px]
                rounded-sm outline outline-3 ${outlineColor}`}>
                    <div 
                        style={innerStyle}
                        className={`w-full h-full rounded-tn ${backgroundColor}`}></div>
            </div>
            <p className="ml-1">{props.option}</p>
        </div>
    )
}
