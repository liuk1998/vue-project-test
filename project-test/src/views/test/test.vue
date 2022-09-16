<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <div @click="fix">{{ name }}</div>
      <a :href="link" target="_blank">链接</a>
      <div>{{ test1 }}</div>
      <div>{{test2}}</div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Test',
    computed: {
        test1() {
            return this.name
        }
    },
    watch: {
        test1() {
            this.test2 = '刘可是猪'
        }
    },
    data() {
        return {
            name: 'lyq',
            link: 'https://www.taobao.com/',
            test2: '刘可大傻逼'
        }
    },
    methods: {
        fix() {
            this.name = 'lk'
        }

    }
}
</script>


<style lang='scss' scoped>


</style>
