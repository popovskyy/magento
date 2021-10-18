define([
    'uiComponent',
    'ko'
], function (Component, ko) {
    'use strict';

    const boxConfiguration = () => {
        return {
            length: '',
            width: '',
            height: '',
            weight: '',
            unitsPerBox: '',
            numberOfBoxes: ''
        }
    }

    return Component.extend({
        defaults: {
            boxConfigurations: [boxConfiguration()],
            tracks: {
                boxConfigurations: true
            }
        },

        initialize() {
            this._super();
        },

        handleAdd() {
            this.boxConfigurations.push(boxConfiguration());
        },

        handleDelete(index) {
            this.boxConfigurations.splice(index(), 1);
        },

        handleSubmit() {
            console.log('submit')
        }
    });
});
