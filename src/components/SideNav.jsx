
/**
 * 
 * @param {navItems, activeItemIndex, activeEmeraldStyle, navColor,} props 
 * @returns 
 */
export const SideNav = (props) => {

    let navItems = props.navItems;
    let activeItemIndex = props.activeItemIndex;
    const localStyle =  "bg-emerald-primary-screen text-emerald-primary stroke-emerald-primary";
    let activeItemEmeraldStyle = "";

    if(props.activeEmeraldStyle){
        activeItemEmeraldStyle = (props.activeEmeraldStyle !== '') ? props.activeEmeraldStyle : localStyle
    }else{
        activeItemEmeraldStyle = localStyle
    }

    return (
        <div 
            style={{backgroundColor: props.navColor}}
            className="w-[22%] h-screen max-h-screen overflow-y-auto p-2 bg-emerald-primary-accent/50
                fixed left-0 top-0 inline-flex flex-col items-start">
            <div className="w-full min-h-[150px] h-fit bg-emerald-primary-screen rounded-lg mx-auto 
                mb-5 p-3 grid content-center justify-items-center">
                    {props.header}
            </div>

            <ul className="w-full mx-auto inline-flex flex-col items-start">{
                navItems.map((item, index) => {
                    return (
                        <li key={index} onClick={() => props.onItemClick(index)} 
                            className="w-full mx-auto">

                            <div className={`w-full mx-auto inline-flex flex-row 
                                items-center m-2 py-1 hover:bg-emerald-primary-screen rounded-lg transition-all 
                                ${(index === activeItemIndex)? activeItemEmeraldStyle : "stroke-emerald-primary-surface-black"}`}>
                                <div className="h-7 w-7 m-2">
                                    {item.icon}
                                </div>
                                <p className="mr-3 line-clamp-1 text-ellipsis">{item.title}</p>
                                
                            </div>
                        </li>
                    )
                })
            }</ul>

        </div>
    )
}