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
        </Row>
    )
}

export const row = Template.bind({});
row.args = {
    alignment: "top",
    height: "",
    EmeraldStyle: ""
}