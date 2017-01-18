'use strict';

angular.module('omdb').controller('SearchController', [ '$scope', '$location', 
    function($scope, $location){
        $scope.query ='';
        $scope.search = function(query){
            if($scope.query){
                $location.path('/results').search('q', $scope.query);
            }
        }
    }
]);