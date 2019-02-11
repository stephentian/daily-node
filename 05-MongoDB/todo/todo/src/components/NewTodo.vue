<template>
  <div class="home">
    <form @submit.prevent="add1">
      <input type="text"
             name="newTodo"
             placeholder="new todo"
             v-model="newtodo">
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vue'

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