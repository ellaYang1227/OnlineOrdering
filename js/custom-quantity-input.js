
/*custom-quantity-input 客製化數量input(可+ - 或輸入)*/

$(document).on("show.bs.modal", function () {
//按鈕(.btn-number)點擊事件
$('.btn-number').click(function(e){
    //取消元素原功能
	e.preventDefault();
    
	// fieldName 為傳回目前(.btn-number)被選元素的 data-field 屬性值
    fieldName = $(this).attr('data-field');
	// type 為傳回目前(.btn-number)被選元素的 data-type 屬性值(minus 為 - 、plus 為 + )
    type      = $(this).attr('data-type');
	
	// 變數 input 為字串 input[name=' + fieldName 的值 + 字串 ']
    var input = $("input[name='"+fieldName+"']");
	// 變數 currentVal 為 input 的值 並(parseInt)由字串(string)轉成整數數值(number)
    var currentVal = parseInt(input.val());
	
	//判斷 currentVal 不是(!) 非數值(isNaN)
    if (!isNaN(currentVal)) {
		// true 執行(是數值)
		//判斷 type 是否等於 minus(-)
        if(type == 'minus') {
            // true 執行
			//判斷(1) currentVal 是否大於 傳回被選 input 元素的 min 屬性值
            if(currentVal > input.attr('min')) {
				// true 執行 - input 的值為 currentVal 減(-) 1 且當 input 的值改變時 觸發 change 事件
                input.val(currentVal - 1).change();
            } 
			//判斷(2) input 的值轉為數值 是否等於 傳回被選 input 元素的 min 屬性值
            if(parseInt(input.val()) == input.attr('min')) {
				// true 執行 - 目前(.btn-number)被選元素 加入屬性 disabled(停用) 值 true (停用)
                $(this).attr('disabled', true);
            }
          //false 執行 - 判斷 type 是否等於 plus(+)
        } else if(type == 'plus') {
            // true 執行
			//判斷(1) currentVal 是否小於 傳回被選 input 元素的 max 屬性值
            if(currentVal < input.attr('max')) {
				// true 執行 - input 的值為 currentVal 加(+) 1 且當 input 的值改變時 觸發 change 事件
                input.val(currentVal + 1).change();
            }
			//判斷(2) input 的值轉為數值 是否等於 傳回被選 input 元素的 max 屬性值
            if(parseInt(input.val()) == input.attr('max')) {
				// true 執行 - 目前(.btn-number)被選元素 加入屬性 disabled(停用) 值 true (停用)
                $(this).attr('disabled', true);
            }

        }
	  //false 執行(不是數值) - input 的值帶入0(原 input 數值 +0)	
    } else {
        input.val(0);
    }
});
//input(.input-number)獲得焦點時發生 focusin 事件 執行函式
$('.input-number').focusin(function(){
   //目前元素(.input-number)存取該數據 設置為屬性名稱為 oldValue 屬性值為目前
   //.data 為臨時數據 一旦頁面刷新 之前存放的數據將被移除
   $(this).data('oldValue', $(this).val());
});

//input(.input-number)change事件 失焦時執行函式
$('.input-number').change(function() {
    // minValue 為目前(.input-number)元素傳回的 min 值
    minValue =  parseInt($(this).attr('min'));
	// maxValue 為目前(.input-number)元素傳回的 max 值
    maxValue =  parseInt($(this).attr('max'));
	// valueCurrent 為目前(.input-number)元素的值
    valueCurrent = parseInt($(this).val());
    // name 為目前(.input-number)元素傳回的 name
    name = $(this).attr('name');
	//判斷(1) valueCurrent 是否大於或等於 minValue
    if(valueCurrent >= minValue) {
		//true 執行 - 移除屬性 disabled(停用)
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
        //false 執行
	} else {
		//對話框 最低訂購量為x份
        alert('最低訂購量為' + minValue + '份');
		//目前(.input-number)元素 臨時數據(.data)屬性名稱 oldValue 的值
        $(this).val($(this).data('oldValue'));
    }
	//判斷(2)  valueCurrent 是否小於或等於 minValue
    if(valueCurrent <= maxValue) {
		//true 執行 - 移除屬性 disabled(停用)
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
		//對話框 最高訂購量為x份
        alert('最高訂購量為' + maxValue + '份');
		//目前(.input-number)元素 臨時數據(.data)屬性名稱 oldValue 的值
        $(this).val($(this).data('oldValue'));
    }
    
    
});
//input(.input-number)觸發 keydown(鍵盤按下的過程) 事件
$(".input-number").keydown(function (e) {
	    //判斷 是否為(1)鍵盤指令或(2)鍵盤指令或(3)鍵盤指令
        // (1)鍵盤指令(backspace, delete, tab, escape, enter and .)
		//.inArray() 在陣列中尋找指定值 並傳回它的索引值（如果没有找到，則傳回 -1）
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // (2)鍵盤指令(Ctrl+A)
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // (3)鍵盤指令(home, end, left, right)
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // true 執行 - 讓它發生，不要做任何事情
                 return;
        }
        // 判斷 是否為一個數字並停止按鍵
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			// true 執行 - 取消元素原功能
            e.preventDefault();
        }   
    });	
	
});	