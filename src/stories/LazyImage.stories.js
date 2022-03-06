import { LazyImage } from '../index';
import image from '../assets/images/image.jpg';

export default {
    title: "Components/LazyImage",
    component: LazyImage
}

const Template = (args) => {
    return (
        <LazyImage {...args} />
    )
}

export const lazyImage = Template.bind({});
lazyImage.args = {
    src: image,
    alt: "alt text",
    EmeraldStyle: "w-[100px] h-[100px] object-cover"
}