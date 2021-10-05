define([
    'uiComponent',
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            boxConfigurations: [
                {
                    length: 342,
                    width: 34,
                    height: 12
                },
                {
                    length: 4,
                    width: 345,
                    height: 53
                },
                {
                    length: 34,
                    width: 32,
                    height: 13
                }
            ],
            tracks: {
                boxConfigurations: true
            }
        },

        initialize() {
            this._super();
        }
    });
});
