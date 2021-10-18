define([
    'uiComponent',
    'mage/storage',
    'jquery'
], function (Component, storage, $) {
    'use strict';

    return Component.extend({
        defaults: {
            sku: '24-MB01',
            placeholder: '24-MB01',
            messageResponse: '',
            isSuccess: false,
            tracks: {
                sku: true,
                messageResponse: true,
                isSuccess: true
            }
        },

        initialize() {
            this._super();
        },

        handleSubmit() {
            $('body').trigger('processStart');
            this.messageResponse = '';
            this.isSuccess = false;

            storage.get(`rest/V1/products/${this.sku}`)
                .done(response => {
                    this.messageResponse = `Product found! <strong>${response.name}</strong>`;
                    this.isSuccess = true;
                })
                .fail(() => {
                    this.messageResponse = `Product not found!`;
                    this.isSuccess = false;
                })
                .always(() => {
                    $('body').trigger('processStop');
                })
        }
    });
});
