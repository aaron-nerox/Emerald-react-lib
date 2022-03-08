import { SideNav } from "../index";
import Icon from "../assets/icons/result.svg";
let Icon2 = <svg fill="none" stroke="current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m22 10v5c0 5-2 7-7 7h-6c-5 0-7-2-7-7v-6c0-5 2-7 7-7h5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
             <path d="m22 10h-4c-3 0-4-1-4-4v-4l8 8z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
             <path d="m8.32 12h2.65c0.27 0 0.61 0.18 0.75 0.4l1.13 1.7c0.23 0.34 0.18 0.85-0.11 1.14l-2.46 2.46c-0.35 0.35-0.93 0.35-1.28 0l-2.46-2.46c-0.29-0.29-0.34-0.8-0.11-1.14l1.13-1.7c0.16-0.22 0.5-0.4 0.76-0.4z" clip-rule="evenodd" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
        </svg>

export default {
    title: "Navigation/SideNav",
    component: SideNav,
}

const Template = (args) => {
    return <SideNav {...args} />
}

let items = [
    {
        icon: Icon2,
        title: "Nav Item"
    },
    {
        icon: <img src={Icon} />,
        title: "Nav Item"
    },
    {
        icon: <img src={Icon} />,
        title: "Nav Item"
    },
    {
        icon: <img src={Icon} />,
        title: "Nav Item dgfg dgfdfgd fgdfgd gdfgdf"
    },
    
]

export const Primary = Template.bind({})
Primary.args = {
    activeItemIndex: 0,
    navItems: items,
    header: <div></div>,
    activeEmeraldStyle: '',
    navColor: ''
}