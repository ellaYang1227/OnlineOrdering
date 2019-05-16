/*!
/* Shared Custom Swiper(共用 自訂 可觸屏滑動)
/* 主選單、banner
 */

 $(document).ready(function () {
	  
	  // MainMenu Swiper(主選單)
	  var MainMenuSwiper = new Swiper('#MainMenu', {
			freeMode: true,// true為free模式，slide會根據慣性滑動且不會貼合
			
			//slider容器顯示slides數量-'auto'自動根據slides寬度設定顯示數量
			//loop模式下，如為'auto'，需多設置参数：loopedSlides
			slidesPerView: 'auto', 
			freeModeSticky: true,//以啟用快照以在自由模式下滑動位置
			resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
		  });
	  
	  // Banner Swiper(banner)
	  var BannerSwiper = new Swiper('#banner-swiper', {
			centeredSlides: true, //活動幻燈片將居中
			resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
			watchOverflow: true,//只有1個slide，swiper無效且隱藏導航(圓點分頁、左右導航)
			
			//自動播放
			autoplay: {
			  delay: 5000,
			  disableOnInteraction: false,
			},
			
			// 圓點分頁
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			},
			//左右導航 arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
	  });
		  
});
