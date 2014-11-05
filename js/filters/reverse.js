/**
 * Created by ids on 04/11/14.
 */
(function() {


    function reverseIt() {

        return function(input) {
            return input.split('').reverse().join('');
        }

    }

    angular.module('demoApp').filter('reverseIt', reverseIt);
}());
