import { Grid, AdaptiveGrid } from '../index'
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

const TemplateAdaptive = (args) => {
    return <AdaptiveGrid {...args} >
        <ImageCheckBox 
                checked={false}
                src={Image}
                height="150px"
                width="150px"
                emeraldStyle="m-auto"
                />
            <ImageCheckBox 
                checked={false}
                src={Image}
                height="150px"
                width="150px"
                emeraldStyle="m-auto"
                />
            <ImageCheckBox 
                checked={false}
                src={Image}
                height="150px"
                width="150px"
                emeraldStyle="m-auto"
                />
            <ImageCheckBox 
                checked={false}
                src={Image}
                height="150px"
                width="150px"
                emeraldStyle="m-auto"
                />
            <ImageCheckBox 
                checked={false}
                src={Image}
                height="150px"
                width="150px"
                emeraldStyle="m-auto"
                />
            <ImageCheckBox 
                checked={false}
                src={Image}
                height="150px"
                width="150px"
                emeraldStyle="m-auto"
                />
    </AdaptiveGrid>
}

export const grid = Template.bind({});
grid.args = {
    count: 3,
    emeraldStyle: ''
}

export const adaptiveGrid = TemplateAdaptive.bind({});
adaptiveGrid.args = {
    elementSize: '',
    emeraldStyle: ''
}