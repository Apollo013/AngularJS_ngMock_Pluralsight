'use strict';

angular.module('movieApp').controller('SearchController', [ '$scope', '$location', '$timeout', 
    function($scope, $location, $timeout){   
        var searchTimeout;     
        $scope.keyup = function(){
            searchTimeout = $timeout($scope.search, 1000);
        }

        $scope.keydown = function(){
            $timeout.cancel(searchTimeout);
        }

        $scope.search = function(){
            $timeout.cancel(searchTimeout);
            if($scope.query){
                $location.path('/results').search('q', $scope.query);
            }
        }
    }
]);
