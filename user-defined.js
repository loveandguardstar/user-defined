
//把DOM事件添加到节点上

function bindEvent(elem, type, selector, fn) {
    if(fn == null) {
        fn = selector;
        selector = null;
    }
    elem.addEventListener(type, function (e) {
        var target;
        //是否选择代理
        if(selector) {
            target = e.target;
            if(target.matches(selector)) {
                fn.call(target, e)
            }
        } else {
            fn(e)
        }
    })
}