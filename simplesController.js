var app = angular.module('app', []);

app.controller('simpleController', function ($scope) {
    $scope.user = {
        name: "Fernando",
        subname: "Kiosa",
        address: "JD. Firenze Rua Milão Nº375a",
        profession: "Programador",
        id: 1,
        email: 'Fernandokiosa09@gmail.com'
        
    }
})