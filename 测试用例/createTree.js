/**
 * Created by lin on 2018/8/25.
 */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Print(pRoot)
{
    let res = [];
    if(pRoot == null){
        return res;
    }
    let stack1 = new Array();//栈1
    let stack2 = new Array();//栈2
    let cur = 0;//当前栈
    let next = 1;//另个栈
    stack1.push(pRoot);
    let line = [];//保存每一行打印的内容
    while(stack1.length || stack2.length){
        let pNode = stack1[stack1.length-1];
        stack1.pop();
        line.push(pNode.val);
        if(!cur){//如果当前栈是栈1，那么进去是从左至右的，出来的就是从右至左。
            if(pNode.left != null){
                stack2.push(pNode.left);
            }
            if(pNode.right != null){
                stack2.push(pNode.right);
            }
        } else {//如果当前栈是栈2，那么进去是从右至左的，出来的就是从左至右。
            if(pNode.right != null){
                stack2.push(pNode.right);
            }
            if(pNode.left != null){
                stack2.push(pNode.left);
            }
        }
        if(stack2.length == 0){
            res.push(line);
            line = [];
            //栈切换
            cur = !cur;
            next =!next;
            let tmp = stack1;
            stack2 = tmp;
            stack1 = stack2;
        }
    }
    return res;
}

let v1 = new TreeNode(1);
let v2 = new TreeNode(2);
let v3 = new TreeNode(3);
let v4 = new TreeNode(4);
let v5 = new TreeNode(5);
let v6 = new TreeNode(6);
let v7 = new TreeNode(7);
v1.left = v2;
v1.right = v3;
v2.left = v4;
v2.right = v5;
v3.left = v6;
v3.right = v7;
console.log(v1);

