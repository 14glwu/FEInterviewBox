/**
 * Created by lin on 2018/8/17.
 */
// 将状态封装成不同类
const weakLight = function(light) {
    this.light = light
}

weakLight.prototype.press = function() {
    console.log('打开强光')
    this.light.setState(this.light.strongLight)
}

const strongLight = function(light) {
    this.light = light
}

strongLight.prototype.press = function() {
    console.log('关灯')
    this.light.setState(this.light.offLight)
}

const offLight = function(light) {
    this.light = light
}

offLight.prototype.press = function() {
    console.log('打开弱光')
    this.light.setState(this.light.weakLight)
}

const Light = function() {
    this.weakLight = new weakLight(this)
    this.strongLight = new strongLight(this)
    this.offLight = new offLight(this)
    this.currentState = this.offLight          // 初始状态
}

Light.prototype.init = function() {
    const btn = document.createElement('button')
    btn.innerHTML = '按钮'
    document.body.append(btn)
    const self = this
    btn.addEventListener('click', function() {
        self.currentState.press()
    })
}

Light.prototype.setState = function(state) { // 改变当前状态
    this.currentState = state
}

const light = new Light()
light.init()

// 打开弱光
// 打开强光
// 关灯


// 非面向对象实现的状态模式
// 借助于 JavaScript 的委托机制，可以像如下实现状态模式：
const obj = {
    'weakLight': {
        press: function() {
            console.log('打开强光')
            this.currentState = obj.strongLight
        }
    },
    'strongLight': {
        press: function() {
            console.log('关灯')
            this.currentState = obj.offLight
        }
    },
    'offLight': {
        press: function() {
            console.log('打开弱光')
            this.currentState = obj.weakLight
        }
    },
}

const Light = function() {
    this.currentState = obj.offLight
}

Light.prototype.init = function() {
    const btn = document.createElement('button')
    btn.innerHTML = '按钮'
    document.body.append(btn)
    const self = this
    btn.addEventListener('click', function() {
        self.currentState.press.call(self) // 通过 call 完成委托
    })
}

const light = new Light()
light.init()