<template>
  <div class="home">
    <form @submit.prevent="add1">
      <b-input type="text"
               name="newTodo"
               placeholder="new todo"
               v-model="newtodo"></b-input>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: '',
  data () {
    return {
      newtodo: ''
    }
  },
  computed: mapState(['todo', 'msg']),
  methods: {
    ...mapActions([
      'add'
    ]),
    add1: function () {
      this.add(this.newtodo)
      this.newtodo = ''
    }
  }
}
</script>

<style scoped>
</style>