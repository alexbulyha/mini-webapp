

var elastsearchApp=angular.module('elastsearchApp', ['elasticsearch'])
elastsearchApp.service('client',function(esFactory) {
        return esFactory ({
            host: 'localhost:9200'
        });
    });
elastsearchApp.controller('elastCtrl', function($scope, client) {

    var elastCtrl = this;

    $scope.movies = [];
    elastCtrl.name='hehe';

    elastCtrl.search = function () {
        $scope.lastsearchterm = elastCtrl.searchterm;
        client.search({
            index: 'library',
            type: 'movies',
            body: {
                "query": {
                    "match": {
                        "Title": elastCtrl.searchterm
                    }
                }
            }
        }).then(function(resp) {
            movies = resp.hits.hits;
        }, function (err) {
            console.trace(err.message);
        })  ;
        elastCtrl.searchterm = '';

        client.count({
            index: 'library'
        }, function (response) {
            $scope.number=response.count;
        }, function (err) {
            console.trace(err.message);
            $scope.number =0;
        });
    };





    $scope.testmovies = [
        {'Title': 'film 1',
            'Plot': 'plot 1'},
        {'Title': 'film 2',
            'Plot': 'plot 2'},
        {'Title': 'film 3',
            'Plot': 'plot 3'}
    ];







    client.get({
        index: 'library',
        type: 'movies',
        id: 1
    }, function (error, response) {
        $scope.movie1 = response;
    });


});

