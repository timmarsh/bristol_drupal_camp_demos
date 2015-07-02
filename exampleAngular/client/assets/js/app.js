(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider','$compileProvider'];

  function config($urlProvider, $locationProvider,$compileProvider) {
    $urlProvider.otherwise('/');
    
    //magic to make cordova work
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

angular.module('application').controller('homeCtrl', ['$scope', '$state',   'FoundationApi',  '$http', '$rootScope',
  function ($scope, $state,   FoundationApi, $http,  $rootScope) {

   var url = "http://api.openweathermap.org/data/2.5/weather?q=Bristol,uk&units=metric,&callback=JSON_CALLBACK"
    console.log("hello");

var base = "http://openweathermap.org/img/w/";

$http.jsonp(url)
    .success(function(data){
        console.log(data);
        $scope.tempmin = data.weather[0].main.temp_min;
        $scope.tempmin = data.weather[0].main.temp_max;
        $scope.desc = data.weather[0].description;
        $scope.icon = base+"/"+data.weather[0].icon+".png";
    });



    $scope.test = "test";

}]);


})();
