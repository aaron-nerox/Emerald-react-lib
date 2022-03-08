import { Button, TextButton, IconifiedButton } from '../index';
import { ButtonIcon } from '../components/Button';
import Icon from '../assets/icons/musicnote.svg';

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { 
        onClick:  { action: "handle click"}
    }
}

const Template = (args) => {
    return <Button {...args}>   
       {args.Label}
    </Button>
}

const TemplateB = (args) => {
    return <Button {...args}>  
        <ButtonIcon icon={Icon} /> 
        <div className='w-2'></div>
       {args.Label}
    </Button>
}

const Template2 = (args) => {
    return <IconifiedButton {...args} />   
}

const Template3 = (args) => {
    return <TextButton {...args} />   
}

export const Primary = Template.bind({})
Primary.args = {
    isDisabled: false,
    EmeraldStyle: "",
    Label: "Button"
}

export const IconPrimary = TemplateB.bind({})
IconPrimary.args = {
    isDisabled: false,
    EmeraldStyle: "",
    Label: "Button",
}

export const Iconified = Template2.bind({})
Iconified.args = {
    isDisabled: false,
    EmeraldStyle: '',
    icon: Icon
}

export const Text = Template3.bind({})
Text.args = {
    isDisabled: false,
    EmeraldStyle: '',
    text: "Button"
}