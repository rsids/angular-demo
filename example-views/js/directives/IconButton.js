/**
 * Created by ids on 04/11/14.
 */
(function() {
   function IconButton() {
       return {
           restrict: 'A',
           link: function($scope, element, attr) {
               element.prepend('<i class="glyphicon glyphicon-'+attr.icon+'"></i>&nbsp;');
           }
       }
   }

    angular.module('demo').directive('icon', IconButton);
}());