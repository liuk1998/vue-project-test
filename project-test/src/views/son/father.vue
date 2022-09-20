<template>
    <div>
        <div>
            -----父组件-----
        </div>
        <div>{{ name }}</div>
        <div>{{ age }}</div>
        <div >{{ sex }}</div>
        <div>----子组件-----</div>
    <Son :boy='hus'></Son> 
    <div>---------------------</div>
    <Son ref="date" @getSex="changeSex"></Son>
    <button @click="changeText">点击传值</button>
    </div>
</template>

<script>
import Son from '@/views/son/son.vue'

export default {
// eslint-disable-next-line vue/multi-word-component-names
    name: 'Father' ,
    components: {
    Son,
  },
    data() {
        return{
            name: "lyq",
            age: 20,
            sex: "女",
            hus:"猪猪小宝"
        }
    },
    methods:{
        changeText(){
            this.$refs.date.name='刘可'
        },
        changeSex(sexs){
            this.sex=sexs
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

