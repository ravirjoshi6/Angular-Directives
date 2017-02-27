// Code goes here

var app = angular.module("app", []);

app.controller('MainController', ['$scope','$http', function ($scope, $http) {
    $http.get('data.json').then(function (data) {
        $scope.cards = data.data;       
    });
}]);

app.directive('mydirective', function () {
    return {
        templateUrl: 'template.html',
        scope: {
            card: '='
        },
        controller: function ($scope) {
           
           
        }
    };
});