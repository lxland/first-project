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
$("img.lazy").lazyload({effect: "fadeIn"});