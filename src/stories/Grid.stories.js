import { Grid } from '../index'
import { ImageCheckBox } from '../index';
import Image from "../assets/images/image.jpg";

export default {
    title: "Layouts/Grid",
    component: Grid
}

const Template = (args) => {
    return <Grid {...args} >
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
    </Grid>
}

export const grid = Template.bind({});
grid.args = {
    count: 3,
    emeraldStyle: ''
}