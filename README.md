# gauth
A simple Google authorization tool

## Install
To install, simply use npm...

```sh
npm install gauth
```

### Testing, linting, & coverage
This module can be tested and reported on in a variety of ways...
```sh
npm run test        # runs TAP based unit test suite.
npm run integration # runs TAP based integration suite.
npm run coverage    # generates and opens a coverage report.
npm run lint        # lints via standardJS.
npm run validate    # runs test, integration, and lint.
```
__Note:__ `integration` and `validate` require a valid `.env` file. Details on how to create this are below.

## Usage
```js
'use strict'

const Config = require('./config')
const Gauth = require('gauth')

let gauth = Gauth(locals.opts.gauth)
gauth.auth((err, auth) => {
    if (err) return done(err)

    locals.sheets = Sheets.spreadsheets
    
    // do something with that authorization
    
    done()
  })
```

### Options
```js
const gauthConfig = {
  cert: Parse(process.env.GOOGLE_CERT || '{\'empty\': \'true\'}').value,
  scope: [
    'https://spreadsheets.google.com/feeds',
    'https://www.googleapis.com/auth/drive'
  ]
}
```

# License
Copyright nearForm 2016. Licensed under [MIT][License]

[License]: ./LICENSE.md 
