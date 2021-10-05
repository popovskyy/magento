define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Overdose_AdvancedTodo/search-items-result',
            imports: {
                searchResultArray: 'advanced-todo:resultArray',
                searchInputState: 'advanced-todo:searchInputState'
            },
            tracks: {
                searchResultArray: true,
                searchInputState: true
            }
        },

        initialize: function () {
            this._super();
        }
    });
});
