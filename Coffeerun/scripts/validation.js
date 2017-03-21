(function(window) {
    'use strict';
    var App = window.App || {};
    var Validation = {

      /*    isCompanyEmail: function(emailInput) {
              return /.+@bignerdranch\.com$/.test(emailInput);

          }
      */

        isCoffeeDecaf: function(coffeeOrder) {
            var ee = "decaf"
            var str= document.getElementById("strengthLevel")
            return !(ee.match(coffeeOrder) && str>20);

        }
    };
    App.Validation = Validation;
    window.App = App;
})(window);
