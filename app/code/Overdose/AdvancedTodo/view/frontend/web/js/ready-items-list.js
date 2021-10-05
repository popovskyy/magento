define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Overdose_AdvancedTodo/ready-items-list',
            imports: {
                readyList: 'advanced-todo:readyList'
            },
            tracks: {
                readyList: true
            }
        },

        initialize: function () {
            this._super();
        },
    });
});
