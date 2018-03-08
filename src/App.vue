<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        background-color: #efedee;
        color: #858585;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    .pannel {
        background-color: #fff;
        margin-top: 5px;
        overflow: hidden;
    }
    /*标题logo*/
    .item-container .title{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        height: 20px;
        padding: 10px 0;
        border-bottom: 1px solid #eeeeee;
    }
    .item-container .title .logo{
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: -2px;
        width: 100px;
        height: 30px;
    }
    .item-container .title .more{
        margin-right: 10px;
        font-size: 12px;
    }
</style>
