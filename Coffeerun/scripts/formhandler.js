(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    //var FormHandler = App.FormHandler;

    function FormHandler(selector) {
        // Code will go here
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }


    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        // More code will go here
        this.$formElement.on('submit', function(event) {
            event.preventDefault();
            var data = {};
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
                //document.getElementById("email1").innerHTML = data.emailAddress;
            });
            console.log(data);
            fn(data);
            var x = data.emailAddress;
            //this.reset();
            this.elements[0].focus();
        });
    };

    FormHandler.prototype.addInputHandler = function(fn) {
        console.log('Setting input handler for form');
        this.$formElement.on('input', '[name="emailAddress"]', function(event) {
            var emailAddress = event.target.value;

            var message = '';
            if (fn(emailAddress)) {
                event.target.setCustomValidity('');
            } else {
                message = emailAddress + ' is not an authorized email address!'
                event.target.setCustomValidity(message);
            }

        });

    };

    FormHandler.prototype.addInputCoffeeHandler = function(fn) {
        console.log('Setting input handler for form');
        this.$formElement.on('input', '[name="coffee"]', function(event) {
            var coffee1 = event.target.value;
            //var strength = event.target.value;
            var message = '';
            if (fn(coffee1)) {
                event.target.setCustomValidity('');
            } else {
                message = coffee1 + ' is not a good coffee!'
                event.target.setCustomValidity(message);
            }
        });
    };


    App.FormHandler = FormHandler;
    window.App = App;
})(window);
