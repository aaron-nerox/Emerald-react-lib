import { Spacer} from '../index';

export default {
    title: 'components/Spacer',
    component: Spacer,
}

const SpacerTemplate = (args) => {
    return <Spacer {...args} />
}

export const spacer = SpacerTemplate.bind({});
spacer.args = {
    space: "60px",
    orientation: "VERTICAL"
}