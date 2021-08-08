var app = angular.module('formulario',[]);

app.controller('formularioCtrl', function ($scope, ){
    $scope.Salvar =() => {
        alert ("SEJA BEM VINDO "+ $scope.name)
    }

    $scope.Redireciona = () => {
        
    }
});