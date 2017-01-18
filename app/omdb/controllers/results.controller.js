'use strict';

angular.module('omdb').controller('ResultsController', [ '$scope', '$location', 'omdbDataService',
    function($scope, $location, omdbDataService){
        // get search parameter
        var query = $location.search().q; 

        // Run query
        omdbDataService.search(query)
        .then(
            function(data){
                $scope.results = data.Search;
            }
        )
        .catch(function(){
            $scope.errorMessage = 'Something went wrong';
        });
    }
]);