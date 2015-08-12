
(function() {

    /**
     * @ngdoc directive
     * @returns {{restrict: string, link: Function}}
     * @description
     * This directive adds an icon to each element it's applied to.
     *
     * @example
     */
   function icon() {
       return {
           // Restrict 'A' indicates that this directive can only be used as an attribute
           restrict: 'A',
           link: function($scope, element, attr) {
               // Element is the dom element this directive is added to,
               // Add a new <i/> element to it
               element.prepend('<i class="glyphicon glyphicon-'+attr.icon+'"></i>&nbsp;');
           }
       }
   }

    // Create a directive named 'icon' in our demo app
    angular.module('demo').directive('icon', icon);
}());