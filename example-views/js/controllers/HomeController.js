(function() {

    /**
     * Our homecontroller shares the ProfileService with the ProfileController.
     * @param ProfileService
     * @constructor
     */
    function HomeController(ProfileService) {
        var _this = this;
        _this.profile = {};


        activate();

        function activate() {

            // Get the (new) profile. Any changes made in the ProfileController are shared with the HomeController
            // through the ProfileService
            ProfileService.getProfile().then(function(data) {
                _this.profile = data;
            })
        }
    }

    angular.module('demo').controller('HomeController', HomeController);
}());