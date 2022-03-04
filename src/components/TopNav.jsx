

export const TopNav = (props) => {

    let mainLogo = props.mainLogo;
    let navItems = props.navItems;

    return (
        <div className="w-[99%] h-[64px] m-2 px-3 rounded-xl bg-primary-screen fixed 
        top-0 z-10 inline-flex flex-row items-center">
            <img src={mainLogo} alt="main logo" className="h-11" onClick={props.onMainLogoClick}/>
            <ul className="inline-flex flex-row items-center absolute right-1">{
                navItems.map((item, index) => {
                    return (
                        <li key={index} onClick={() => props.onItemClick(index)}>
                            <div className="w-auto inline-flex flex-row items-center m-2
                                hover:bg-primary/30 rounded-lg transition-all">
                                <img src={item.icon} alt="nav icon" className="h-7 m-2"/>
                                <p className="mr-3">{item.title}</p>
                            </div>
                        </li>
                    )
                })
            }</ul>
        </div>
    )
}