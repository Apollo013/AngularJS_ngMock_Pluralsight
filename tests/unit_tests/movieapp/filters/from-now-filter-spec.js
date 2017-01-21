describe('FROM NOW FILTER TEST SUITE: ', function(){

    var fromNow;

    beforeEach(module('movieApp'));

    beforeEach(inject(function(_$filter_){
        fromNow = _$filter_('fromNow');
    }));

    it('should throw error for undefined dates', function(){
        expect(fromNow()).toBe('date value cannot be undefined');
    });

    it('should return original value if not a date', function(){
        expect(fromNow('Fubar','HuggaBugga')).toBe('Fubar');
    });

    it('should return value of years ago for date object', function(){
        var releaseDate = new angular.mock.TzDate(0, '2015-01-21T00:00:00.000Z');
        var currentDate = new angular.mock.TzDate(0, '2017-01-21T21:00:00.000Z');
        expect(fromNow(releaseDate, currentDate)).toBe('2 years ago');
    });

    it('should return value of one year ago for date object', function(){
        var releaseDate = new angular.mock.TzDate(0, '2016-01-21T00:00:00.000Z');
        var currentDate = new angular.mock.TzDate(0, '2017-01-21T21:00:00.000Z');
        expect(fromNow(releaseDate, currentDate)).toBe('1 year ago');
    });    


    it('should return value of 6 months ago for date object', function(){
        var releaseDate = new angular.mock.TzDate(0, '2016-07-21T00:00:00.000Z');
        var currentDate = new angular.mock.TzDate(0, '2017-01-21T21:00:00.000Z');
        expect(fromNow(releaseDate, currentDate)).toBe('6 months ago');
    });   


    it('should return value of one month ago for date object', function(){
        var releaseDate = new angular.mock.TzDate(0, '2016-12-21T00:00:00.000Z');
        var currentDate = new angular.mock.TzDate(0, '2017-01-21T21:00:00.000Z');
        expect(fromNow(releaseDate, currentDate)).toBe('1 month ago');
    });   

});