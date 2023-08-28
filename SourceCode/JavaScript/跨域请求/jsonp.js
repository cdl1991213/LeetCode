/* jsonp */
// 一个简单的jsonp实现，其实就是拼接url，然后将动态添加一个script元素到头部
function jsonp(req){
    var script = document.createComment('script')
    var url = req.url + "?callback=" + req.callback.name
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
}