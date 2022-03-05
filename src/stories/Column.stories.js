import { Column } from '../index';
import { ImageCheckBox } from '../index';
import Image from "../assets/images/image.jpg";

export default {
    title: "Layouts/Column",
    component: Column,
}

const Template = (args) => {
    return (
        <Column {...args}>
            <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle='w-[150px] h-[150px]'/>
            <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle='w-[200px] h-[150px]'/>
            <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle='w-[100px] h-[150px]'/>
        </Column>
    )
}

export const column = Template.bind({});
column.args = {
    alignment : "center",
    width: ""
}