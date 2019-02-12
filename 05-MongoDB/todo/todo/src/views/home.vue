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
import axios from 'axios'

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
  mounted () {
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    axios({
      url: url,
      method: 'get'
    })
      .then(res => { console.log(res.data.chartName) })
      .catch(err => console.log(err))
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