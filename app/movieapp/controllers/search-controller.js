'use strict';

angular.module('movieApp').controller('SearchController', [ '$scope', '$location', 
    function($scope, $location){
        $scope.search = function(){
            //console.log('ctrl: ' + $scope.query);
            if($scope.query){
                $location.path('/results').search('q', $scope.query);
            }
        }
    }
]);
