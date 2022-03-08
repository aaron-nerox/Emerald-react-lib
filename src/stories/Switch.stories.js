import { RoundSwitch, SquareSwitch } from "../index";

export default {
    title: 'Components/Switch',
    component: RoundSwitch,
    argTypes: {
        onToggle: {action: "toggle action"}
    }
}

const TemplateRound = (args) => {
    return (
        <RoundSwitch {...args} />
    )
}

const TemplateSquare = (args) => {
    return (
        <SquareSwitch {...args} />
    )
}

export const Round = TemplateRound.bind({});
Round.args = {
    toggled: true,
    disabled: false,
    emeraldColor: ""
}

export const Square = TemplateSquare.bind({});
Square.args = {
    toggled: true,
    disabled: false,
    emeraldColor: ""
}