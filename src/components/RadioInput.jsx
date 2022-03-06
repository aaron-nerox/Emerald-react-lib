

//options: array of strings
//onRadioSelected: action to know the current selection default is the first
//disabled: if the group is disabled or not
//orientation: vertical or horizontal (default vertical)

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
                    EmeraldStyle={itemMargin}
                    />
            })
        }</div>
    )
}

export const SquareRadioGroup = (props) => {
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
                return <SquareRadioButton 
                    disabled={isDisabled}
                    onItemSelected={() => handleItemSelection(index)}
                    selected={(selectedIndex === index)}
                    key={index}
                    option={item}
                    EmeraldStyle={itemMargin}
                    />
            })
        }</div>
    )
}

const RadioButton = (props) => {

    let outlineColor;
    let backgroundColor;

    if(props.disabled){
        outlineColor = "outline-disabled-dark"
        backgroundColor= "bg-disabled-dark"
    }else{
        if(props.selected){
            outlineColor = "outline-primary"
            backgroundColor = "bg-primary"
        }else{
            outlineColor = "outline-disabled"
            backgroundColor = "bg-transparent"
        }
    }

    function handleItemSelection(){
        if(!props.disabled){
            props.onItemSelected()
        }
    }

    return (
        <div className={`inline-flex flex-row items-center ${props.EmeraldStyle}`}
            onClick={handleItemSelection}>
            <div className={`w-[25px] h-[25px] m-2 p-[2px]
                rounded-full outline outline-3 ${outlineColor}`}>
                    <div className={`w-full h-full rounded-full ${backgroundColor}`}></div>
            </div>
            <p className="ml-1">{props.option}</p>
        </div>
    )
}

const SquareRadioButton = (props) => {

    let outlineColor;
    let backgroundColor;

    if(props.disabled){
        outlineColor = "outline-disabled-dark"
        backgroundColor= "bg-disabled-dark"
    }else{
        if(props.selected){
            outlineColor = "outline-primary"
            backgroundColor = "bg-primary"
        }else{
            outlineColor = "outline-disabled"
            backgroundColor = "bg-transparent"
        }
    }

    function handleItemSelection(){
        if(!props.disabled){
            props.onItemSelected()
        }
    }

    return (
        <div className={`inline-flex flex-row items-center ${props.EmeraldStyle}`}
            onClick={handleItemSelection}>
            <div className={`w-[25px] h-[25px] m-2 p-[2px]
                rounded-sm outline outline-3 ${outlineColor}`}>
                    <div className={`w-full h-full rounded-tn ${backgroundColor}`}></div>
            </div>
            <p className="ml-1">{props.option}</p>
        </div>
    )
}
