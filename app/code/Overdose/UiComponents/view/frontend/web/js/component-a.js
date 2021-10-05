define([
    'uiComponent',
    'jquery',
    'ko',
], function (Component, $, ko,) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Overdose_UiComponents/component-a',
            tracks: {
                input: true, // робимо свойство observable
                todoList: true,
                readyList: true,
                resultArray: true,
                changeTerms: true
            },
            statefull: {
                todoList: true, // робимо свойство синхронізоване з  localstorage
                readyList: true
            },
            links: {
                changeTerms: 'terms-and-conditions:agreementStatus'
            },
            input: '',
            todoList: [],
            readyList: [],
            resultArray: [],
            searchInput: ''
        },

        initialize: function () {
            this._super();
        },

        addTodo: function () {
            this.resultArray = [];
            this.searchInput = '';
            this.todoList.push(new this.todoItem(this.input));
        },

        todoItem: function todoItem(title) {
            this.title = title;
        },

        addToReady:  function(itm) {
            this.resultArray = [];
            this.searchInput = '';
            this.readyList.push(itm);
            this.todoList.remove(itm);
        },

        clearTodoLists: function () {
            this.todoList = [];
            this.readyList = [];
            this.resultArray = [];
            this.searchInput = '';
        },

        findTodo: function () {
            let self = this;

            self.resultArray = [];

            if (self.searchInput !== '') {
                for (let i = 0; i < self.todoList.length; i++){
                    if (self.todoList[i].title.search(self.searchInput) > -1){
                        self.resultArray.push(self.todoList[i]);
                    }
                }
            }
        }
    });
});
