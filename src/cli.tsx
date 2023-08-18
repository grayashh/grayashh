#!/usr/bin/env node
import React from 'react';
import meow from 'meow';
import { render } from 'ink';
import App from './app.js';

const cli = meow(
  `
	Usage
	  $ grayash

	Options
		--name  Your name

	Examples
	  $ grayash --name=김태강
    ...
`,
  {
    importMeta: import.meta,
    flags: {
      name: {
        type: 'string',
      },
      member: {
        type: 'string',
      },
    },
  }
);

render(<App name={cli.flags.name} />);
