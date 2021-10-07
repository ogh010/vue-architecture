<template>
    <div>
        {{test}}
        <button type="button" @click="testApi()">click</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import testService from '@/service/test'
export default{
    name:'Test',
    data() {
        return {
           data:""
        }
    },
    methods: {
        testApi(){
            const reqData = this.data
            testService.test(reqData)
        }
    },
    computed:{
        ...mapState('seeroo',['test'])
    },
    mounted() {
        console.log('test페이지입니다');
    },
}

</script>

<style scoped>

</style>