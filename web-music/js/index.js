$(function(){
	// 定义参数
	var $mainAuthor = $('.main-author');
	var $wrapMain = $('.wrap-main');
	var $wrapNeedle = $('.wrap-needle');
	var $wrapDisk = document.getElementById("wrapDisk");
	var $diskCover = document.getElementsByClassName("disk-cover");
	var $btnPre = $('.btn-pre');
	var $btnEnter = $('.btn-enter');
	var $btnNext = $('.btn-next');
	var $wrapMainBg = $('.wrap-main-bg');
	var $btnControl = $('.btn-control');
	var $bgMusic = $('.bg-music');
	var $iconNeedle = $('.icon-needle');
	var $fileMusicAll = document.getElementsByClassName("file-music");
	var $disk = $('.disk');
	var bgArr = ['hsym','kblk','gq','yq','bnsdmm','qsqr'];
	var musicArr = ['黑色幽默','开不了口','搁浅','夜曲','不能说的秘密','前世情人'];
	var playCardArr = ['JAY同名专辑','范特西','七里香','十一月的萧邦','不能说的秘密','周杰伦的床边故事'];
	var width = $(window).width(); //获取屏幕宽度
	var angle = [0,0,0,0,0,0];
	var rolling;

	// 旋转动画
	function roll(index){
		var rollTime = 20000;
		var angleStep = 0.5;
		var intTime = rollTime/(360/angleStep);
		rolling = setInterval(function(){
			var playStatus = $btnControl.attr('data-play');
			if (playStatus == "play") {
				angle[index] += angleStep;
				$diskCover[index].style.transform = "rotate(" + angle[index] + "deg)";
				$diskCover[index].style.webkitTransform = "rotate(" + angle[index] + "deg)";
				if (angle[index] == 360) {
					angle[index] = 0;
				}
			}
		},intTime);
	}

	// 停止旋转动画
	function rollStop(){
		clearInterval(rolling);
	}

	// 改变页面信息
	function changeMusicInfo(index){
		$btnControl.attr('data-music',index);
		$mainAuthor.text(musicArr[index]);
		$bgMusic.text(playCardArr[index]);
		$wrapMainBg.removeClass("show").addClass("leave");
		setTimeout(function(){
			$wrapMainBg.attr('style','background-image: url("images/' + bgArr[index] +'@3x.jpg");');
			$wrapMainBg.removeClass("leave").addClass("show");
		},600);
		var transLength = width*index;
		$wrapDisk.style.webkitTransform = "translateX(-"+transLength +"px)";
		$wrapDisk.style.transform = "translateX(-"+transLength +"px)";
		$fileMusicAll[index].play();
		$btnControl.attr('data-play',"play");
		$btnControl.addClass('pause');
		roll(index);

	}

	// 重置播放设置
	function resetPlay(index){
		$fileMusicAll[index].pause();
		$btnControl.removeClass('pause');
		$btnControl.attr('data-play',"pause");
		rollStop(index);
	}

	// 播放整体动作
	function musicPlay(index){
		$fileMusicAll[index].play();
		$btnControl.attr('data-play',"play");
		$btnControl.addClass('pause');
		$iconNeedle.addClass('down');
		roll(index);
	}

	// 暂停整体动画
	function musicPause(index){
		$fileMusicAll[index].pause();
		$btnControl.attr('data-play',"pause");
		$btnControl.removeClass('pause');
		$iconNeedle.removeClass('down');
		rollStop(index);
	}

	// 播放音乐
	$btnControl.click(function(){
		var musicIndex = parseInt($btnControl.attr('data-music'));
		var playStatus = $btnControl.attr('data-play');
		// 当前暂停，点击播放
		if (playStatus == "pause") {
			musicPlay(musicIndex);
		}
		// 当前播放，点击暂停
		else{
			musicPause(musicIndex);
		}
	});

	// 点击下一首
	$btnNext.click(function(){
		var musicIndex = parseInt($btnControl.attr('data-music'));
		var playStatus = $btnControl.attr('data-play');
		if (musicIndex < 5) {
			if (playStatus == "pause") {
				setTimeout(function(){
					$iconNeedle.addClass('down');
				},200);
			}else{
				$iconNeedle.addClass('animation');
			}
			resetPlay(musicIndex);
			musicIndex += 1;
			$btnPre.show();
			changeMusicInfo(musicIndex);
			setTimeout(function(){
				$iconNeedle.removeClass('animation').addClass('down');
			},500);
			if (musicIndex == 5) {
				$btnNext.hide();
				// $btnNext.tap(function(){
				// 	$wrapMain.hide();
				// 	$fileMusicAll[musicIndex].pause();
				// });
			}
		}
	});

	// 点击上一首
	$btnPre.click(function(){
		var musicIndex = parseInt($btnControl.attr('data-music'));
		var playStatus = $btnControl.attr('data-play');
		if (musicIndex > 0) {
			if (playStatus == "pause") {
				setTimeout(function(){
					$iconNeedle.addClass('down');
				},200);
			}else{
				$iconNeedle.addClass('animation');
			}
			resetPlay(musicIndex);
			musicIndex -= 1;
			$btnNext.show();
			setTimeout(function(){
				$iconNeedle.removeClass('animation').addClass('down');
			},500);
			changeMusicInfo(musicIndex);
			if (musicIndex == 0){
				$btnPre.hide();
			}
		}
	});
});
