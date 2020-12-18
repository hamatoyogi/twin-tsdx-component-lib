import React from 'react';
import { GlobalStyles, theme } from 'twin.macro';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  layout: 'centered',
};

export const decorators = [
  Story => (
    <div>
      {/* */}
      <GlobalStyles />
      <Story />
    </div>
  ),
];
