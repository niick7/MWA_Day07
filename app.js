angular.module("myApp", ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/main.html",
    controller: "mainController",
    controllerAs: "mainCtrl"
  }).otherwise({
    redirectTo: "/"
  })
}