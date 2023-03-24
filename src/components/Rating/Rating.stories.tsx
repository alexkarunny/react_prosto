import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Rating} from './Rating';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'rating',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;



// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => {

   return  <Rating {...args} />;
}

export const Three = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Three.args = {
   value: 5,
  setValue: () => {}
};


