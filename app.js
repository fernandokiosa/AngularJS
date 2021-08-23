var app = angular.module('app',[]);

app.controller('appCtrl',function ($scope,$http){
    $scope.fruits = Array();

    $scope.getFruits = function(){
        $http.get("listFruits.json").then(function(result){
            $scope.fruits = result.data;
            console.log($scope.fruits);
        }, function(data){
            alert("Error...");
            console.log(data);
        });
    }
});