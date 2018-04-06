var dd=new Date;

var res="";
var y=dd.getFullYear()
var m=dd.getMonth()+1
var d=dd.getDate()
var h=dd.getHours()
var i=dd.getMinutes()
var s=dd.getSeconds()
res="今天是:"+y+"年"+m+"月"+d+"日"+"————"+h+":"+i+":"+s

console.log(res)

// document.getElementById("time").innerHTML=res;
