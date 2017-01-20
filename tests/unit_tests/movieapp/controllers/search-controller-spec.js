describe('Search Controller Test Suite', function(){

    var $controller, $scope, $location, searchController, $timeout;

    beforeEach(angular.mock.module('movieApp'));

    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_, _$location_, _$timeout_){
        $controller = _$controller_;
        $location = _$location_;
        $timeout = _$timeout_;
        $scope = _$rootScope_.$new();    

        $controller('SearchController', {$scope: $scope, $location: $location, $timeout: $timeout});
    }));

    it('should redirect to the query results page for non-empty query', function(){
        $scope.query = 'star wars';
        $scope.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    });

    it('should NOT redirect to the query results page for an empty query', function(){
        $scope.query = '';
        $scope.search();
        expect($location.url()).toBe('/');
    });

    it('should redirect after 1 second of keyboard activity', function(){
        $scope.query = 'star wars';
        $scope.keyup();
        $timeout.flush();
        expect($timeout.verifyNoPendingTasks).not.toThrow();
        expect($location.url()).toBe('/results?q=star%20wars');
    });

    it('should cancel timeout on keydown', function(){
        $scope.query = 'star wars';
        $scope.keyup();
        $scope.keydown();    
        $timeout.flush();    
        expect($timeout.verifyNoPendingTasks).not.toThrow();        
    });    

        it('should cancel timeout on search', function(){
        $scope.query = 'star wars';
        $scope.keyup();
        $scope.search();    
        $timeout.flush();    
        expect($timeout.verifyNoPendingTasks).not.toThrow();        
    });  

});