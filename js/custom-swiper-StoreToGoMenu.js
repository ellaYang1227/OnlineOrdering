/*!
/* Custom Swiper(自訂 可觸屏滑動)
/* 店家團購菜單總覽
 */

 $(document).ready(function () {
      //	ClassMenu Swiper(店家團購菜單總覽-店家分類選單)
	  var ClassMenuSwiper = new Swiper('#ClassMenu-swiper', {
			freeMode: true,// true為free模式，slide會根據慣性滑動且不會貼合
			
			//slider容器顯示slides數量-'auto'自動根據slides寬度設定顯示數量
			//loop模式下，如為'auto'，需多設置参数：loopedSlides
			slidesPerView: 'auto', 
			freeModeSticky: true,//以啟用快照以在自由模式下滑動位置
			resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
			
			//自動播放
			autoplay: {
			  delay: 5000,
			},
	   });
		  	  
});



