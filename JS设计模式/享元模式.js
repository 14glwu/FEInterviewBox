/**
 * Created by lin on 2018/8/16.
 */
// 方案1
const Model = function(gender, underwear) {
    this.gender = gender
    this.underwear = underwear
}

Model.prototype.takephoto = function() {
    console.log(`${this.gender}穿着${this.underwear}`)
}

for (let i = 1; i < 51; i++) {
    const maleModel = new Model('male', `第${i}款衣服`)
    maleModel.takephoto()
}

for (let i = 1; i < 51; i++) {
    const female = new Model('female', `第${i}款衣服`)
    female.takephoto()
}

// 方案2（使用享元模式）
const Model = function(gender) {
    this.gender = gender
}

Model.prototype.takephoto = function() {
    console.log(`${this.gender}穿着${this.underwear}`)
}

const maleModel = new Model('male')
const femaleModel = new Model('female')

for (let i = 1; i < 51; i++) {
    maleModel.underwear = `第${i}款衣服`
    maleModel.takephoto()
}

for (let i = 1; i < 51; i++) {
    femaleModel.underwear = `第${i}款衣服`
    femaleModel.takephoto()
}

// 对比发现：方案一创建了 100 个对象，方案二只创建了 2 个对象，在该 demo 中，gender(性别) 是内部对象，underwear(穿着) 是外部对象。
// 当然在方案二的 demo 中，还可以进一步改善：
// 一开始就通过构造函数显示地创建实例，可用工场模式将其升级成可控生成
// 在实例上手动添加 underwear 不是很优雅，可以在外部单独在写个 manager 函数
const Model = function(gender) {
    this.gender = gender
}

Model.prototype.takephoto = function() {
    console.log(`${this.gender}穿着${this.underwear}`)
}

const modelFactory = (function() { // 优化第一点
    const modelGender = {}
    return {
        createModel: function(gender) {
            if (modelGender[gender]) {
                return modelGender[gender]
            }
            return modelGender[gender] = new Model(gender)
        }
    }
}())

const modelManager = (function() {
    const modelObj = {}
    return {
        add: function(gender, i) {
            modelObj[i] = {
                underwear: `第${i}款衣服`
            }
            return modelFactory.createModel(gender)
        },
        copy: function(model, i) { // 优化第二点
            model.underwear = modelObj[i].underwear
        }
    }
}())

for (let i = 1; i < 51; i++) {
    const maleModel = modelManager.add('male', i)
    modelManager.copy(maleModel, i)
    maleModel.takephoto()
}

for (let i = 1; i < 51; i++) {
    const femaleModel = modelManager.add('female', i)
    modelManager.copy(femaleModel, i)
    femaleModel.takephoto()
}