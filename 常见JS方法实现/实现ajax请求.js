//实现ajax请求。
function createXHR(){
    if(window.ActiveXObject){
        return new ActiveXObject("Microsoft.XMLHTTP")
    }else{
        return new XMLHttpRequest();
    }
}
var xhr=createXHR();
xhr.onreadystatechange=function () {
    if(xhr.readyState==4){
        if(xhr.status>=200&&xhr.status<300||xhr.status==304){
            alert(xhr.responseText);
        }else{
            alert("Request was unsuccessful"+xhr.status);
        }
    }
}
let url="www.baidu.com";
xhr.open("POST",url,true);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
xhr.send("parm="+encodeURI(encodeURIComponent("你好")));


