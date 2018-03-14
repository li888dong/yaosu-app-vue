// 广告条幅
import $ from 'jquery'
adversting = {
    urlList: [],
    init: function (data) {
        this.urlList.length = 0;
        data.map(i => {
            this.urlList.push('http://image.yaosuce.com' + i.picture)
        });
        this.rendererData();
    },
    rendererData: function () {
        var $adLogoList = $('.ad-logo');
        for (var i = 0; i < this.urlList.length; i++) {
            $($adLogoList[i])
                .css('backgroundImage', 'url(' + this.urlList[i] + ')')
        }
    }
};
export default adversting

