<template>
    <h1>{{msg}}}</h1>
</template>
<style></style>
<script>
    export default {
        //组件中的 data，必须时 function
        data() {
            return {
                msg: "组件中的数据"
            }
        },
        //组件中的方法
        methods: {
            show() {
                console.log("调用了Vue组件文件的show()")
            }
        }
    }
</script>
