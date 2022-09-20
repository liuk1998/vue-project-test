<template>
    <div>
        <div>{{ name }}</div>
        <div>{{ age }}</div>
        <div @click="sexChange">{{ sexs }}</div>   
      <div>{{ boy }}</div> 
    </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Son' ,
    props: {
        boy:{
            type:String,
            default:"老公"
        }
    },
    data() {
        return {
            name: "lk",
            age: 24,
            sexs: "男"
        }
    },
    methods:{
        sexChange() {
            this.$emit('getSex', this.sexs)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
