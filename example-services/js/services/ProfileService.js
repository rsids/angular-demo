(function() {

    /**
     * The ProfileService gets profiles from our backend
     * @param $q Promise / defer implementation
     * @param $http The $http library is responsible for loading external data
     * @returns {{getProfiles: getProfiles}}
     * @constructor
     * @see https://docs.angularjs.org/api/ng/service/$q
     * @see https://docs.angularjs.org/api/ng/service/$http
     */
    function ProfileService($q, $http) {

        // Store our profiles, so we only need to call the backend once
        var profiles;

        function getProfiles() {
            var defer = $q.defer();

            // Did we load our profiles already?
            if(profiles !== undefined) {
                defer.resolve(profiles);
            } else {

                // If not, get a fresh copy from the server
                $http.get('../assets/people.json').then(function(data) {
                    profiles = data;
                    defer.resolve(profiles);
                });
            }

            return defer.promise;
        }

        // Return an object which exposes our methods. In this case, only getProfiles is visible for the outside world
        return {
            getProfiles: getProfiles
        }
    }

    angular.module('demo').service('ProfileService', ProfileService);
}());