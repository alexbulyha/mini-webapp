

var elastsearchApp=angular.module('elastsearchApp', ['elasticsearch'])
elastsearchApp.service('client',function(esFactory) {
        return esFactory ({
            host: 'localhost:9200'
        });
    });
elastsearchApp.controller('elastCtrl', function($scope, client) {
    var elastCtrl = this;
    elastCtrl.name='hehe';
    $scope.namex='scope geht';
    $scope.movies = [];
    $scope.testmovies = [
        {'Title': 'film 1',
            'Plot': 'plot 1'},
        {'Title': 'film 2',
            'Plot': 'plot 2'},
        {'Title': 'film 3',
            'Plot': 'plot 3'}
    ];


    client.search({
        index: 'library',
        type: 'movies',
        body: {
            query: {
                match: {
                    Title: 'Terminator'
                    }
                }
            }
    }).then(function(resp) {
        movies = resp.hits.hits;
    }, function (err) {
        console.trace(err.message);
    })  ;

});

