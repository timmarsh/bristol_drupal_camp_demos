
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
    .service('nodeservice' , function($http){
      this.restPath = "http://192.168.33.10/api"
      this.node_load = function(nid) {
        return $http.get(this.restPath + '/node/' + nid + '.json').then(function(result) {
          if (result.status == 200) {
            return result.data;
          }
        });
      };
      this.node_index = function(query) {
        var path = this.restPath + '/node.json';
        return $http.get(path).then(function(result) {
          if (result.status == 200) {
            return result.data;
          }
        });
      };

    });

  config.$inject = ['$urlRouterProvider', '$locationProvider', '$compileProvider'];

  function config($urlProvider, $locationProvider, $compileProvider) {
    $urlProvider.otherwise('/');

    //magic to make cordova work
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }



  function run($injector) {
    FastClick.attach(document.body);

  }

  angular.module('application').controller('homeCtrl', ['$scope', '$state', 'FoundationApi', '$http', '$rootScope','nodeservice',
    function($scope, $state, FoundationApi, $http, $rootScope, nodeservice) {
       var data = nodeservice.node_index();
       data.then(function(resp){
        $scope.items = resp;

       });


    }
  ]);
  angular.module('application').controller('nodeCtrl', ['$scope', '$state', 'FoundationApi', '$http', '$rootScope','nodeservice',
    function($scope, $state, FoundationApi, $http, $rootScope, nodeservice) {
       $scope.id = ($state.params.id || '');
       var data = nodeservice.node_load($scope.id);
       data.then(function(resp){
        $scope.data = resp;
        console.log(resp);

       });


    }
  ]);

})();
