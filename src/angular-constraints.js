/*!The MIT License (MIT)

Copyright (c) 2015 Prince John Wesley (princejohnwesley@gmail.com)
**/

(function() {
  'use strict';
 
  function ConstraintsValidator($parse) {
 
    var pattern = /(?:[^\s,;:|]+)/g;
 
    function matches(value) {
      return (typeof value === 'string' || '').match(pattern) || [];
    }
 
    function validatorFn(fn) {
      return function(value) {
        return !fn(value);
      }
    }
 
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ctrl) {
        angular.forEach(matches(attr.constraints), function(constraint) {
          ctrl.$validators[constraint] = validatorFn($parse(constraint)(scope));
        });
      }
    };
  }
 
 
  ConstraintsValidator.$inject = ['$parse'];
  angular.module('angular-constraints', [])
    .directive('constraints', ConstraintsValidator);
}());