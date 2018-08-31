/**
 * Created by lin on 2018/8/16.
 */
const player = function(name) {
    this.name = name
    playerMiddle.add(name)
}

player.prototype.win = function() {
    playerMiddle.win(this.name)
}

player.prototype.lose = function() {
    playerMiddle.lose(this.name)
}

const playerMiddle = (function() { // 将就用下这个 demo，这个函数当成中介者
    const players = []
    const winArr = []
    const loseArr = []
    return {
        add: function(name) {
            players.push(name)
        },
        win: function(name) {
            winArr.push(name)
            if (winArr.length + loseArr.length === players.length) {
                this.show()
            }
        },
        lose: function(name) {
            loseArr.push(name)
            if (winArr.length + loseArr.length === players.length) {
                this.show()
            }
        },
        show: function() {
            for (let winner of winArr) {
                console.log(winner + '挑战成功;')
            }
            for (let loser of loseArr) {
                console.log(loser + '挑战失败;')
            }
        },
    }
}())

const a = new player('A 选手')
const b = new player('B 选手')
const c = new player('C 选手')

a.win()
b.win()
c.lose()

// A 选手挑战成功;
// B 选手挑战成功;
// C 选手挑战失败;