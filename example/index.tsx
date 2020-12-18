import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { Button } from '../.'

const App = () => {
  return (
    <div>
      <Thing />
      <Button isPrimary>Send</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
