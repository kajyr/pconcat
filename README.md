# pconcat

## Install

```bash
$ npm install pconcat
```

## Usage

Async concatenate files using promises.

```javascript
var concat = require('pconcat')

concat(['a.txt', 'b.txt', 'c.txt'], 'all.txt').then(function() {
    // done!
}).catch(function(err) {
    // if error :(
})
```
