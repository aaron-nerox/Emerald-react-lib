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
                height="150px"
                width="150px"
                EmeraldStyle="m-2"
                />
            <ImageCheckBox 
                checked={false}
                src={Image}
                height="150px"
                width="150px"
                EmeraldStyle="m-2"
                />
            <ImageCheckBox 
                checked={false}
                src={Image}
                height="150px"
                width="150px"
                EmeraldStyle="m-2"
                />
        </Column>
    )
}

export const column = Template.bind({});
column.args = {
    alignment : "center",
    emeraldStyle: ""
}