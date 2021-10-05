define([
    'uiComponent',
    'jquery',
    'mage/validation'

], function (Component, $) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Overdose_AdvancedTodo/ui-form',
        },

        initialize: function () {
            this._super();
        },

        login: function (formUiElement, event) {
            var loginData = {},
                formElement = $(event.currentTarget),
                formDataArray = formElement.serializeArray();

            event.stopPropagation();
            formDataArray.forEach(function (entry) {
                loginData[entry.name] = entry.value;
            });

            if (formElement.validation() &&
                formElement.validation('isValid')
            ) {
               console.log('Valid form')
            }

            return false;
        },
        validateField: function (formUiElement, event) {
            console.log($.validator.validateSingleElement($(event.currentTarget)))
        }
    });
});
