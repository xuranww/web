//首页js样式
window.onload = function(){
				//获取按钮
				var prev = document.getElementById("prev");
				var next = document.getElementById("next");
				
				//切换图片，就是要修改img.src的属性
				
				//获取img标签
				var img = document.getElementsByTagName("img")[0];
				
				//创建数组保存图片路径
				var imgArr = ["img1/1.jpg","img1/2.jpg","img1/3.jpg","img1/4.jpg","img1/5.jpg","img1/6.jpg","img1/7.jpg","img1/8.jpg","img1/9.jpg","img1/10.jpg"]
				
				//创建一个变量，来保存当前显示图片的索引
				var index = 0;
				
				/*
				 *开启一个定时器，来自动切换图片
				 */
				setInterval(function(){
					
					//使索引自增
					index++;
					//方法一：
//					if(index>=imgArr.length){
//						index=0;
//					}
					//方法二：
					index = index % imgArr.length;

					img.src = imgArr[index];
				},2000)
				
				prev.onclick = function(){
					
					index--;
					if(index<0){
						index=imgArr.length-1;
					}
					
					img.src = imgArr[index];
					
				}
				
				next.onclick = function(){
					
					index++;
					if(index>imgArr.length-1){
						index=0;
					}
					
					img.src = imgArr[index];
				};
			}

//弹框
		function tankuang(id) {
			return document.getElementById(id);
		}

		function divshow() {
			var d5 = tankuang("d5");
			d5.style.display = "block";
		}

		function divclose() {
			d5.style.display = "none";
		}

		function divshow1() {
			var d77 = tankuang("d77");
			var videofile = tankuang("videofile")
			d77.style.display = "block";
			videofile.play();

		}

		function divclose1() {
			d77.style.display = "none";
			videofile.pause();
		}
		

