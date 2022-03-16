import { Avatar, SquareAvatar } from '../index';
import Image from "../assets/images/image.jpg";

export default {
    title: 'components/Avatar',
    component: Avatar
}

const Template = (args) => {
    return (
        <Avatar {...args} />
    )
}

const TemplateSquare = (args) => {
    return (
        <SquareAvatar {...args} />
    )
}


export const rounded = Template.bind({});
rounded.args = {
    size: "100px",
    src: Image
}

export const squared = TemplateSquare.bind({});
squared.args = {
    size: "100px",
    src: Image
}