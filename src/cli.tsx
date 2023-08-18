#!/usr/bin/env node
import React from 'react';
import meow from 'meow';
import { render } from 'ink';
import App from './app.js';

const cli = meow(
  `
	Usage
	  $ grayash
    ...
`,
  {
    importMeta: import.meta,
  }
);

render(<App />);
