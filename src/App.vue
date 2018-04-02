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
        background-color: #efefef;
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
    input[type="search"]::-webkit-search-cancel-button{
        display: none;
    }
    input,
    select,
    option{
        border: none;
        outline: none;
    }
    textarea{
        outline: none;
        border: 1px solid #eee;
        border-radius: 4px;
        vertical-align: top;
    }
    #app>div{
        margin-top: 52px;
    }
    .fr{
        float: right;
    }
    .home{
        margin-top: 0!important;
    }
    .pannel {
        background-color: #fff;
        margin-top: 5px;
        overflow: hidden;
        position: relative;
    }
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .footer button{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: white;
    }

    .circle-back {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 10;
        width: 24px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        background-color: #999;
        border-radius: 50%;
        color: #ffffff;
        font-weight: bolder;
    }

    .text-ellipsis{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
    .ad-logo{
        background-size: 100% 41px;
        background-repeat: no-repeat;
        height: 41px;
        margin-top: 5px;
    }
    .top-bar {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        background-color: #03A657;
        color: #ffffff;
        text-align: center;
        position: fixed;
        top: 0;
        z-index: 14;
    }

    .top-bar .icon-fanhui {
        position: absolute;
        left: 10px;
    }

    .top-bar .right {
        position: absolute;
        top: 0;
        right: 10px;
        font-size: 12px;
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

    .icon-more.right {
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
    .rotate_90{
        display: inline-block;
        vertical-align: middle;
        transform: rotate(90deg);
    }
</style>
