/*
* @Author: Administrator
* @Date:   2017-09-17 20:14:52
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-17 21:26:15
*/
window.onload = function(){
	var img1 = document.getElementById("img1");
	var tem = 1;
	setInterval(function(){
		if(tem == 1){
			img1.setAttribute('src','img/1.jpg');
			tem = 0;
		}else{
			img1.setAttribute('src','img/2.jpg');
			tem = 1;
		}
	},3000)			
}