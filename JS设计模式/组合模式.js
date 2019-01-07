/**
 * Created by lin on 2018/8/16.
 */
// Demo1-宏命令
const macroCommand = function() {
  return {
    lists: [],
    add(task) {
      this.lists.push(task);
    },
    excute() {
      // ①：组合对象调用这里的 excute，
      for (let i = 0; i < this.lists.length; i++) {
        this.lists[i].excute();
      }
    }
  };
};

const command1 = macroCommand(); // 基本对象

command1.add({
  excute: () => console.log('煮咖啡') // ②：基本对象调用这里的 excute，
});

const command2 = macroCommand(); // 组合对象

command2.add({
  excute: () => console.log('打开电视')
});

command2.add({
  excute: () => console.log('打开音响')
});

const command3 = macroCommand();

command3.add({
  excute: () => console.log('打开空调')
});

command3.add({
  excute: () => console.log('打开电脑')
});

const macroComm = macroCommand();
macroComm.add(command1);
macroComm.add(command2);
macroComm.add(command3);

macroCommand.excute();

// 煮咖啡
// 打开电视
// 打开音响
// 打开空调
// 打开电脑

// Demo2-扫描文件夹
const Folder = function(folder) {
  this.folder = folder;
  this.lists = [];
};

Folder.prototype.add = function(resource) {
  this.lists.push(resource);
};

Folder.prototype.scan = function() {
  console.log('开始扫描文件夹：', this.folder);
  for (let i = 0, folder; folder = this.lists[i++];) {
    folder.scan();
  }
};

const File = function(file) {
  this.file = file;
};

File.prototype.add = function() {
  throw Error('文件下不能添加其它文件夹或文件');
};

File.prototype.scan = function() {
  console.log('开始扫描文件：', this.file);
};

const folder = new Folder('根文件夹');
const folder1 = new Folder('JS');
const folder2 = new Folder('life');

const file1 = new File('深入React技术栈.pdf');
const file2 = new File('JavaScript权威指南.pdf');
const file3 = new File('小王子.pdf');

folder1.add(file1);
folder1.add(file2);

folder2.add(file3);

folder.add(folder1);
folder.add(folder2);

folder.scan();

// 开始扫描文件夹： 根文件夹
// 开始扫描文件夹： JS
// 开始扫描文件： 深入React技术栈.pdf
// 开始扫描文件： JavaScript权威指南.pdf
// 开始扫描文件夹： life
// 开始扫描文件： 小王子.pdf
