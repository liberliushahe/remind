/*
created 2017-11-22 by 1540077031
 v2.0.3 | (c) 2017 
*/
//配置通用参数
/*
根据语义可知含义
*/
var date=getDate();
var json={"moringhour":9,"moringminute":10,"moringsecond":10,"middayhour":11, "middayminute":59,"middaysecond":10,"afternoonhour":17,"afternoonminute":35,"afternoonsecond":10};

//请求参数设置值
function modifyflag(){
console.log(1);

$.ajax({
         
            url: "http://127.0.0.1:9292/attendance/modifyflag.do?username=liu.fang",
            type: "GET",
            async:false,
            dataType:"text",
            contentType : false, 
            processData: false,
            scriptCharset: "utf-8",
            success: function (data) {
            if(data=="success"){
alert(1)
            console.log("success");
            }else{
            console.log("error");
            }
            }
            
        });

}

//温馨提醒
function showRemind(){
//alert(Boolean(window.Notification)); //判断浏览器是否支持通知  
//欢迎通知参数
var options={
	         type:"image",
            dir: "ltr",  //控制方向，据说目前浏览器还不支持
            lang: "utf-8",
            icon: "images/18.png",
			image:"images/oneremind.jpg",
            body: "电脑使用一小时了，请休息一下吧",				
            sound:""
            };
//创建通知对象
var n = new Notification("桌面小助手", options); 
//显示通知
n.onshow = function () { 
 setTimeout(n.close.bind(n), 8000); 
}
n.show();
}
function showWelcome(){
//alert(Boolean(window.Notification)); //判断浏览器是否支持通知  
//欢迎通知参数
var options={
	         type:"image",
            dir: "ltr",  //控制方向，据说目前浏览器还不支持
            lang: "utf-8",
            icon: "images/18.png",
			image:"images/timg1.jpg",
            body: "你好,欢迎使用桌面小助手",				
            sound:"9284.wav"
            };
//创建通知对象
var n = new Notification("桌面小助手", options); 
//显示通知
n.onshow = function () { 
 setTimeout(n.close.bind(n), 8000); 
}
n.show();
}
//早上通知参数
function showMorning(){
	var image1=["images/m1.jpg","images/m2.jpg","images/m3.jpg","images/m4.jpg"];
var index1 = Math.floor((Math.random()*image1.length));
var options={
            dir: "ltr",  //控制方向，据说目前浏览器还不支持
            lang: "utf-8",
            icon: "images/18.png",
			image:image1[index1],
            body: "早上好，希望以最好的状态度过这一天，加油！！"
        
            };
//创建通知对象
var n = new Notification("桌面小助手", options); 
//定时关闭通知
n.onshow = function () { 
  setTimeout(n.close.bind(n), 8000); 
}	
//显示通知
n.show();

}
//中午通知参数
function showMidday(){
var image2=["images/d1.jpg","images/d2.jpg","images/d3.jpg","images/d4.jpg","images/d5.jpg","images/d6.jpg","images/d7.jpg","images/d8.jpg","images/d9.jpg","images/d10.jpg","images/d11.jpg","images/d12.jpg","images/d13.jpg","images/d14.jpg","images/d15.jpg"];
var index2 = Math.floor((Math.random()*image2.length));
var options={
            dir: "ltr",  //控制方向，据说目前浏览器还不支持
            lang: "utf-8",
            icon: "images/18.png",
			image:image2[index2],
            body: "中午了 考虑一下吃什么去呢？",
            sound:""
            };
//创建通知对象
var n = new Notification("桌面小助手", options); 
//定时关闭通知
n.onshow = function () { 
  setTimeout(n.close.bind(n), 8000); 
}
//显示通知
n.show();
}
//通知配置通知参数
function showNotification(){
var options={
            dir: "ltr",  //控制方向，据说目前浏览器还不支持
            lang: "utf-8",
            icon: "images/18.png",
			image:"images/remind.jpg",
            body: "快出来写日报啦"+date,
            sound:"9284.wav"
            };
//创建通知对象
var n = new Notification("桌面小助手", options); 

//定时关闭通知
n.onshow = function () { 
  setTimeout(n.close.bind(n), 8000); 
}
//显示通知
n.show();
n.onclick = function() {
  window.open('http://60.174.249.206:9999/in/', '_blank');
}
}
//浏览器是否支持 webkitNotifications
if(("Notification" in window)){
timing();
//isFirst();//每次打开浏览器通知
}
//定时任务
function timing(){ 
var go=setInterval(run,1000); 
} 
//具体执行方法
function run(){
var date=new Date(); 
//json字符串转对象
var obj=eval(json);  
if(date.getHours()==obj.afternoonhour&& date.getMinutes()==obj.afternoonminute && date.getSeconds()==obj.afternoonsecond){
//clearInterval(go); //终止定时任务
showNotification(); //下午通知显示
}else if(date.getHours()==obj.moringhour&& date.getMinutes()==obj.moringminute && date.getSeconds()==obj.moringsecond){
showMorning(); //早上通知显示
}else if(date.getHours()==obj.middayhour&& date.getMinutes()==obj.middayminute && date.getSeconds()==obj.middaysecond){
showMidday();  //中午通知显示
}else{

modifyflag();
}
} 
//判断是否第一次安装
function isFirst(){
	var f=true;        //第一次安装则显示cookies实现
   if(getCookie("flag")=='' && getCookie("flag")!=true){
	showWelcome();//欢迎通知显示
	document.cookie="flag="+f;
   }	
}
//获取cookies
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
  { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
  } 
  }
return ""
}
//获取当前时间格式化
function getDate(){
	var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	if (month >= 1 && month <= 9) {
	    month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
	    trDate = "0" + strDate;
	}
	if(hour>=0 && hour <=9){	    
	    hour="0"+hour;
	}
	if(minute>=0 && minute <=9){
	    minute="0"+minute;
	}
	if(second>=0 && second <=9){
	second="0"+second;
	}
	var currentdate = year +"年"+  month+"月" + strDate+"日" + hour +"时"+ minute +"分"+ second+"秒";
	return currentdate;	
}


