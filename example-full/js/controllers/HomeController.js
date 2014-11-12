(function() {

    /**
     * Our homecontroller shares the ProfileService with the ProfileController.
     * @param ProfileService
     * @constructor
     */
    function HomeController(ProfileService) {
        var _this = this;
        _this.profiles = [];
        _this.order = 'id';


        activate();

        function activate() {

            // Get all the profiles
            ProfileService.getProfiles().then(function(data) {
                _this.profiles = data;
            })
        }
    }

    angular.module('demo').controller('HomeController', HomeController);
}());