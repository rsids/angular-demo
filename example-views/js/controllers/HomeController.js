(function() {
   function HomeController() {

   }

    angular.module('demo').controller('HomeController', HomeController);
});



(function() {
    function HomeController(ProfileService) {
        var _this = this;
        _this.profile = {};


        activate();

        function activate() {
            ProfileService.getProfile().then(function(data) {
                _this.profile = data;
            })
        }
    }

    angular.module('demo').controller('HomeController', HomeController);
}());