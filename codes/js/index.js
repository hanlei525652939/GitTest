$().extend("size", function(){
			return this.elements.length;
		})
		
		$(function(){
			var aBtn = $(".new_banner").find(".new_banner_list").find("ul").find("li");
			var oUl = $(".new_banner").find(".a").find("li");
			var aLi = oUl.find("li");

			var iNow = 0; //记录当前被选中的按钮
			var timer = 0; //记录定时器
			aBtn.hover(function(){
				aBtn.eq($(this).index()).find("a").css("color","yellow")
				iNow = $(this).index();
				tab();
			},function(){
				aBtn.eq($(this).index()).find("a").css("color","white")
			})

			timer = setInterval(timerInner, 2000);

			function timerInner(){
				iNow++;
				tab();
			}
			$(".back").click(function(){
				iNow++;
				tab();
			})
			$(".front").click(function(){
				if(iNow==0){
					iNow = 3;
				}else{iNow--;}
				tab();
			})
			$(".new_banner").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})



			function tab(){
				aBtn.attr("class", "");
				aBtn.eq(iNow).attr("class", "active");
				if(iNow == 4){

					aBtn.eq(0).attr("class", "active");
					iNow=0;
					//$(".new_banner .a").css("top","0")
				}
				
			
				$(".new_banner .a").animate({top: -245 * iNow}, 500,function(){
					
					if(iNow == aLi.size() - 1){
						iNow = 0;
						oUl.css("top", 0);
					}
				})
			}
//腾讯游戏导航栏的显示于隐藏
$(".top .game").hover(function(){$(".top .game .box").css("display", "block")},function(){$(".top .game .box").css("display", "none")});
	$(".top .game .box").hover(function(){$(this).css("display", "block")},function(){$(this).css("display", "none")});

//导航的划入划出			
			$(".title").find("li").hover(function(){
			$(".title").find("li").attr("class","")
			$(".title").find("li").eq($(this).index()).attr("class","focus")},function(){
			});
			var ajaxLi = $(".title li");
			ajaxLi.eq(0).mouseenter(function(){
				ajaxProduct($(".product_list"),0,"../../codes/json/recommended.json");
			});
			ajaxLi.eq(1).mouseenter(function(){
				ajaxProduct($(".product_list"),0,"../../codes/json/new.json");
			});
			ajaxLi.eq(2).mouseenter(function(){
				ajaxProduct($(".product_list"),0,"../../codes/json/sale.json");
			});			
			
//二维码显示与隐藏
		$(".top").find(".top_link").find(".mobile").hover(function(){
		$("#phone").css("display","block")},
		function(){$("#phone").css("display","none")
	});	
//搜索框
        $(".header_search").find(".txt_search").hover(function(){
		$(this).css("color","black")},
		function(){$(this).css("color","#AAA8A8")
	});	
//分类栏的显示于隐藏
        $(".menu_box1").hover(function(){
        	$("#sidebar").css("display","block")},
        	function(){$("#sidebar").css("display","none")
        });
        $(".sidelist").hover(function(){
			$(".i-list").eq($(this).index()).css("display","block")},
			function(){$(".i-list").eq($(this).index()).css("display","none")
		});
		})

//ajax
//腾讯游戏的显示于隐藏的ajax
function ajaxGame(obj, eq, path){
	$.ajax({
		type: "get",
		url: path,
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){								
				html += "<a class='lnk spr' target='_blank' href='" + 
				data[i].href + "'>" + 
				data[i].name + "</a>"								
			}
			obj.eq(eq).html(html);
		}
	});
}
//产品的ajax
function ajaxProduct(obj, eq, path){
	$.ajax({
		type: "get",
		url: path,
		success: function(data){
			//alert(data);
			var html = "";
			for(var i = 0; i < data.length; i++){
				html += "<dl><dt><a href = 'http://10.9.160.131/codes/html/details.html'><img src = '" + 
				data[i].img + "'/></a></dt><dd><span></span><a href = 'http://10.9.160.131/codes/html/details.html'><strong>" + 
				data[i].name + "</strong></a><div class='bx_list_t1'>Q币价：<span class='t2'>&nbsp;&nbsp;&nbsp;" + 
				data[i].Qb + "Q币</div><div class='bx_list_t1'>财付通价：&nbsp;&nbsp;<span class='t2'>￥" + 
				data[i].many + "</span><a href='http://10.9.160.131/codes/html/details.html' class = 'buy' title='立即购买'>立即购买</a></dl>"
			}
			obj.eq(eq).html(html);

			//产品的划入划出
	$(".product_list dl").hover(function(){
	$(".product_list dl").eq($(this).index()).css("background","red").find(".buy").css("color","black").css("background","#F1C003"),$(".product_list dl").eq($(this).index()).find("strong").css("color","white"),$(".product_list dl").eq($(this).index()).find(".bx_list_t1").css("color","white"),$(".product_list dl").eq($(this).index()).find(".t2").css("color","#F1C003")},
	function(){$("dl").css("background","white").find(".buy").css("color","white").css("background","red"),$(".product_list dl").eq($(this).index()).find("strong").css("color","black"),$(".product_list dl").eq($(this).index()).find(".bx_list_t1").css("color","black"),$(".product_list dl").eq($(this).index()).find(".t2").css("color","red")
});
	$(".box_list dl").hover(function(){
	$(".box_list dl").eq($(this).index()).css("background","red").find(".buy").css("color","black").css("background","#F1C003"),$(".box_list dl").eq($(this).index()).find("strong").css("color","white"),$(".box_list dl").eq($(this).index()).find(".bx_list_t1").css("color","white"),$(".box_list dl").eq($(this).index()).find(".t2").css("color","#F1C003")},
	function(){$("dl").css("background","white").find(".buy").css("color","white").css("background","red"),$(".pop dl").eq($(this).index()).find("strong").css("color","black"),$(".box_list dl").eq($(this).index()).find(".bx_list_t1").css("color","black"),$(".box_list dl").eq($(this).index()).find(".t2").css("color","red")
});
		}
	});
}

//热门推荐的ajax
function ajaxHot(obj, eq, path){
	$.ajax({
		type: "get",
		url: path,

		success: function(data){
			//alert(data);
			var html = "";
			for(var i = 0; i < data.length; i++){
				html += "<div class = 'bx_top_big'><dl><dt><a class='click_stream' href='/lol/item/606.shtml?ADTAG=innercop.lol.SY.ranking' target='_blank'><img src = '" + 
				data[i].img + "'/></a></dt><dd><span class='icon " + 
				data[i].class + "'>" +
				data[i].num + "</span><strong><a href='/lol/item/606.shtml?ADTAG=innercop.lol.SY.ranking' target='_blank'>" + 
				data[i].name + "</a></strong><p>Q币价：" + 
				data[i].Qb + "   Q币</p></dd></dl><p class='bx_top_big_4'><span>财付通：<strong>￥" + 
				data[i].many + "</strong></span></p></div>"
			}
			obj.eq(eq).html(html);
			
			//热门排行运动
			var bNow = 0;
			var bigs = /*$(".box_hot").find*/$(".hot_list").find("div");
			for(var i = 1; i< bigs.length; i++){
			bigs.eq(i).attr("class", "bx_top_small");}
			bigs.mouseenter(function(){ 
				bNow = $(this).index(); 
				bigs.attr("class", "bx_top_small");
				$(this).attr("class", "bx_top_big");				
			});	
		}
	});
}



//
