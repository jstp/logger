JSTP Logger
===========

[ ![Codeship Status for jstp/logger](https://codeship.com/projects/897ccb40-de2d-0132-d439-465ff4e7e511/status?branch=master)](https://codeship.com/projects/80373)

A nice logger for JSTP

Installation
------------

```sh
npm install --save @jstp/logger
```

Usage
-----

```javascript
var Logger = require("@jstp/logger")
var Sydney = require("sydney")

var venue = new Sydney
venue.add(new Logger)

// And use it normally, it will log to the console
```

Testing
-------

```
git clone git://github.com/jstp/logger
cd logger
npm install
npm test
```

License
-------

Copyright 2015 Xavier Via

ISC Clause license.

See [LICENSE](LICENSE) attached.
