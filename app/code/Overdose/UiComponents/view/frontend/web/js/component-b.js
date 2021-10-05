define([
    'uiComponent',
    'jquery',
    'ko',
], function (Component, $, ko,) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Overdose_UiComponents/component-b',
            tracks: {
                title: true,
                importedValue: true,
                readyList: true
            },
            imports: {
                title: 'component-a:input',
                readyList: 'component-a:readyList'
            },
            secondTitle: ko.observable(),
            checkboxValue: ko.observable(),
            availableCountries : ko.observableArray(['France', 'Germany', 'Spain']),
            chosenCountries : ko.observableArray(['Germany']), // Initially, only Germany is selected
            selectValue: ko.observable()
        },

        initialize: function () {
            this._super();

            this.importedValue = ko.computed(function() {
                return this.title + " imported value from component A";
            }, this);

            this.getCheckBoxValue();
            this.getSelectValue();
        },

        changeValue: function () {
            this.secondTitle('Value was changed via Button')
        },

        getCheckBoxValue: function () {
            this.checkboxValue.subscribe(function (newVal) {
                console.log('Checkbox Value was changed to : ', newVal)
            })
        },

        getSelectValue: function () {
            this.selectValue.subscribe(function (newVal) {
                console.log('Checkbox Value was changed to : ', newVal)
            })
        }
    });
});
