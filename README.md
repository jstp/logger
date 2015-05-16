JSTP Logger
===========

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

Copyright 201% Xavier Via

ISC Clause license.

See [LICENSE](LICENSE) attached.
