'use strict';

angular.module('movieApp').controller('ResultsController', [ '$scope', '$location', '$exceptionHandler', '$log', 'OMDBService',
    function($scope, $location, $exceptionHandler, $log, OMDBService){
		var query = $location.search().q;
        $log.debug('Controller Loaded with query: ', query);

		OMDBService.search(query)
        .then(function(data) {
            $log.debug('Data returned for query: ', query, data);
            if(data.status == 200){
                $scope.results = data.data.Search;
            }           
        });

        $scope.expand = function(idx, id){
            if($scope.results[idx].open == true){
                $scope.results[idx].open = false;
            }
            else {
                OMDBService.find(id)
                .then(function(data){
                    $scope.results[idx].data = data.data;
                    $scope.results[idx].open = true;
                });
            }                        
        }
    }
]);
