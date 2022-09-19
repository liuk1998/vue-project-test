<template>
    <div>
        <div :class="{ nameColor: key }" v-if="open">{{ name }}</div>
        <div :class="[size]" @click="openName">{{ age }}</div>
        <div :style="font" v-show="openAdd">{{ address }}</div>
        <div v-for="(itm, idx) of list" :key="idx" >名字：{{ itm.bName }}，年龄：{{ itm.bAge }}，爱好：{{ itm.hobby }}</div>
        <div v-for="(value, key) in object" :key="value">{{ key }}:{{ value }}</div>
        <input type="text" v-model="name">
        <br>
        <input type="textarea" v-model="age">
        <br>
        <input type="checkbox" id="many" value=抖音 v-model="box">
        <label for="many">抖音</label>
        <input type="checkbox" id="many2" value=小红书 v-model="box">
        <label for="many2">小红书</label>
        <input type="checkbox" id="many3" value=淘宝 v-model="box">
        <label for="many3">淘宝</label>
        <br>
        <div>{{ box }}</div>
        <br>
        <input type="radio" id="one" value="地址" v-model="address">
        <label for="one">地址</label>
         <input type="radio" id="two" value="姓名" v-model="name">
        <label for="two">姓名</label>
         <input type="radio" id="three" value="年龄" v-model="age">
        <label for="three">年龄</label>

        <div>父组件传子组件: {{ num }}</div>
        <hr>
        <button @click="sonGiveFather">通过emit实现子传父</button>
    </div>
</template>

<script>
export default {
     // eslint-disable-next-line vue/multi-word-component-names
    name : 'Test5',
    //props: ['num'],
    props: {
        num: {
            type: Number, // 类型
            default: 200 // 默认值
        }
    },
    data() {
        return {
            name: 'lyq',
            age: '20',
            address: '辽宁省大连市',
            key: true,
            open: true,
            openAdd: true,
            size: 'size',
            font: {
                 'font-weight' : 'bolder'
            },
            list: [
                {
                    bName: 'lk',
                    bAge: '80',
                    hobby: '拉屎'
                }
            ],
            object: {
                day: '3月20日',
                dream: 'home'
            },
            box: [
                '抖音',
                '小红书',
                '淘宝'
            ]
        }

    },
    methods: {
        openName() {
            this.open = !this.open
            this.openAdd = !this.openAdd
        },
        sonGiveFather() {
            this.$emit('getSon', this.name)
        }
    }
}
</script>

<style lang="scss" scoped>
.nameColor {
    color: red;
}
.size {
    font-size: 100px;
}
</style>
