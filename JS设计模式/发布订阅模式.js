/**
 * Created by lin on 2018/8/13.
 */
/*
 *发布-订阅模式（观察者模式）
 */
function pubsub() {
    var _pubsub = {},//全局对象，即发布订阅对象
        _topics = {}, // 回调函数存放的数组
        _subUid = 0;

    // 发布方法
    _pubsub.publish = function (topic) {
        if (!_topics[topic]) {
            return false;
        }
        var args = [].slice.call(arguments, 1);
        setTimeout(function () {
            var subscribers = _topics[topic];
            for (var i = 0, j = subscribers.length; i < j; i++) {
                subscribers[i].callback.apply(null, args);
            }
        }, 0);
        return true;
    };
    //订阅方法
    _pubsub.subscribe = function (topic, callback) {
        if (!_topics[topic]) {
            _topics[topic] = [];
        }
        var token = (++_subUid).toString();
        _topics[topic].push({
            token: token,
            callback: callback
        });
        return token;
    };
    //退订方法
    _pubsub.unsubscribe = function (token) {
        for (var m in _topics) {
            if (_topics[m]) {
                for (var i = 0, j = _topics[m].length; i < j; i++) {
                    if (_topics[m][i].token === token) {
                        _topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return false;
    };

    return {
        subscribe: _pubsub.subscribe,
        publish: _pubsub.publish,
        unsubscribe: _pubsub.unsubscribe
    }
}