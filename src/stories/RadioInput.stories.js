import { RadioGroup, SquareRadioGroup } from '../index';

export default {
    title: 'components/Radio',
    component: RadioGroup,
    argTypes: {
        onOptionSelected: { action: "Option selected"}
    }
}

const Template = (args) => {
    return (
        <RadioGroup {...args} />
    )
}

export const roundedRadioGroup = Template.bind({});
roundedRadioGroup.args = {
    options: ['one', 'two', 'three'],
    index: 0,
    disabled: false,
    orientation: "vertical",
    emeraldColor: ""
}

const TemplateSquare = (args) => {
    return (
        <SquareRadioGroup {...args} />
    )
}

export const squareRadioGroup = TemplateSquare.bind({});
squareRadioGroup.args = {
    options: ['one', 'two', 'three'],
    index: 0,
    disabled: false,
    orientation: "vertical",
    emeraldColor: '',
}