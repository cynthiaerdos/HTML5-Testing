/**
 * Created by Richard on 2015.01.01..
 */
angular.module('myApp', [])

    .controller('MainCtrl', function($scope){

        $scope.randNumber = function(min, max){
            if(min > max){
                console.error("Error (function:randNumber): The first parameter (min) must be less than the second parameter (max).")
                return;
            }
            var originNumber = Math.random();
            var calcMax = max - min;
            var randFloatNumber = min + calcMax * originNumber;
            var randNumber = Math.round(randFloatNumber);
            return randNumber;
        };

        $scope.percent = 0;


    });