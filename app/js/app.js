app = angular.module("FoodTrack", ['ngRoute', 'ngMaterial']);
app.controller('dayController', ['$scope', function($scope) {
    Parse.initialize("9EVU6bc3ZEDiiWG8LBX6HNJbyiwuPhvWpfLnzZqB", "uy3NAUCMeGf0qzcTsS5xI206trLdg6L2eB6QAIA7");

    $scope.today = {
        "Grains": 0,
        "Fats": 0,
        "Vegetables": 0,
        "Fruits": 0,
        "Proteins": 0,
        "Dairy": 0,
        "Water": 0,
        "Sweets": 0
    };
    $scope.add = function (what, amount) {
        if (amount + this.today[what] >= 0)
            this.today[what] += amount;
    };

    $scope.save = function() {
        var DaySummaryObject = Parse.Object.extend("DaySummary");
        var daySummaryObject= new DaySummaryObject();
        daySummaryObject.save(this.today).then(function(object) {
            console.log("yay! it worked");
        });
    };
}]);
app.controller('settingsController', function() {
    this.ftSettings = {
        "maxPortions": {
            "Grains": 8,
            "Fats": 3,
            "Vegetables": 5,
            "Fruits": 2,
            "Proteins": 3,
            "Dairy": 3,
            "Water": 8,
            "Sweets": 2
        }
    };
});

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/counters', {
                templateUrl: 'partials/counters.html'
            }).
            otherwise({
                redirectTo: '/counters'
            });
}]);