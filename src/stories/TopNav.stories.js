import { TopNav } from "../index";
import Logo from "../assets/images/logo.png";
import Icon from "../assets/icons/eye.svg"

export default {
    title: "Navigation/TopNav",
    component: TopNav,
    argTypes: {
        onMainLogoClick: {action: "Main logo clicked"},
        onItemClick: {action: `Item index clicked`}
    }
}

const Template = (args) => {
    return (
        <TopNav {...args} />
    )
}

let items = [
    {
        icon: Icon,
        title: "Nav Item"
    },
    {
        icon: Icon,
        title: "Nav Item"
    },
    {
        icon: Icon,
        title: "Nav Item"
    },
]

export const Top = Template.bind({});
Top.args = {
    mainLogo: Logo,
    navItems: items
}

