app = angular.module("FoodTrack", []);
app.controller('dayController', function() {
    this.today = {
        "Grains": 0,
        "Fats": 0,
        "Vegetables": 0,
        "Fruits": 0,
        "Proteins": 0,
        "Dairy": 0,
        "Water": 0,
        "Sweets": 0
    };
    this.add = function (what, amount) {
        if (amount + this.today[what] >= 0)
            this.today[what] += amount;
    }
});
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