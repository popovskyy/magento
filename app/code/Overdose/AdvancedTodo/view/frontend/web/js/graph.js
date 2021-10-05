define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Overdose_AdvancedTodo/graph',
            imports: {
                todoList: 'advanced-todo:todoList',
                readyList: 'advanced-todo:readyList'
            },
            tracks: {
                todoList: true,
                readyList: true,
                percents: true
            },
            percents: 0.1
        },

        initialize: function () {
            this._super();

            this.calcPercents();
            this.on('readyList', this.calcPercents.bind(this));
            this.on('todoList', this.calcPercents.bind(this));
        },

        calcPercents: function () {
            let readyListCount,
                todoListCount;

            if (this.readyList) {
                readyListCount = this.readyList.length
            } else {
                readyListCount = 0
            }

            if (this.todoList) {
                todoListCount = this.todoList.length
            } else {
                todoListCount = 0
            }

            let sum = (readyListCount / (readyListCount + todoListCount)) * 100;
            if (!Number.isNaN(sum)) {
                this.percents = sum
            } else {
                this.percents = 0.001
            }
        }
    });
});
