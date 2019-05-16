/*!
 *  滾動監聽 (Scrollspy) - 分類選單 & 產品項目 
 */
 
$(document).ready(function () {
	// scroll滾動事件)-scrollTop 滾動條垂直位置
	$(document).scroll(function (e) {
		// 變數(windowWidth)為螢幕寬度
		var windowWidth = $(window).width();
		// 變數(scrollY)為卷軸現在Y值(高度)
		var scrollY = $(this).scrollTop();
		
		// 當視窗寬度小於 768px 時執行
		if ( windowWidth < 768 )
		{
			// if scrollTop 滾動條垂直位置小於 400
			if( scrollY < 400)
		  {
		    //在 #ClassMenu-swiper ul li(第一個 first) 新增類別 active
			$("#ClassMenu-swiper ul li:first").addClass("active");
			//在 .productClass-single(第一個 first) 移除類別 Scrollspy-top
			$(".productClass-single:first").removeClass("Scrollspy-top");
			$("#ClassMenu-all").removeClass("box-shadow");
		  }
		  else
		  {
		    //反之 在 .productClass-single(第一個 first) 移除類別 Scrollspy-top
			$(".productClass-single:first").addClass("Scrollspy-top");
			$("#ClassMenu-all").addClass("box-shadow");  
		  }
		}// 當視窗寬度 大於 767px 且 小於 992px (768~991px) 時執行
		else if( windowWidth >= 768 && windowWidth <= 991 )
		{
		  // if scrollTop 滾動條垂直位置小於 500
		  if( scrollY < 500)
		  {
		    //在 #ClassMenu-swiper ul li(第一個 first) 新增類別 active
			$("#ClassMenu-swiper ul li:first").addClass("active");
			//在 .productClass-single(第一個 first) 移除類別 Scrollspy-top
			$(".productClass-single:first").removeClass("Scrollspy-top");
			$("#ClassMenu-all").removeClass("box-shadow");
		  }
		  else
		  {
			//反之 在 .productClass-single(第一個 first) 移除類別 Scrollspy-top
			$(".productClass-single:first").addClass("Scrollspy-top"); 
			$("#ClassMenu-all").addClass("box-shadow");
		  }
		}// 當視窗寬度 大於 991px 且 小於 1200px (992~1199px) 時執行
		else if( windowWidth >= 992 && windowWidth <= 1199 )
		{
		  // if scrollTop 滾動條垂直位置小於 530
		  if( scrollY < 530)
		  {
		    //在 #ClassMenu-swiper ul li(第一個 first) 新增類別 active
			$("#ClassMenu-swiper ul li:first").addClass("active");
			//在 .productClass-single(第一個 first) 移除類別 Scrollspy-top
			$(".productClass-single:first").removeClass("Scrollspy-top");
			$("#ClassMenu-all").removeClass("box-shadow");
		  }
		  else
		  {
			//反之 在 .productClass-single(第一個 first) 移除類別 Scrollspy-top
			$(".productClass-single:first").addClass("Scrollspy-top"); 
			$("#ClassMenu-all").addClass("box-shadow");
		  }
		}// 視窗寬度不在 0~1199px (即1200px 以上) 時執行
		else
		{
			// if scrollTop 滾動條垂直位置小於 700
		  if($(document).scrollTop() < 700)
		  {
		    //在 #ClassMenu-swiper ul li(第一個 first) 新增類別 active
			$("#ClassMenu-swiper ul li:first").addClass("active");
			//在 .productClass-single(第一個 first) 移除類別 Scrollspy-top
			$(".productClass-single:first").removeClass("Scrollspy-top");
			$("#ClassMenu-all").removeClass("box-shadow");
		  }
		  else
		  {
			//反之 在 .productClass-single(第一個 first) 移除類別 Scrollspy-top
			$(".productClass-single:first").addClass("Scrollspy-top");
			$("#ClassMenu-all").addClass("box-shadow");
		  }
		}
		
    });
	
});
