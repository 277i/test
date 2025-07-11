/**
 * @author: xiangliang.zeng
 * @description:
 * @Date: 2017/1/4 11:38
 * @Last Modified by:   xiangliang.zeng
 */
; (function () {

	if (!loader51._isReady) {
		loader51.$on("ready", function () {
			onDomReady();
			console.log('-ready-');
		})
	} else {
		onDomReady();
	}

	if (!loader51._isLoaded) {
		loader51.$on("loaded", function () {
			onLoaded();
			console.log('-loaded-');
		});
	} else {
		onLoaded();
	}


	// 类似Jquery的$(function(){});
	function onDomReady() {
		console.log('DOM is ready');
	}
	// 当loading页面关闭时执行的函数
	function onLoaded() {
		removeTouchMove();
		console.log('Loaded');
		init();
	}

	function init() {
		// 实例化swiper对象
		var mySwiper = new Swiper('.swiper-container', {
			effect: 'fade',
			//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
			direction: 'vertical',
			//将hashnav设置为true，并在每个slide处增加data-hash属性，可在当前页刷新。
			hashnav: true,
			on: {
				init: function () {
					swiperAnimateCache(this); //隐藏动画元素
					swiperAnimate(this); //初始化完成开始动画
					$('.swiper-slide').scrollTop(0);
				},
				slideChangeTransitionEnd: function () {
					swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
					$('.swiper-slide').scrollTop(0);
				},
			},
		});

		// if (getUrlParam('coid')) {
		// 	mySwiper.slideTo(4, 10, true);
		// }



		// 引导页的enter键点击划入第二页
		$('.enter1').on('click', function (event) {
			mySwiper.slideTo(1, 10, true);
		});

		$('.nav li').on('click', function () {

			let idx = $(this).index() + 1
			mySwiper.slideTo(idx, 0, true);
			console.log("当前那一页", idx);


			// 替换 页面url的
			var url = new URL(window.location.href);
			const sps = new URLSearchParams($(location).attr('search'))
			sps.set('slideTo', idx)
			sps.set('rand', Math.random(0, 1) * 100000)
			url.search = sps.toString();
			history.pushState(null, '', url.href);

		})

		// 需要局部滚动的页面，阻止事件冒泡 -- 阻止swiper滑动
		$('.info').on('touchmove', function () {
			event.stopPropagation();
		});



		setTimeout(() => {
			// 社招
			if (getUrlParam('slideTo')) {
				console.log(getUrlParam('slideTo'), "getUrlParam('slideTo')----------");
				mySwiper.slideTo(getUrlParam('slideTo'), 10, true);
			}

		}, 500)


	}

	function getUrlParam(name) {
		// 用该属性获取页面 URL 地址从问号 (?) 开始的 URL（查询部分）
		var url = window.location.search;
		// 正则筛选地址栏
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		// 匹配目标参数
		var result = url.substr(1).match(reg);
		//返回参数值
		return result ? decodeURIComponent(result[2]) : '';
	}

	// 移除默认事件及阻止冒泡
	function removeDefaultEvt(e) {
		// e.preventDefault();
	}
	// 移除默认document的touchmove，针对苹果手机
	function removeTouchMove() {
		document.body.addEventListener('touchmove', removeDefaultEvt, false);
	}
})();
