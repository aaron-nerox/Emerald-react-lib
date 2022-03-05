import { Row } from '../index';
import { ImageCheckBox } from '../index';
import Image from "../assets/images/image.jpg";

export default {
    title: "Layouts/Row",
    component: Row,
}

const Template = (args) => {
    return (
        <Row {...args}>
            <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle='w-[150px] h-[120px] m-2'/>
            <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle='w-[150px] h-[150px] m-2'/>
            <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle='w-[150px] h-[100px] m-2'/>
        </Row>
    )
}

export const row = Template.bind({});
row.args = {
    alignment: "top",
    height: ""
}