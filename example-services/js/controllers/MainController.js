(function() {
    function MainController(ProfileService) {
        var _this = this;

        activate();
        function activate() {

            getProfiles();
        }

        /**
         * Get the profiles from the json file
         */
        function getProfiles() {
            ProfileService.getProfiles().then(function(data) {
                _this.profiles = data.data.result;
            })
        }
    }

    angular.module('demo').controller('MainController', MainController);
}());