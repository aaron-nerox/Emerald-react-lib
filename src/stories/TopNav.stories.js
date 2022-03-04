import { RoundCheckBox, RoundLineCheckBox, SquareCheckBox, SquareLineCheckBox } from "../index";

export default {
    title: "Components/Navigation",
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
    EmeraldStyle: '',
    checked: true,
    disabled: false,
    name: 'name',
    value: 'name',

}

export const RoundLine = TemplateRoundLine.bind({});
RoundLine.args = {
    EmeraldStyle: '',
    checked: true,
    disabled: false,
    name: 'name',
    value: 'name',

}

export const Square = TemplateSquare.bind({});
Square.args = {
    EmeraldStyle: '',
    checked: true,
    disabled: false,
    name: 'name',
    value: 'name',

}

export const SquareLine = TemplateSquareLine.bind({});
SquareLine.args = {
    EmeraldStyle: '',
    checked: true,
    disabled: false,
    name: 'name',
    value: 'name',

}

