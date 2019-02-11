<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos"
          :key="index">
        {{ todo.subject }}
        <button @click="remove(todo.id)"
                class="rm">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'todolist',
  computed: mapState(['todos', 'msg']),
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'remove', 'reload'
    ])
  },
  mounted () {
    this.reload()
  }
}
</script>

<style scoped>
</style>