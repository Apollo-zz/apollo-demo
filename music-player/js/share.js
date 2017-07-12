
var oriImg = 'images/share.jpg';

var strUrl = window.location.href;
var arrUrl = strUrl.split("/");
var strPage = arrUrl[arrUrl.length-1];
var strPageLength = strPage.length;
var newstr = strUrl.substring(0,strUrl.length-strPageLength);
var imgUrl = newstr + oriImg;
console.log("分享图片地址:" +imgUrl);
// var imgUrl = location.origin +''+ oriImg;
var lineLink = location.href;
var shareTitle = '致那时的自己';
var desc = '我们还是那时勇敢的自己,也是现在纯真温热的你';
var appid = '';
function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
        "appid": appid,
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": lineLink,
        "desc": desc,
        "title": shareTitle
    }, function(res) {

    })
}
function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline',{
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": lineLink,
        "title": shareTitle,
        "desc": shareTitle
    }, function(res) {

    });
}
function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
        "content": shareTitle,
        "url": lineLink
    }, function(res) {

    });
}

// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
if (typeof WeixinJSBridge == 'object') {
    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        shareFriend();
    });
    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv) {
        shareTimeline();
    });
    // 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function(argv) {
        shareWeibo();
    });
} else {
    // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            shareFriend();
        });
        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function(argv) {
            shareTimeline();
        });
        // 分享到微博
        WeixinJSBridge.on('menu:share:weibo', function(argv) {
            shareWeibo();
        });
    }, false);
}