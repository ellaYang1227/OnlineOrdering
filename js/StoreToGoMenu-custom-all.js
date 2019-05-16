/*!
 * StoreToGoMenu custom all 店家菜單總覽-自訂 JS(全部)
 */

$(document).ready(function () {
	//店家分類選單-搜尋(click事件 展開搜尋列) 
	//點擊 #ClassMenu-search 時
	$('#ClassMenu-search').click(function (e) {
		//在 #searchToggle 新增類別 searchOpen
		$('#searchToggle').addClass('searchOpen');
	});

	//店家分類選單-搜尋(click事件 收合搜尋列) 
	//點擊 #ClassMenu-search 時
	$('#searchToggle .close').click(function (e) {
		//在 #searchToggle 移除類別 searchOpen
		$('#searchToggle').removeClass('searchOpen');
	});

});

//我的購物車(sm以上用 置底時 添加CSS)
$(document).ready(function () {
	// 變數(MenuHeight)為 #ClassMenu-all 元素高度(包含 padding 和 border)
	var MenuHeight = $('#ClassMenu-all').outerHeight();
	// 變數(MenuTop)為 #ClassMenu-all 離頂部高度
	var MenuTop = $('#ClassMenu-all').offset().top;
	var totalTop = MenuHeight + MenuTop;
	//我的購物車(滾動事件)
	$(document).scroll(function (e) {
		// 變數(MenuScrollTop)為 #ClassMenu-all 滾動時 離頂部高度
		var MenuScrollTop = $('#ClassMenu-all').offset().top;
		//判斷 MenuScrollTop 是否大於等於 totalTop
		if (MenuScrollTop >= totalTop) {
			//true 大於或等於 新增 class 名稱 stickyTop-Scrollspy
			$('#myShopping').addClass('stickyTop-Scrollspy');
		} else {
			//false 移除 class 名稱 stickyTop-Scrollspy
			$('#myShopping').removeClass('stickyTop-Scrollspy');
		}
	});
	
	//我的購物車 設定(選購列表)最大高度
	function shoppingListOverflowY(){
		// 變數(winHeight)為 螢幕可見高度
		var winHeight = $(window).height();
		// 變數(myShoppingPT)為 #myShopping 的 padding-top 值
		var myShoppingPT = $('#myShopping').css('padding-top');
		// 變數(myShoppingPTSplit)為 從 px 分割字串
		var myShoppingPTSplit = myShoppingPT.split('px');
		// 變數(myShoppingPT)為 #myShopping 的 padding-bottom 值
		var myShoppingPB = $('#myShopping').css('padding-bottom');
		// 變數(myShoppingPBSplit)為 從 px 分割字串
		var myShoppingPBSplit = myShoppingPB.split('px');
		// 變數(myShoppingPY)為 分割後的字串轉數值
		var myShoppingPY = parseInt(myShoppingPTSplit[0]) + parseInt(myShoppingPBSplit[0]);
		// 變數(h2Height)為 #myShopping h2 元素高度(包含 padding 和 border)
		var h2Height = $('#myShopping h2').outerHeight();
		// 變數(shoppingAmountHeight)為 .shoppingAmount 元素高度(包含 padding 和 border)
		var shoppingAmountHeight = $('.shoppingAmount').outerHeight();
		// 變數(inputHeight)為 #myShopping input 元素高度(包含 padding 和 border、 設 true 包含 margin)
		var inputHeight = $('#myShopping input').outerHeight(true);
		// 變數(notShoppingListHeight)為 #myShopping 不包含已選購內容列表 但包含 #myShopping 的 垂直方向 padding
		var notShoppingListHeight = h2Height + shoppingAmountHeight + inputHeight + myShoppingPY;
		// 變數(MaxShoppingListHeight)
		var MaxShoppingListHeight = winHeight - MenuHeight - notShoppingListHeight;
		// 在 .shoppingList 新增 CSS 樣式
		$('.shoppingList').css('max-height',MaxShoppingListHeight);
	    
	};
	shoppingListOverflowY();
});

//我的購物車(xs用 置底時 添加CSS)
$(document).ready(function () {

	// 變數(winHeight)為 螢幕可見高度
	var winHeight = $(window).height();
	// 變數(allHeight)為 網頁實際高度
	var allHeight = $(document).height();
	// 變數(visibleHeight)為 螢幕不可見的高度
	var visibleHeight = allHeight - winHeight;
	// 變數(footerHeight)為 #footer 元素高度(包含 padding 和 border)
	var footerHeight = $('#footer').outerHeight();
	// 變數(shoppingXsHeight)為 #myShopping-xs 元素高度(包含 padding 和 border)
	var shoppingXsHeight = $('#myShopping-xs').outerHeight();
	// 變數(totalHeight)為 #footer + #myShopping-xs 元素高度
	var RemainingHeight = footerHeight - shoppingXsHeight;
    
	
	//我的購物車(滾動事件)
	$(document).scroll(function (e) {
		// 變數(windowTop)為瀏覽器離窗口最頂端的距離
		var winScrollTop = $(window).scrollTop();
		var allScrollHeight = $(document).height();
		// 變數(productTop)為 .productClass-single 之 paddingTop 的值
		var productTop = $('.productClass-single').css('paddingTop');
		// 變數(productInt)為 productTop 的值 由字串轉成數值 
		var productInt = parseInt(productTop);
		// 變數(offsetTop)為 螢幕不可見的高度(visibleHeight) + emainingHeight (#footer + #myShopping-xs 元素高度 相差)
		var offsetTop = visibleHeight - RemainingHeight + productInt;
		// 變數(headerHeight)為 #header 元素高度(包含 padding 和 border)
		var headerHeight = $('#header').outerHeight();
		
		// 判斷 瀏覽器離窗口最頂端的距離(winScrollTop) 大於等於 headerHeight
		if(winScrollTop >= headerHeight){
			// 判斷 瀏覽器離窗口最頂端的距離(winScrollTop) 大於等於 offsetTop
			if ( winScrollTop >= offsetTop) {
				//true 大於或等於 隱藏
				 
				$('#myShopping-xs').hide();
			} else {
				//false 顯示 
				$('#myShopping-xs').show();
			}
		
		}else{
			  $('#myShopping-xs').hide();
		  }
		
	});

});

