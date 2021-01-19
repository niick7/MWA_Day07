angular.module("myApp").controller("mainController", mainController);

function mainController($http){
  const vm = this;
  $http.get("https://www.dnd5eapi.co/api/features").then(function(response){
    vm.data = response.data.results;
  })
}