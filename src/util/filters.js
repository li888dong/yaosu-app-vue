import Vue from 'vue'

Vue.filter('defaultValue', function (value) {
    if (!value) return '';
    return value.toString()
})
