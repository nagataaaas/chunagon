import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { QuestionList } from './index';

export default {
  title: 'Example/organisms/QuestionList',
  component: QuestionList,
  argTypes: {},
} as ComponentMeta<typeof QuestionList>;

const Template: ComponentStory<typeof QuestionList> = (args) => (
  <MemoryRouter initialEntries={['/question/']}>
    <QuestionList {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  status: 'OK',
  questions: [
    {
      questionID: '1',
      title: 'title1',
      answeredCorrectly: true,
    },
    {
      questionID: '2',
      title: 'title2',
      answeredCorrectly: false,
    },
  ],
};

export const Faild = Template.bind({});
Faild.args = {
  status: 'Faild',
  questions: [],
};

export const Loading = Template.bind({});
Loading.args = {
  status: 'Loading',
  questions: [],
};
