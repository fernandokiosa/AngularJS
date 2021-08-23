var app = angular.module('formulario',[]);

app.controller('formularioCtrl', '$http', function ($scope, $http){
    $scope.Salvar =() => {
        alert ("SEJA BEM VINDO "+ $scope.name)
    }

    $scope.Redireciona = () => {
        
    }
});