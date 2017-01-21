'use strict';

angular.module('movieApp').controller('HomeController', [ '$scope', '$interval', '$log', 'PopularMovieService', 'OMDBService',
    function($scope, $interval, $log, PopularMovieService, OMDBService){

        $log.log('Standard Log');
        $log.info('info Log');
        $log.error('error Log');
        $log.warn('warn Log');
        $log.debug('debug Log');

	    var results = ['tt0076759','tt0080684','tt0086190'];
        var idx = 0;

        var findMovie = function(id){
            OMDBService.find(id)
            .then(function(response){
                $scope.result = response.data;
            })
            .catch(function(){
                console.log('Error finding: ' + id);
            });
        }
          

        findMovie(results[0]);
        $interval(function(){
            ++idx;
            findMovie(results[idx % results.length]);
        }, 5000);

    }
]);
