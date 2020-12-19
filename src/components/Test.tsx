import React from 'react';
import 'twin.macro';
import tw, { css } from 'twin.macro';

/* not sure how to get this one to work 
   should work like this exapmle:
      <div class="group max-w-xs text-center mx-auto border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent">
        <p class="text-indigo-600 group-hover:text-gray-900 ">New Project</p>
        <p class="text-indigo-500 group-hover:text-gray-500 ">
          Create a new project from a variety of starting templates.
        </p>
      </div>

*/

const divStyle = css`
  ${tw`max-w-xs text-center mx-auto border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent`}
`;

export const Test = () => {
  return (
    <div className="group" css={divStyle}>
      <p tw="text-indigo-600 group-hover:text-gray-900 ">New Project</p>
      <p tw="text-indigo-500 group-hover:text-gray-500 ">
        Create a new project from a variety of starting templates.
      </p>
    </div>
  );
};
