import { ToolTip } from "../index";

export default {
    title: 'components/ToolTip',
    component: ToolTip
}

const Template = (args) => {
    return (
        <div>
            <p>hello there i am a background bla efsdfsd zds DCS QSWDSD Q E QSDFSD   FSDFSDFSD</p>
            <ToolTip {...args}>
                <p>This is a text</p>
            </ToolTip>
            <p>hello there i am a background bla efsdfsd zds DCS QSWDSD Q E QSDFSD   FSDFSDFSD</p>
            <p>hello there i am a background bla efsdfsd zds DCS QSWDSD Q E QSDFSD   FSDFSDFSD</p>
            <p>hello there i am a background bla efsdfsd zds DCS QSWDSD Q E QSDFSD   FSDFSDFSD</p>
            <p>hello there i am a background bla efsdfsd zds DCS QSWDSD Q E QSDFSD   FSDFSDFSD</p>
            <p>hello there i am a background bla efsdfsd zds DCS QSWDSD Q E QSDFSD   FSDFSDFSD</p>

        </div>
    )
}

export const toolTip = Template.bind({});
toolTip.args = {
    placement: 'top',
    tip: ''
}