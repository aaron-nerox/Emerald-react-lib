import { useState } from "react";
import menu from "../assets/icons/menu.svg";

const SideScaffold = (props) => {

    const [isExpanded, setIsExpanded] = useState(true); 
    let contentMargin = "ml-[22%]";
    let sideWidth = "opacity-1 pointer-auto"

    function toggleContentMargin(){
        setIsExpanded(expanded => expanded = !isExpanded);
    }

    if(isExpanded){
        contentMargin = "ml-[22%]";
        sideWidth = "!w-fit";
    }else{
        contentMargin = "ml-[0%]";
        sideWidth = "!hidden";
    }

    return (
        <div>
            <div className={`${sideWidth} transition-all`}>
                {props.sideNav}
            </div>
            <div className={`transition-all ${contentMargin}`}>
                <div className="z-10 h-[50px] w-full p-3 fixed top-0 bg-primary-surface">
                    <img src={menu} alt="menu" onClick={toggleContentMargin} className="h-7 my-auto"/>
                </div>
                <div className="mt-[50px]">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default SideScaffold;