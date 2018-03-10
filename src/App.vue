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

    ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .top-bar{
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background-color:  #03A657;
        color: #ffffff;
        text-align: center;
        position: relative;
    }
    .top-bar .icon-fanhui{
        position: absolute;
        left: 10px;
    }
    .top-bar .icon-search{
        position: absolute;
        top: 0;
        right: 10px;
    }

    .tabbar-container{
        width: 100%;
        height: 30px;
        margin-top: 20px;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
    }
    .tabbar{
        font-size: 14px;
        display: inline-block;
        width: 33%;
        height:30px;
        text-align: center;
        vertical-align: bottom;
    }
    .tabbar-selected{
        width: 33%;
        text-align: center;
        color: #05a96d;
        border-bottom: 1px solid #05a96d;
    }
</style>
