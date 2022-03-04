import {Input, PasswordInput, ActionInput } from "../index";
import icon from '../assets/icons/send.svg';

export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        onValueChange: {action: 'value changed'},
        onActionClick: {action: 'action button clicked'}
    }
}

const Template = (args) => {
    return (
        <Input {...args} />
    )
}

const TemplatePassword = (args) => {
    return (
        <PasswordInput {...args} />
    )
}

const TemplateAction = (args) => {
    return (
        <ActionInput {...args} />
    )
}

export const InputPrimary = Template.bind({});
InputPrimary.args = {
    icon: icon,
    EmeraldStyle: '',
    disabled: false,
    name: 'name',
    value: '',
    type: 'text',
    placeholder: 'Input your text here'

}

export const InputPassword = TemplatePassword.bind({});
InputPassword.args = {
    icon: icon,
    EmeraldStyle: '',
    disabled: false,
    name: 'name',
    value: '',
    placeholder: 'Input your text here'
}

export const InputAction = TemplateAction.bind({});
InputAction.args = {
    actionIcon: icon,
    EmeraldStyle: '',
    disabled: false,
    name: 'name',
    value: '',
    type: 'text',
    placeholder: 'Input your text here'
}

