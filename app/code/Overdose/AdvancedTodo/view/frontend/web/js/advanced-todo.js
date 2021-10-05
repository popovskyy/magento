define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Overdose_AdvancedTodo/advanced-todo',
            tracks: {
                todoInput: true,
                todoList: true,
                readyList: true,
                resultArray: true,
                changeTerms: true,
                searchInputState: true
            },
            statefull: {
                todoList: true,
                readyList: true
            },
            links: {
                changeTerms: 'terms-and-conditions:agreementStatus'
            },
            todoInput: '',
            todoList: [],
            readyList: [],
            resultArray: [],
            searchInput: '',
        },

        initialize: function () {
            this._super();
        },

        addTodo: function () {
            if (this.todoInput) {
                this.resultArray = [];
                this.searchInput = '';
                this.todoList.push(new this.todoItem(this.todoInput));
                this.todoInput = '';
            } else {
                alert('Please enter more than 0 symbols')
            }
        },

        todoItem: function todoItem(todo) {
            this.todo = todo;
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

        toggleSearchInputState: function () {
            this.searchInputState = !this.searchInputState;
        },

        findTodo: function () {
            this.resultArray = [];

            if (this.searchInput !== '') {
                for (let i = 0; i < this.todoList.length; i++){
                    if (this.todoList[i].todo.search(this.searchInput) > -1){
                        this.resultArray.push(this.todoList[i]);
                    }
                }
            }
        },
    });
});
