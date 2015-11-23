;(function() {
  'use strict';

  angular
    .module('sample-app')
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', 'RandomWords'];

  function AppController($scope, RandomWords){
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

    $scope.$watch('vm.opts', function(){
      if(_this.opts) {
        getRandoms(_this.opts);
      }
    }, true);

  }

})();
