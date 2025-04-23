import React from 'react';
import Accordion from './Accordion';

export default {
    title: 'Components/Accordion',
    component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Accordion Title',
    content: 'Accordion Content',
};

export const Opened = Template.bind({});
Opened.args = {
    title: 'Opened Accordion',
    content: 'This accordion is open.',
};