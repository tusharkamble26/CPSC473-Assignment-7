(function(window) {
    'use strict';
    var App = window.App || {};
    var Validation = {

        isCompanyEmail: function(emailInput) {
            return /.+@bignerdranch\.com$/.test(emailInput);

        },

        isCoffeeDecaf: function(coffeeOrder, str) {
            if (/decaf$/.test(coffeeOrder)) {
                if (str > 20) {
                    return false;
                }
            }
            return true;
        }
    };
    App.Validation = Validation;
    window.App = App;
})(window);
