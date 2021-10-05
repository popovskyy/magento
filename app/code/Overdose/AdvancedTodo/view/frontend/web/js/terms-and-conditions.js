define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Overdose_AdvancedTodo/terms-and-conditions',
            statefull: {
                agreementStatus: true,
            },
            tracks: {
                agreementStatus: true
            }
        },

        initialize: function () {
            this._super();
        }
    });
});
