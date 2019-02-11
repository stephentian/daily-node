<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <NewTodo></NewTodo>
    <TodoList></TodoList>
  </div>
</template>

<script>
import NewTodo from '@/components/NewTodo.vue'
import TodoList from '@/components/TodoList.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    TodoList, NewTodo
  },
  computed: mapState(['todos', 'msg']),
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
    ...mapActions([
      'remove',
      'add'
    ]),
    add1: function () {
      this.add(this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>

<style scoped>
</style>