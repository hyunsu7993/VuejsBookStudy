import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant'; //지정한 상수를 사용하기 위해 import함.
Vue.use(Vuex); //Vuex를 전역에서 사용할 수 있도록 미리 작성함bundleRenderer.renderToStream

const store = new Vuex.Store({
    state: {
        todolist: [
            { id: 1, todo: "axios 사용법 익히기", done: true },
            { id: 2, todo: "router 학습", done: false },
            { id: 3, todo: "ES6 학습", done: false },
            { id: 4, todo: "Vuex 학습", done: false },
        ]
    },
    mutations: {
        [Constant.ADD_TODO]: (state, payload) => {
            if (payload.todo !== "") {
                state.todolist.push({ id: new Date().getTime(), todo: payload.todo, done: false });
            }
        },
        [Constant.DONE_TOGGLE]: (state, payload) => {
            var index = state.todolist.findIndex((item) => item.id === payload.id);
            state.todolist[index].done = !state.todolist[index].done;
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            var index = state.todolist.findIndex((item) => item.id === payload.id);
            state.todolist.splice(index, 1);
        }
    },
    actions: {
        [Constant.ADD_TODO]: (store, payload) => {
            console.log("###addTodo!!!", payload);
            store.commit(Constant.ADD_TODO, payload);
        },
        [Constant.DONE_TOGGLE]: (store, payload) => {
            console.log("###doneToggle!!!", payload);
            store.commit(Constant.DONE_TOGGLE, payload);
        },
        [Constant.DELETE_TODO]: (store, payload) => {
            console.log("###deleteTodo!!!", payload);
            store.commit(Constant.DELETE_TODO, payload);
        }
    }
})

export default store;