describe('Results Controller Test Suite', function(){

    var results = {
	   "Search":[
	      {
	         "Title":"Star Wars: Episode IV - A New Hope",
	         "Year":"1977",
	         "imdbID":"tt0076759",
	         "Type":"movie"
	      },
	      {
	         "Title":"Star Wars: Episode V - The Empire Strikes Back",
	         "Year":"1980",
	         "imdbID":"tt0080684",
	         "Type":"movie"
	      },
	      {
	         "Title":"Star Wars: Episode VI - Return of the Jedi",
	         "Year":"1983",
	         "imdbID":"tt0086190",
	         "Type":"movie"
	      }
	  ]
	};

    var $controller, $scope, $q, $rootScope, $location, omdbDataService;

    beforeEach(angular.mock.module('omdb'));

    beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _omdbDataService_, _$location_){
        $controller = _$controller_;
        $scope = {};
        $q = _$q_;
        $rootScope = _$rootScope_;
        omdbDataService = _omdbDataService_;
        $location = _$location_;
    }));

    it('should load search results', function() {
        // Mock 'search' method in data service to return what the data we want without worrying about inner functionality
        spyOn(omdbDataService, 'search').and.callFake(function(){
            var deferred = $q.defer();
            deferred.resolve(results);
            return deferred.promise;
        });

        $location.search('q', 'star wars'); // this will simulate a change in route with a parameter of q -> 'star wars'
        $controller('ResultsController', {$scope: $scope});
        $rootScope.$apply(); // resolves the promise

        expect($scope.results[0].Title).toBe(results.Search[0].Title);
		expect($scope.results[1].Title).toBe(results.Search[1].Title);
		expect($scope.results[2].Title).toBe(results.Search[2].Title);

        expect(omdbDataService.search).toHaveBeenCalledWith('star wars');
    });
});