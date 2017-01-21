'use strict';

angular.module('movieApp').factory('OMDBService', [ '$http',
    function($http){
        /*----------------------------------------------------------------------------------------
            Service vars
        ----------------------------------------------------------------------------------------*/
        var service = {};
        var baseUrl = 'http://www.omdbapi.com/?v=1&';

        /*----------------------------------------------------------------------------------------
            Service functionality
        ----------------------------------------------------------------------------------------*/
        function httpPromise(url){
            return $http.get(url)
            .then(
                function(response){
                    return response
                }, 
                function(error){
                    return error;
                }
            );            
        }

        service.search = function(query){
            return httpPromise(baseUrl + 's=' + encodeURIComponent(query));
        }

        service.find = function(id){
            return httpPromise(baseUrl + 'i=' + encodeURIComponent(id));
        }

        /*----------------------------------------------------------------------------------------
            Expose service
        ----------------------------------------------------------------------------------------*/
        return service;
    }
]);