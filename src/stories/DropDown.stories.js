import { DropDown } from "../index";

export default {
    title : 'components/Drop Down',
    component: DropDown,
    argTypes: {
        onOptionSelect: { action : 'option selected'}
    }
}

const Template = (args) => {
    return <DropDown {...args}/>
}

const options = [
    {
        name: 'one',
        
    },
    {
        name: 'two',
        value: 200
    },
    {
        name: 'three',
        value: 300
    }
]

export const dropDown = Template.bind({});
dropDown.args = {
    name : 'age',
    options: options,
    emeraldStyle: '',
    itemEmeraldStyle: '',
    arrowColor: ""
}