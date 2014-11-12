(function() {

    function ProfileService($q, $http) {

        var profiles;

        function getProfiles() {
            var defer = $q.defer();

            if(profiles !== undefined) {
                defer.resolve(profiles);
            } else {

                $http.get('../assets/people.json').then(function(data) {
                    profiles = data;
                    defer.resolve(profiles);
                });
            }

            return defer.promise;
        }

        return {
            getProfiles: getProfiles
        }
    }

    angular.module('demo').service('ProfileService', ProfileService);
}());