import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { Button } from '../.';
import { Logo } from '../.';
import { Test } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      <Button isPrimary>Send</Button>
      <Logo />
      <Test />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
