import { Scrollable, LazyImage  } from "../index";
import image from '../assets/images/image.jpg';

export default {
    title : "Layouts/Scrollable",
    component: Scrollable
}

const Template = (args) => {
    return (
        <Scrollable {...args} >
            <LazyImage src={image} alt="" emeraldStyle="w-[300px] h-[300px] object-cover" />
            <p>rgesdgsgsdgsdfsdfsdfrgesdgsgsdgsdfsdfsdfrgesdgsgsdgdfsdfsdf</p>
            <p>rgesdgsgsdg sdfsdfsdf rgesdgsgsdg sdfsdfsdf rgesdgsgsdg sdfsdfsdf</p>
            <p>rgesdgsgsdg sdfsdfsdf rgesdgsgsdg sdfsdfsdf rgesdgsgsdg sdfsdfsdf</p>
            <p>rgesdgsgsdg sdfsdfsdf rgesdgsgsdg sdfsdfsdf rgesdgsgsdg sdfsdfsdf</p>
            <p>rgesdgsgsdg sdfsdfsdf</p>
            <p>rgesdgsgsdg sdfsdfsdf</p>
            <p>rgesdgsgsdg sdfsdfsdf</p>
        </Scrollable>
    )
}

export const scrollable = Template.bind({});
scrollable.args = {
    emeraldStyle: "",
    orientation: "horizontal"
}