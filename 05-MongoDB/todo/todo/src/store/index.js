/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019-2-2
 **/

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const defaultTodo = [{
    id: 1,
    subject: 'Eating'
  },
  {
    id: 2,
    subject: 'Loving'
  },
  {
    id: 3,
    subject: 'Preying'
  }
]

function indexById(todos, id) {
  for (var i = 0; i < todos.length; i++) {
    if (id === todos[i].id) {
      return i
    }
  }
  return -1
}

import axios from 'axios'
export default new Vuex.Store({
  state: {
    msg: 'Todo App',
    todos: defaultTodo
  },
  mutations: {
    add(state, subject) {
      var todo = {
        id: subject,
        subject: subject
      }
      state.todos.push(todo)
    },
    remove(state, id) {
      state.todos.splice(indexById(state.toao, id), 1)
    },
    reload(state) {
      state.todos = defaultTodo
    }
  },
  actions: {
    add: (context, link) => {
      context.commit("add", link)
    },
    remove: (context, link) => {
      context.commit("remove", link)
    },
    reload: (context) => {
      context.commit("reload")
    }
  }
})