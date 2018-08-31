//使用箭头函数缩减代码
//处理输入，可以用.map，需要注意其所有参数
//此外其他迭代方法也需要掌握。
let line=readline().split(" ");
line=line.map(e=>parseInt(e));

//去重
arr=[...new Set(arr)];
//升序,排序可以用sort，默认是字典序,并且可以根据需要定制，需要深入掌握
arr.sort((a,b)=>a-b);
//迭代输出
arr.forEach(i=>console.log(i));
//求最大值，使用扩展运算符...
max=Math.max.call(...arr);
// 复制数组
arr2=[...arr1];
arr2=arr.concat();
arr2=arr.slice();

//善用解构
//变量赋值
let [a,b,c,d,e]=[1,2,3,4,5];//a=1,b=2,c=3,d=4,e=5
//交换变量值
[a,b]=[b,a];
//题外话：字符串中的字符是无法交换的
let str="ab";
[str[0],str[1]]=[str[1],str[0]];//无效，"ab"
//不过可以将字符串拆成字符数组后就可以交换了
str=str.split("");//["a","b"]
[str[0],str[1]]=[str[1],str[0]];//["b","a"]

//善用位操作符
//求数组一半长度
halfLen=a.length>>1;

// 不过需要注意右移运算符>>优先级别加号+还低，例如
console.log(3+((5-3)>>1));//2
console.log(3+~~((5-3)/2));//4

//因此在于其他操作符号想结合时候可以适当增加括号,例如求中位
mid = left + ((right - left)>>1);
mid = left + ~~((right - left)/2);
//不建议使用mid = (left + right)>>1;，因为加号操作可能造成溢出

//~~等价于Math.floor(),|0也等价于Math.floor()
halfLen=~~(a.length/2);
halfLen=(a.length/2)|0;

// 判断奇偶
evenNum&1==0;//偶数
oddNum&1==1;//奇数

//善用异或
5^5==0
5^5^6^6^7==7

//判断数是否是2的幂次方
num & num-1 == 0;

//翻转数的第K位
num ^= (1 << k);

//将第K位设为0
num &= ~(1 << k);

//将第K位设为1
num |= (1 << K);

//判断第K位是否为0
num & (1 << k) == 0;