import { RoundCheckBox, RoundLineCheckBox, SquareCheckBox, SquareLineCheckBox } from "../index";

export default {
    title: "Components/CheckBox",
    component: RoundCheckBox,
    argTypes: {
        onCheckChange: {action: 'check changed'}
    }
}

const TemplateRound = (args) => {
    return (
        <RoundCheckBox {...args} />
    )
}

const TemplateSquare = (args) => {
    return (
        <SquareCheckBox {...args} />
    )
}

const TemplateSquareLine = (args) => {
    return (
        <SquareLineCheckBox {...args} />
    )
}

const TemplateRoundLine = (args) => {
    return (
        <RoundLineCheckBox {...args} />
    )
}

export const Round = TemplateRound.bind({});
Round.args = {
    emeraldStyle: '',
    checked: true,
    disabled: false,
    name: 'name',
    value: 'name',

}

export const RoundLine = TemplateRoundLine.bind({});
RoundLine.args = {
    emeraldStyle: '',
    ticColor: '',
    checked: true,
    disabled: false,
    name: 'name',
    value: 'name',

}

export const Square = TemplateSquare.bind({});
Square.args = {
    emeraldStyle: '',
    checked: true,
    disabled: false,
    name: 'name',
    value: 'name',

}

export const SquareLine = TemplateSquareLine.bind({});
SquareLine.args = {
    emeraldStyle: '',
    ticColor: '',
    checked: true,
    disabled: false,
    name: 'name',
    value: 'name',

}

