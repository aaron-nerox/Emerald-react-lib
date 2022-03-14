import { Divider } from '../index';

export default {
    title : "components/Divider",
    component: Divider
}

const Template = (args) => {
    return <Divider {...args} />
}

export const divider = Template.bind({});
divider.args = {
    orientation : 'vertical',
    emeraldStyle: '!bg-emerald-primary'
}