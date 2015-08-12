(function() {

    /**
     * Our homecontroller shares the ProfileService with the ProfileController.
     * @param ProfileService
     * @constructor
     */
    function HomeController(ProfileService) {
        var vm = this;
        vm.profile = {};


        activate();

        function activate() {

            // Get the (new) profile. Any changes made in the ProfileController are shared with the HomeController
            // through the ProfileService
            ProfileService.getProfile().then(function(data) {
                vm.profile = data;
            })
        }
    }

    angular.module('demo').controller('HomeController', HomeController);
}());