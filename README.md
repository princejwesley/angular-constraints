# angular-constraints
A tiny angular custom validation enabler using ngModel and ngMessage

## Usage
###Template:
```html  
    <form name="form">
      <label>Data</label>
      <input type="text" name="data" ng-model="model.data" constraints="email, assigned">
      <div ng-messages="form.data.$error">
        <div ng-message="email">Invalid email address.</div>
        <div ng-message="assigned">Provided email address is not available.</div>
      </div>
    </form>
```

###JS:
```javascript
    $scope.email = function(value) {
      // validate
      return true;
    };
    
    $scope.assigned = function(value) {
      // validate
      return true;
    };    
    
    angular.module('myModule', ['ngMessages', 'angular-constraints']);
```

*constraints* directive takes custom functions separated by white space characters, comma, colon, semi-colon or pipe character.

## License
This plugin is licensed under the [MIT license](https://github.com/princejwesley/angular-constraints/blob/master/LICENSE).

Copyright (c) 2015 [Prince John Wesley](http://www.toolitup.com)
