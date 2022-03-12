import { AdaptiveContainer, LazyImage } from "../index";
import Image from '../assets/images/image.jpg';

export default {
    title: "Layouts/AdaptiveContainer",
    component: AdaptiveContainer
}

const Template = (args) => {
    return <AdaptiveContainer>
        <LazyImage src={Image} emeraldStyle="h-[100px] w-[100px] object-cover m-3" />
        <LazyImage src={Image} emeraldStyle="h-[100px] w-[100px] object-cover m-3" />
        <LazyImage src={Image} emeraldStyle="h-[100px] w-[100px] object-cover m-3" />
        <LazyImage src={Image} emeraldStyle="h-[100px] w-[100px] object-cover m-3" />
        <LazyImage src={Image} emeraldStyle="h-[100px] w-[100px] object-cover m-3" />
        <LazyImage src={Image} emeraldStyle="h-[100px] w-[100px] object-cover m-3" />
        <LazyImage src={Image} emeraldStyle="h-[100px] w-[100px] object-cover m-3" />
    </AdaptiveContainer>
}

export const adaptiveContainer = Template.bind({});
adaptiveContainer.args = {
    emeraldStyle: '',

}