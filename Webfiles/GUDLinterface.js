images=[ "file:///C:/Users/chick/Documents/GUDL website/1.jpg","file:///C:/Users/chick/Documents/GUDL website/2.jpg",
"file:///C:/Users/chick/Documents/GUDL website/3.jpg",
"file:///C:/Users/chick/Documents/GUDL website/4.jpg", "file:///C:/Users/chick/Documents/GUDL website/5.jpg",
"file:///C:/Users/chick/Documents/GUDL website/6.jpg","file:///C:/Users/chick/Documents/GUDL website/7.jpg",
"file:///C:/Users/chick/Documents/GUDL website/8.jpg","file:///C:/Users/chick/Documents/GUDL website/9.jpg",
"file:///C:/Users/chick/Documents/GUDL website/10.jpg","file:///C:/Users/chick/Documents/GUDL website/11.jpg",
"file:///C:/Users/chick/Documents/GUDL website/12.jpg","file:///C:/Users/chick/Documents/GUDL website/13.jpg",
"file:///C:/Users/chick/Documents/GUDL website/14.jpg","file:///C:/Users/chick/Documents/GUDL website/15.jpg",
"file:///C:/Users/chick/Documents/GUDL website/16.jpg","file:///C:/Users/chick/Documents/GUDL website/17.jpg",
"file:///C:/Users/chick/Documents/GUDL website/18.jpg","file:///C:/Users/chick/Documents/GUDL website/19.jpg",
"file:///C:/Users/chick/Documents/GUDL website/20.jpg","file:///C:/Users/chick/Documents/GUDL website/21.jpg",
"file:///C:/Users/chick/Documents/GUDL website/22.jpg","file:///C:/Users/chick/Documents/GUDL website/23.jpg"
];
var num = 0, move = document.getElementById("album");
window.onload=function(){
	var slide = setInterval(run, 5000);
	function run(){
			if(num >= images.length){
				num = 0;
			}
			else{
				num++;
			}
		}
	}
function next(){
	var album = document.getElementById('album');
	num++;
	if(num >=images.length){
		num=0;
	}
	album.src=images[num];
}
function prev(){
	var album = document.getElementById('album');
	num--;
	if(num < 0){
		num = images.length-1;
	}
	album.src =images[num];
	
}
slide.innerHTML += slide;