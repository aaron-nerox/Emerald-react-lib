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
                height="120px"
                width="150px"
                emeraldStyle="m-2"
                />
            <ImageCheckBox 
                checked={false}
                src={Image}
                height="100px"
                width="150px"
                emeraldStyle="m-2"
                />
            <ImageCheckBox 
                checked={false}
                src={Image}
                height="170px"
                width="150px"
                emeraldStyle="m-2"
                />
        </Row>
    )
}

export const row = Template.bind({});
row.args = {
    alignment: "",
    emeraldStyle: ""
}