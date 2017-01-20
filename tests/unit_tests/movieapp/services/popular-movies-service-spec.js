describe('Popular Movies Data Service', function(){
    var PopularMovieService, $httpBackend;

    beforeEach(angular.mock.module('movieApp'));

    beforeEach(angular.mock.inject(
        function(_PopularMovieService_, _$httpBackend_){
            PopularMovieService = _PopularMovieService_;
            $httpBackend = _$httpBackend_;
        }
    ));

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Should create popular movie', function(){
        var expectedData = function(data){
            return angular.fromJson(data).movieId == 'tt0076759';
        };

        $httpBackend.expectPOST(/./, expectedData).respond(201);

        var popularMovie = new PopularMovieService({
            movieId: 'tt0076759',
            description: 'Great Movie' 
        });
        
        popularMovie.$save();

        expect($httpBackend.flush).not.toThrow();
    });

    it('should get movie by id (checking url)', function(){
        /*
        $httpBackend.expectGET(function(url){
            dump(url);
            return true;
        }).respond(200);
        */
        $httpBackend.expectGET('popular/tt0076759').respond(200);

        PopularMovieService.get({movieId: 'tt0076759'});

        expect($httpBackend.flush).not.toThrow();
    });

    it('should update movie ', function(){
        $httpBackend.expectPUT('popular').respond(200);

        var popularMovie = new PopularMovieService({
            movieId: 'tt0076759',
            description: 'Great Movie' 
        });
        
        popularMovie.$update();

        expect($httpBackend.flush).not.toThrow();
    });    


    it('should authenticate get requests', function(){
        var expectedHeaders = function(headers){
            //dump(angular.mock.dump(headers));
            //return true;
            return angular.fromJson(headers).authToken === 'lalala';
        };

        $httpBackend.expectGET('popular/tt0076759', expectedHeaders).respond(200);

        PopularMovieService.get({movieId: 'tt0076759'});

        $httpBackend.flush(1);
    });

    it('should authenticate all requests', function(){
        var verifyHeadersCallback = function(headers){
            return headers.authToken === 'lalala';
        };
        var matchAnyUrl = /.*/;

        $httpBackend.whenGET(matchAnyUrl, verifyHeadersCallback).respond(200);
        $httpBackend.expectPOST(matchAnyUrl, matchAnyUrl, verifyHeadersCallback).respond(200);
        $httpBackend.expectPUT(matchAnyUrl, matchAnyUrl, verifyHeadersCallback).respond(200);
        $httpBackend.expectDELETE(matchAnyUrl, verifyHeadersCallback).respond(200);        

        var popularMovie = { movieId: 'tt0076759', description: 'Great Movie'};

        PopularMovieService.query();
        PopularMovieService.get({ movieId: 'tt0076759' });
        new PopularMovieService(popularMovie).$save();
        new PopularMovieService(popularMovie).$update();
        new PopularMovieService(popularMovie).$remove();

        expect($httpBackend.flush).not.toThrow();
    });
});
