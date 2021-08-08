var app = angular.module('formulario', []);

app.controller('simpleController', function ($scope) {
    var user = {
        name: "Fernando",
        sobrenome: "Kiosa",
        address: "JD. Firenze Rua Milão Nº375a",
        profession: "Programador",
        id: 1,
        email: 'Fernandokiosa09@gmail.com'
    }

    $scope.user = user;

    $scope.adicionarAlgo = () => {
        var soma = 3+5;
        $scope.user.name = soma;
    }

    // array para loop
    $scope.frutas = ['banana', 'maça','laranja'];


})