$(function(){
	// 文件上传限制
	$('#files').change(function(){
		var _t = $(this);
		var fileName = _t.val();
		var fileSize = document.getElementById("files").files;

		// 判断文件格式
		if( !/.(jpg|jpeg|png|JPG)$/.test(fileName) ){
			alert("图片类型必须是jpeg,jpg,png中的一种");
		} else if( fileSize[0].size > 1024*1024 ){
			alert('请上传小于1M的照片');
		}

		
	})


	// 表单验证
	$('#commentForm').validate({
		rules:{
			
		},
		messages:{
			
		}
	})

	

})

// 图片懒加载
// $("img.lazy").lazyload({effect: "fadeIn"});

$("[data-toggle='tooltip']").tooltip();

// 瀑布流
$('#lightBoxMain').waterfall({
    itemClass: "#lightBoxMain li",
    minColCount: 2,
    spacingHeight: 10,
    resizeable: true,
    ajaxCallback: function(success, end) {
        var data = {"data": [
            { "original": "1-1.jpg" }, { "original": "2-3.jpg" }, { "original": "2-4.jpg" }, { "original": "2-5.jpg" }, { "original": "2-6.jpg" }
        ]};
        var str = "";
        var templ = '<li style="opacity:0;filter:alpha(opacity=0);"><img class="lazy" src="static/images/{{original}}" alt="" /><div class="cover-stat"><i class="fa fa-eye"></i><span class="pr10"> &nbsp;10000</span><div class="cover-yh"><a href="#" data-toggle="tooltip" data-placement="top" title="jack"><i class="fa fa-user-secret"></i></a></div></div></li>';

        for(var i = 0; i < data.data.length; i++) {
            str += templ.replace("{{original}}", data.data[i].original);
        }
        $(str).appendTo($('#lightBoxMain'));
        $("[data-toggle='tooltip']").tooltip();
        
        success();
	    end();
    }
});