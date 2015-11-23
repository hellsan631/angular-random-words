# angular-random-words

## Generate one or more common English words

`angular-random-words` generates random words for use as sample text or passwords. Inspired by XKCD

Cryptographic-quality randomness is of a concern for us, so we use ```window.crypto.getRandomValues()``` for our source of random.

### Installation:

Download or Bower
```
bower install random-words --save
```

Include Scripts
```html
<script src="vendor/angular-random-words.min.js"></script>
```

Add to Angular Modules
```js
angular
  .module('app', [
    'random-words'
  ]);
```

### Examples:

```js
;(function() {
  'use strict';

  angular
    .module('sample-app', ['random-words'])
    .controller('AppController', AppController);

  AppController.$inject = ['RandomWords'];

  function AppController(RandomWords){
    var _this = this;

    _this.opts = {
      count: 4,
      min: 2,
      max: 6
    };

    _this.getRandoms = getRandoms;

    function getRandoms(){
      _this.password      = RandomWords.password(_this.opts);
      _this.singleWord    = RandomWords.randomWord(_this.opts);
      _this.multipleWords = RandomWords.randomWords(_this.opts);
    }
  }

})();
```
