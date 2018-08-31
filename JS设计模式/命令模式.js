/**
 * Created by lin on 2018/8/16.
 */
const setCommand = function(button, command) {
    button.onClick = function() {
        command.excute()
    }
}

// --------------------  上面的界面逻辑由A完成，下面的由B完成

const menu = {
    updateMenu: function() {
        console.log('更新菜单')
    },
}

const UpdateCommand = function(receive) {
    return {
        excute: receive.updateMenu,
    }
}

const updateCommand = UpdateCommand(menu) // 创建命令

const button1 = document.getElementById('button1')
setCommand(button1, updateCommand)