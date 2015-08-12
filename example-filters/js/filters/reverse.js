/**
 * Created by ids on 04/11/14.
 */
(function() {


    /**
     * Reverses a string
     * @returns {Function}
     */
    function reverseIt() {

        return function(input) {
            return input ? input.split('').reverse().join('') : '';
        }

    }

    angular.module('demo').filter('reverse', reverseIt);
}());
