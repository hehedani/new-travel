$(function () {
  $('#register').on('click', function () {
     if($('#password2').val()!=$('#password').val()||$('#password2').val()=='') {
      layer.msg('密码不一致')
      return
     }
    $.ajax({
      url: 'register',
      method: 'post',
      data: {
        account: $('#account').val(),
        password: $('#password').val()
      },
      dataType: 'json',
      success: function (data, status, xhr) {
        console.log(data);
        if(data.message=='OK'){
          window.location.href='login.html';

        } else {
          if ('DUPLICATED_ACCOUNT' == data.error) {
            alert('此用户已被注册');
          }
        }
      },
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  });
})