import { Badge, IconifiedButton, LabeledBadge } from "../index";
import Icon from '../assets/icons/musicnote.svg';


export default {
    title: "Components/Badge",
    component: Badge
}

const TemplateColored = (args) => {
    return (
        <Badge {...args} >
            <IconifiedButton 
                isDisabled={false}
                emeraldStyle="!m-0 !bg-emerald-primary-surface"
                icon={Icon}
            />
        </Badge>
    )
}

const TemplateContent = (args) => {
    return (
        <LabeledBadge {...args} >
            <IconifiedButton 
                isDisabled={false}
                emeraldStyle="!m-0 !bg-emerald-primary-surface"
                icon={Icon}
            />
        </LabeledBadge>
    )
}

export const primary = TemplateColored.bind({});
primary.args = {
    visible : true,
    color: "",
    position: "",
}

export const labeled = TemplateContent.bind({});
labeled.args = {
    visible : true,
    color: "",
    position: "",
    content: 1,
    contentColor: ""
}
