describe("My First Test", function() {

    it("should be true", function() {
        expect(true).toBe(true);
    });
});

describe("FoodTrack module", function () {
    beforeEach(module("FoodTrack"));

    describe("dayController", function () {
        var scope,
            controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it("should start with 0ed stuff", function () {
            controller("dayController", {$scope: scope});
            expect(scope.today["Grains"]).toEqual(0);
            expect(scope.today["Fats"]).toEqual(0);
        });

        it("should be able to increase and decrease, but not below 0", function () {
            controller("dayController", {$scope: scope});
            expect(scope.today["Grains"]).toEqual(0);
            scope.add("Grains", 1);
            expect(scope.today["Grains"]).toEqual(1);
            scope.add("Grains", -1);
            expect(scope.today["Grains"]).toEqual(0);
            scope.add("Grains", -1);
            expect(scope.today["Grains"]).toEqual(0);
        });
    });
});
