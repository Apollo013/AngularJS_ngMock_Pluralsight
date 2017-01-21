describe('Home Controller Test Suite: ', function(){
	var results = [
	      {
	         "Title":"Star Wars: Episode IV - A New Hope",
	         "imdbID":"tt0076759"
	      },
	      {
	         "Title":"Star Wars: Episode V - The Empire Strikes Back",
	         "imdbID":"tt0080684"
	      },
	      {
	         "Title":"Star Wars: Episode VI - Return of the Jedi",
	         "imdbID":"tt0086190"
	      }
	  ];
	var $scope, $interval, $q, OMDBService, PopularMovieService;

    beforeEach(module('movieApp'));

    beforeEach(inject(function(_$q_, _PopularMovieService_){
        PopularMovieService = _PopularMovieService_;
        $q = _$q_;
        spyOn(PopularMovieService,'get').and.callFake(function(){
            var deferred = $q.defer();
            deferred.resolve(['tt0076759','tt0080684','tt0086190'])
            return deferred.promise;
        });
    }));

	beforeEach(inject(function(_OMDBService_) {
        OMDBService = _OMDBService_;
	    spyOn(OMDBService, 'find').and.callFake(function() {
      		var deferred = $q.defer();
      		var args = OMDBService.find.calls.mostRecent().args[0]; // get most recent arg passed from previous 'beforeEach'

			if (args === 'tt0076759') {
				deferred.resolve(results[0]);
			} else if (args === 'tt0080684') {
				deferred.resolve(results[1]);
			} else if (args === 'tt0086190') {
				deferred.resolve(results[2]);
			} else {
				deferred.reject();
			}

	      return deferred.promise;
	    });
	}));

    beforeEach(inject(function(_$controller_, _$interval_, _$rootScope_){
        $scope = {};
        $interval = _$interval_;
        _$controller_('HomeController',{ $scope: $scope, $interval: $interval, OMDBService: OMDBService, PopularMovieService: PopularMovieService });
        _$rootScope_.$apply();
    }));

/*
    it('should rotate movies every 5 seconds', function(){
		expect($scope.result.Title).toBe(results[0].Title);
        $interval.flush(5000);
        expect($scope.result.Title).toBe(results[1].Title);
        $interval.flush(5000);
        expect($scope.result.Title).toBe(results[2].Title);
        $interval.flush(5000);
        expect($scope.result.Title).toBe(results[0].Title);
    });
*/
});