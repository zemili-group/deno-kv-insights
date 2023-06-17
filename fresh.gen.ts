// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from './deno.json' assert { type: 'json' };
import * as $0 from './routes/_app.tsx';
import * as $1 from './routes/api/entries/[cursor].ts';
import * as $2 from './routes/api/entries/index.ts';
import * as $3 from './routes/index.tsx';
import * as $$0 from './islands/booleanValueFormControl.tsx';
import * as $$1 from './islands/createEntryModal.tsx';
import * as $$2 from './islands/deleteEntryModal.tsx';
import * as $$3 from './islands/entriesList.tsx';
import * as $$4 from './islands/entriesPage.tsx';
import * as $$5 from './islands/entryDetail.tsx';
import * as $$6 from './islands/numberValueFormControl.tsx';
import * as $$7 from './islands/stringValueFormControl.tsx';
import * as $$8 from './islands/valueTypeDropdown.tsx';

const manifest = {
  routes: {
    './routes/_app.tsx': $0,
    './routes/api/entries/[cursor].ts': $1,
    './routes/api/entries/index.ts': $2,
    './routes/index.tsx': $3,
  },
  islands: {
    './islands/booleanValueFormControl.tsx': $$0,
    './islands/createEntryModal.tsx': $$1,
    './islands/deleteEntryModal.tsx': $$2,
    './islands/entriesList.tsx': $$3,
    './islands/entriesPage.tsx': $$4,
    './islands/entryDetail.tsx': $$5,
    './islands/numberValueFormControl.tsx': $$6,
    './islands/stringValueFormControl.tsx': $$7,
    './islands/valueTypeDropdown.tsx': $$8,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
