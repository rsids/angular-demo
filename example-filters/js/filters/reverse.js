(function() {


    /**
     * A filter returns a function which accepts an input string and optionally some extra arguments
     * In this case, no additional arguments are accepted
     * @returns {Function}
     */
    function reverse() {

        return function(input) {

            // If input is undefined, return an empty string
            if(input === undefined)
                return '';

            // Easiest wat to reverse a string is to split it into an array,
            // reverse the array and then join it again into a string
            return input.split('').reverse().join('');
        }

    }

    angular.module('demo').filter('reverse', reverse);
}());
