(function() {

    /**
     * Our homecontroller shares the ProfileService with the ProfileController.
     * @param ProfileService
     * @constructor
     */
    function HomeController(ProfileService) {
        var vm = this;
        vm.profiles = [];
        vm.order = 'id';


        activate();

        function activate() {

            // Get all the profiles
            ProfileService.getProfiles().then(function(data) {
                vm.profiles = data;
            })
        }
    }

    angular.module('demo').controller('HomeController', HomeController);
}());