$(function(){
	 // if (Cookies.get('user')) {
  //                  console.log(Cookies.get('user'));
  //                  // document.getElementById('login').innerText=Cookies.get('user');
  //                  document.getElementById('login').innerHTML = '<span class="x">欢迎您' + Cookies.get('user') + '</span>'
  //               } else {
  //              console.log('获取')
  //          }
	$.ajax({
		url:'wad/popular/4',
		method:'get',
		dataType:'json',
		success:function(data,status,xhr){
			console.log(data);

			for(var i=0;i<data.length;i++){
			$('#name_'+i).text(data[i].name);
			$('#alias_'+i).text(data[i].alias);
			$('#taste_'+i).text(data[i].taste);
			$('#area_'+i).text(data[i].area);
			$('#propose_'+i).text(data[i].propose);
			$('#intro_'+i).text(data[i].intro);
			$('#pic_'+i).attr('src',data[i].pic_1);
			$('#name_'+i).attr('href','booking.html?id='+data[i].id);
			// $('#pic_'+i).attr('href','booking.html?id='+data[i].id);
               
                }
	   },
	   error:function(xhr,status,data){
	   	console.log(data);
				alert('服务器错误');
	   }
		
	})


})

