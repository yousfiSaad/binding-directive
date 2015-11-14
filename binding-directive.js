angular.module('wakanda-binding', [])
  .directive('bindTo', function(){
    return {
      restrict: 'A',
      link: function(scope, elements, attributes){
        var modelName = attributes['bindTo'];

        scope[modelName] = scope[modelName] || {};

        var element = elements[0];
        element.onchange = function(newValue){
          scope.$apply(function(){
            scope[modelName] = element.getValues();
          });
        };
      }
    };
  });
