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
    button{
        border: none;
        outline: none;
    }
    .pannel {
        background-color: #fff;
        margin-top: 5px;
        overflow: hidden;
    }

    /*标题logo*/
    .item-container .title {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        height: 20px;
        padding: 10px 0;
        border-bottom: 1px solid #eeeeee;
    }

    .item-container .title .logo {
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: -2px;
        width: 100px;
        height: 30px;
    }

    .item-container .title .more {
        margin-right: 10px;
        font-size: 12px;
    }

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .top-bar {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        background-color: #03A657;
        color: #ffffff;
        text-align: center;
        position: relative;
    }

    .top-bar .icon-fanhui {
        position: absolute;
        left: 10px;
    }

    .top-bar .right {
        position: absolute;
        top: 0;
        right: 10px;
    }

    .catorage-selector {
        width: 100%;
        height: 40px;
        font-size: 14px;
        background-color: #fff;
        text-align: center;
        line-height: 40px;
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
    }

    .catorage-list {
        width: 100%;
        background-color: #fff;
        text-align: center;
        font-size: 12px;
        line-height: 40px;
        position: absolute;
        z-index: 11;
    }

    .catorage-list p {
        border-bottom: 1px solid #ccc;
        line-height: 40px;
        height: 40px;
    }

    .icon-more {
        position: absolute;
        right: 5px;
        font-size: 10px;
        font-weight: bold;
        transform: rotate(90deg);
        transition: all 0.5s ease;
    }

    .reverse {
        transform: rotate(-90deg);
    }

    .greenFont {
        color: #03A657;
    }

    .curCatorage {
        color: #03A657;
        background-color: #f1f1f1;
    }

    .tabbar-container {
        width: 100%;
        height: 30px;
        margin-top: 20px;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
    }

    .tabbar {
        font-size: 14px;
        display: inline-block;
        width: 33%;
        height: 30px;
        text-align: center;
        vertical-align: bottom;
    }

    .tabbar-selected {
        width: 33%;
        text-align: center;
        color: #05a96d;
        border-bottom: 1px solid #05a96d;
    }
</style>
