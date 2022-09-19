<template>
  <div>
    <!-- 通过props实现父传子 -->
    <Test5 :num="value" @getSon="getValue"></Test5>
    <hr>
    <div>{{ nameVal }}</div>
    <!-- 通过ref实现父传子 -->
    <!-- <Test ref="testArea"></Test>
    <button @click="changeTestName('加油!')">通过ref实现父组件传子组件</button> -->
  </div>
</template>

<script>
import Test5 from '@/views/test/test5-8.vue'
// import Test from '@/views/test/test5-8.vue'

export default {
  name: 'ComponentsView',
  components: {
    Test5,
    // Test
  },
  data() {
    return {
      value: 10000,
      nameVal: ''
    }
  },
  methods: {
    changeTestName(value) {
      this.$refs.testArea.name = value
    },
    getValue(name) {
      console.log('父组件得到子组件传过来的值啦', name)
      this.nameVal = name
    }
  }
}
</script>

<style lang="scss" scoped>

</style>