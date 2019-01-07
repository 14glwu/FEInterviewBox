/**
 * Created by lin on 2018/8/16.
 */
const Player = function(name) {
  this.name = name;
  playerMiddle.add(name);
};

Player.prototype.win = function() {
  playerMiddle.win(this.name);
};

Player.prototype.lose = function() {
  playerMiddle.lose(this.name);
};

const playerMiddle = (function() {
  // 将就用下这个 demo，这个函数当成中介者
  const players = [];
  const winArr = [];
  const loseArr = [];
  return {
    add(name) {
      players.push(name);
    },
    win(name) {
      winArr.push(name);
      if (winArr.length + loseArr.length === players.length) {
        this.show();
      }
    },
    lose(name) {
      loseArr.push(name);
      if (winArr.length + loseArr.length === players.length) {
        this.show();
      }
    },
    show() {
      for (const winner of winArr) {
        console.log(`${winner}挑战成功;`);
      }
      for (const loser of loseArr) {
        console.log(`${loser}挑战失败;`);
      }
    }
  };
})();

const a = new Player('A 选手');
const b = new Player('B 选手');
const c = new Player('C 选手');

a.win();
b.win();
c.lose();

// A 选手挑战成功;
// B 选手挑战成功;
// C 选手挑战失败;
