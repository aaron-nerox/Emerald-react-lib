import { ImageCheckBox } from "../index";
import Image from "../assets/images/image.jpg";

export default {
    title: "Components/CheckableImage",
    component: ImageCheckBox,
    argTypes : {
        onCheckChange: { action: "check changed"}
    }
}

const Template = (args) => {
    return <ImageCheckBox {...args}/>
}

export const CheckableImage = Template.bind({});
CheckableImage.args = {
    checked: true,
    src: Image,
    height: '200px',
    width: '300px'
}