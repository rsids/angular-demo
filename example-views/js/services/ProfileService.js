(function() {

    function ProfileService($q) {

        function getProfile() {
            var defer = $q.defer();

            var profile = localStorage.getItem("profile");
            if(profile) {
                profile = JSON.parse(profile);
            }
            defer.resolve(profile);

            return defer.promise;
        }

        function setProfile(profile) {
            localStorage.setItem("profile", JSON.stringify(profile));

            return getProfile();
        }

        return {
            getProfile: getProfile,
            setProfile: setProfile
        }
    }

    angular.module('demo').service('ProfileService', ProfileService);
}());