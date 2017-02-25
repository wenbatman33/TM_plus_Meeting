//開場視訊音訊設定
$('#welcomeModal').modal('show')

//video control
var videoSum = 6;
var html = '';
for (var i = 1; i <= videoSum; i++) {
	html += '<li class="column-' + videoSum + '">'
	html += '<div class="video-icon"><p><img src="assets/images/icon-cam.svg"></p></div>'
	html += '<div class="video-name">Daniel Wu-' + i +'</div>'
	html += '<video id="video01" class="video-js" controls autoplay preload="auto" width="100%" poster="http://vjs.zencdn.net/v/oceans.png" data-setup="{}">'
	html += '<source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">'
	html += '<source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm">'
	html += '<source src="http://vjs.zencdn.net/v/oceans.ogv" type="video/ogg">'
	html += '</video>'
	html += '</li>'
}
$('#video ul').html(html);

//active
$('#video ul li .video-icon, .play-music, #host-panel .host-mic, #host-panel .list-group .host-btn, #host-panel .open-allmic').click(function() {
	$(this).toggleClass('active');
});

$('#console-mic, #console-cam').click(function() {
	$(this).children('.border').toggleClass('active');
});

$('.cam-allopen .cam-btn').click(function() {
	$('.cam-allopen').hide()
});


//筆觸
$('.panBox').click(function() {
	$('#whiteboard .pan-shape .panBox').removeClass('active');
	$(this).addClass('active');
});
//顏色
$('.fillColor .color').click(function() {
	$('#whiteboard .fillColor .color').removeClass('active');
	$(this).addClass('active');
});
//粗細
$('.fillWide .wideBox').click(function() {
	$('#whiteboard .fillWide .wideBox').removeClass('active');
	$(this).addClass('active');
});
//形狀
$('.shapeBox').click(function() {
	$('#whiteboard .pan-shape .shapeBox').removeClass('active');
	$(this).addClass('active');
});
//邊框顏色
$('.wideColor .color').click(function() {
	$('#whiteboard .wideColor .color').removeClass('active');
	$(this).addClass('active');
});
//邊框粗細
$('.wideWidth .wideBox').click(function() {
	$('#whiteboard .wideWidth .wideBox').removeClass('active');
	$(this).addClass('active');
});

//modal control
$('#screenModal .btn-yes').click(function() {
	$('#console-screen').children('.screen-share').addClass('show fadeIn animated');
	$('#console-screen').children('div').addClass('active');

});
$('.TMP-modal .modal-footer .btn-no').click(function() {
	$('#console-screen').children('.screen-share').removeClass('show');
	$('#console-screen').children('div').removeClass('active');
	$('#host-panel .mute-allmic').removeClass('active');
});

$('#closeMicModal .btn-yes').click(function() {
	$('#host-panel .mute-allmic').addClass('active');
});


//dropdown 與會人員,邀請與會者
$('#search').click(function() {
	$('.search-wrap').toggleClass('show');
	$('.invite-wrap').removeClass('show');
});
$('#invite').click(function() {
	$('.invite-wrap').toggleClass('show');
	$('.search-wrap').removeClass('show');
});


$('.setting-slider .subtitle .slider-close').click(function() {
	$('.console-item').removeClass('is-open');
});

// close dropdown
$('.logo, .console-wrap, .main, .speaker, .member-wrap>.w100, .meetingID').click(function() {
	$('.search-wrap, .invite-wrap').removeClass('show');
});


//select 美化
$('.chosen-select').chosen({disable_search_threshold: 10});

//fix dropdown content close
$('.dropdown-menu').click(function(event){
     event.stopPropagation();
});

//邀請與會者
var itemId = 1;

$(".append").click(function () {
	itemId++;
	// console.log(itemId);
	if (itemId == 6){
		$(".append").addClass('hide');
	}
	$("#add-item").append('<div class="w100 flex mg-btm20" id="add-item-' + itemId +'"><p class="item-left"><input type="" placeholder="姓名"></p><p class="item-right"><input type="" placeholder="email"></p></div>');
	$("#itemId").html(itemId);

});

//右側滑動選單
$('#setting').click(function() {
	$('#host').removeClass('is-open');
	$(this).toggleClass('is-open');
	$('#host-panel').removeClass('in');	
	$('#setting-panel').toggleClass('in');

});

$('#host').click(function() {
	$('#setting').removeClass('is-open');
	$(this).toggleClass('is-open');
	$('#setting-panel').removeClass('in');
	$('#host-panel').toggleClass('in');
});

//關閉滑動選單
$('.slider-close').click(function() {
	$('#setting, #host').removeClass('is-open');
	$('#setting-panel, #host-panel').removeClass('in');
});

//whiteboard panel control
$('body').click(function(event) {
	// console.log(event.target.id+' and '+$(event.target).attr('class'));

	if ((event.target.id) == 'wb-arrow') {
   		$('#wb-arrow').addClass('active');
	} else {
   		$('#wb-arrow').removeClass('active');
	}

	if ((event.target.id) == 'wb-pan') {
	   	$('#wb-pan').addClass('active');
	   	$('#wb-pan').next('.dropdown-menu').show();
	} else {
	   	$('#wb-pan').removeClass('active');
	   	$('#wb-pan').next('.dropdown-menu').hide();
	}

	if ((event.target.id) == 'wb-shape') {
   		$('#wb-shape').addClass('active');
   		$('#wb-shape').next('.dropdown-menu').show();
	} else {
		$('#wb-shape').removeClass('active');
   		$('#wb-shape').next('.dropdown-menu').hide();
	}

	if ((event.target.id) == 'wb-text') {
   		$('#wb-text').addClass('active');
	} else {
   		$('#wb-text').removeClass('active');
	}

	if ((event.target.id) == 'wb-return') {
   		$('#wb-return').addClass('active');
	} else {
   		$('#wb-return').removeClass('active');
	}

	if ((event.target.id) == 'wb-del') {
   		$('#wb-del').addClass('active');
   		$('#wb-del').next('.dropdown-menu').show();
	} else {
		$('#wb-del').removeClass('active');
   		$('#wb-del').next('.dropdown-menu').hide();
	}

	if ((event.target.id) == 'wb-ratio') {
   		$('#wb-ratio').addClass('active');
   		$('#wb-ratio').next('.dropdown-menu').show();
	} else {
		$('#wb-ratio').removeClass('active');
   		$('#wb-ratio').next('.dropdown-menu').hide();
	}

});


