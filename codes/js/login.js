$(function() {
			
			//昵称
			$(".box_1 input").focus(
				function() {
					$("#nick_infor").attr("class", "tip").html("请输入昵称");
				}
			);
			$(".box_1 input").blur(
				function() {
					//alert($(this).val());
					if($(this).val() == ""){						
						$("#nick_infor").attr("class", "error").html("昵称不能为空");
					}
					if($(this).val() != ""){						
						$("#nick_infor").attr("class", "ok").html("");
					}
					
				}
			);
			
			//密码
			$(".box_2 input").focus(
				function() {
					$("#pwd_tips").css("display", "block")
				}
			);
			$(".box_2 input").keyup(
				function() {
					//alert("sdf");
					var value = $(this).val();
					if(/[^\s]/g.test(value)){
						$("#pwd_tip2").attr("class","yes");
					}
					if(/\s/g.test(value)){
						$("#pwd_tip2").attr("class","no");
					}
					if(value == ""){
						$("#pwd_tip2").attr("class","default");
					}
					
					if(/^.{6,16}$/.test(value)){
						$("#pwd_tip1").attr("class","yes");
					}else if(value.length == 0){
						$("#pwd_tip1").attr("class","default");
					}else{
						$("#pwd_tip1").attr("class","no");
					}
					if(/^\d{1,8}$/.test(value)){
						$("#pwd_tip3").attr("class","no");
					}else if(value.length == 0){
						$("#pwd_tip3").attr("class","default");
					}else{
						$("#pwd_tip3").attr("class","yes");
					}
				}
			);
			
			//确认密码
			$(".box_3 input").focus(
				function() {
					if($(this).val() == ""){						
						$("#password_again_infor").attr("class", "tip").html("请再次输入密码");
				}				
			});
			$(".box_3 input").blur(
				function() {
					if($(this).val() == ""){						
						$("#password_again_infor").attr("class", "error").html("请再次输入密码");
				}					
			});
			$(".box_3 input").keyup(
				function() {
					var str1=$(".box_2 input").val()
					var str2=$(this).val()
					
					if(str1.indexOf(str2) != 0 ){						
						$("#password_again_infor").attr("class", "error").html("密码不一致");
				}else if(str1.indexOf(str2) == 0){
					//alert("fsdf");
					$("#password_again_infor").attr("class", "default").html("请再次输入密码");
				}
			});
			$(".box_3 input").blur(function(){
				if($(this).val() == $(".box_2 input").val()){
					$("#password_again_infor").attr("class", "yes").html("");
				}
			})
			
			$(".box_4 a").click(function(){
				$(this).attr("class", "checked").siblings().attr("class", "");
			})
			
			
			//电话号码
			$(".box_7 input").focus(function(){
				$(".box_7 .phone_del").css("display", "block");
			});
			$(".box_7 input").blur(function(){
				if(/^[1]\d{10}$/.test($(this).val())){
					$("#phone_info").attr("class", "yes").html("");
				}else{
					$("#phone_info").attr("class", "error").html("请输入有效的手机号码");
				}
				//$(".box_7 .phone_del").css("display", "none");
			});
			$(".box_7 .phone_del").click(function(){
				$(".box_7 input").val("");
			});
			
			$("#verimatip").click(function(){
				$(this).html("验证码已发送，请注意查收");
			})
			
			//条款显示与隐藏
			var i = 0;
			var j = 2;
			$("#x_switcher").click(function() {

				if(i % j == 0) {
					$("#x_box p").css("display", "block");
				}
				if(i % j == 1) {
					$("#x_box p").css("display", "none");
				}
				i++;
			});
			
			
			//验证码隐藏
			$(".box_7 input").focus(
				function() {
					$("#sms_box").css("display", "block")
				}
			);
			
			//海外注册号码
			$(".box_8 a").click(
				function() {
					$(".sea_phone").css("display", "block")
				}
			);
			

		});







