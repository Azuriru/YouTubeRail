// throttle
(function(window, undefined) {
	'$:nomunge';
	var $ = window.jQuery || window.Cowboy || (window.Cowboy = {}),
		jq_throttle;
	$.throttle = jq_throttle = function(delay, no_trailing, callback, debounce_mode) {
		var timeout_id,
			last_exec = 0;
		if (typeof no_trailing !== 'boolean') {
			debounce_mode = callback;
			callback = no_trailing;
			no_trailing = undefined;
		}

		function wrapper() {
			var that = this,
				elapsed = +new Date() - last_exec,
				args = arguments;

			function exec() {
				last_exec = +new Date();
				callback.apply(that, args);
			};

			function clear() {
				timeout_id = undefined;
			};
			if (debounce_mode && !timeout_id) {
				exec();
			}
			timeout_id && clearTimeout(timeout_id);
			if (debounce_mode === undefined && elapsed > delay) {
				exec();
			} else if (no_trailing !== true) {
				timeout_id = setTimeout(debounce_mode ? clear : exec, debounce_mode === undefined ? delay - elapsed : delay);
			}
		};
		if ($.guid) {
			wrapper.guid = callback.guid = callback.guid || $.guid++;
		}
		return wrapper;
	};
	$.debounce = function(delay, at_begin, callback) {
		return callback === undefined ? jq_throttle(delay, at_begin, false) : jq_throttle(delay, callback, at_begin !== false);
	};
})(this);

// Actual siderail
$('<div class="arrow-holder-clickable">').append('<span class="arrow">').appendTo('body').after('<div class="right-rail">').click($.throttle(200, function() {
	$('body').toggleClass('right-rail-open');
	if ($('body').hasClass('right-rail-open')) {
		$('.right-rail').animate({
			"width": '+=400px'
		});
		$('.WikiaPage').animate({
			"left": '13.8%'
		});
		$('.arrow-holder-clickable').animate({
			"left": '+=400px'
		});
	} else {
		$('.right-rail').animate({
			"width": '-=400px'
		});
		$('.arrow-holder-clickable').animate({
			"left": '-=400px'
		});
		$('.WikiaPage').animate({
			"left": '10'
		});
	}
}));
CSS = '@keyframes spinPulse {\
        0% {\
            transform: translateY(-50%) rotate(160deg);\
            opacity: 0;\
            box-shadow: 0 0 1px #2187e7\
        }\
        50% {\
            transform: translateY(-50%) rotate(145deg);\
            opacity: 1;\
        }\
        100% {\
            transform: translateY(-50%) rotate(-320deg);\
            opacity: 0;\
        }\
    }\
    @keyframes spinoffPulse {\
        0% {\
            transform: translateY(-50%) rotate(0deg)\
        }\
        100% {\
            transform: translateY(-50%) rotate(360deg)\
        }\
    }\
    .loading {\
		position: fixed;\
		width: 100%;\
		height: 100%;\
		z-index: 10000000000;\
		background: #000;\
		top: 0;\
	}\
	.circle-outer {\
		width: 50px;\
		height: 50px;\
		margin: 0 auto;\
		background-color: transparent;\
		border: 5px solid rgba(0, 183, 229, .9);\
		opacity: .9;\
		border-right: 5px solid transparent;\
		border-left: 5px solid transparent;\
		border-radius: 50px;\
		box-shadow: 0 0 35px #2187e7;\
		animation: spinPulse 1s infinite linear;\
		position: absolute;\
		top: 50%;\
		transform: translateY(-50%);\
		right: 0;\
		left: 0\
	}\
	.circle-inner {\
		width: 30px;\
		height: 30px;\
		margin: 0 auto;\
		background-color: transparent;\
		border: 5px solid rgba(0, 183, 229, .9);\
		opacity: .9;\
		border-left: 5px solid transparent;\
		border-right: 5px solid transparent;\
		border-radius: 30px;\
		box-shadow: 0 0 15px #2187e7;\
		animation: spinoffPulse 1s infinite linear;\
		position: absolute;\
		top: 50%;\
		transform: translateY(-50%);\
		right: 0;\
		left: 0\
	}'
var css = document.createElement('style');
css.innerHTML = CSS;
document.body.appendChild(css);
$('body').append($('<div>', {
	class: 'loading',
	append: [
		$('<div>', {
			class: 'circle-outer'
		}), $('<div>', {
			class: 'circle-inner'
		})
	]
}));
setTimeout(function() {
	chatBorderColor = 'white';
	chatBGColor = 'turquoise';
	CSS = '.arrow {\
            border: 0 solid transparent;\
            border-left-color: ' + chatBorderColor + ';\
            border-width: 4px 0 4px 4px;\
            height: 0;\
            left: 50%;\
            margin-left: -2px;\
            margin-top: -4px;\
            position: absolute;\
            top: 50%;\
            width: 0\
        }\
        \
        body.right-rail-open .arrow {\
            border-width: 4px 4px 4px 0;\
            border-left-color: transparent;\
            border-right-color: ' + chatBorderColor + '\
        }\
        \
        .arrow-holder-clickable {\
            position: absolute;\
            top: 0;\
            left: 0;\
            height: 100%;\
            width: 10px;\
            cursor: pointer;\
        }\
        \
        .right-rail {\
            background-color: ' + chatBGColor + ';\
            z-index: 99999999;\
            height: 100%;\
            position: absolute;\
            top: 0;\
            left: 0;\
            text-align: center;\
            overflow: hidden;\
            border-radius: 0px 5px 5px 0px;\
            border-right: 1px solid ' + chatBorderColor + '\
        }';
	var css = document.createElement('style');
	css.innerHTML = CSS;
	document.body.appendChild(css);
	$('.loading').fadeOut();
}, 5000);

$.getScript("https://www.youtube.com/iframe_api");

$('.right-rail').append($('<div>', {
        id: 'right-rail-BG',
        css: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            'z-index': '-1'
        }
    }),
    $('<section>', {
        id: 'SideRail',
        css: {
            width: '100%',
            position: 'absolute',
            bottom: 0,
            top: 0,
        },
        append: [
            $('<table>', {
                css: {
                    'width': '100%'
                },
                append: [
                    $('<tbody>', {
                        append: [
                            $('<tr>', {
                                append: [
                                    $('<td>', {
                                        append: [
                                            $('<input>', {
                                                css: {
                                                    'width': '98%'
                                                },
                                                id: 'video',
                                                type: 'text'
                                            })
                                        ]
                                    }),
                                ]
                            }),
                            $('<tr>', {
                                append: [
                                    $('<td>', {
                                        append: [
                                            $('<button>', {
                                                css: {
                                                    'width': '100%'
                                                },
                                                id: 'video',
                                                click: addvideo,
                                                text: 'Add'
                                            })
                                        ]
                                    }),
                                ]
                            }),
                            $('<tr>', {
                                append: [
                                    $('<td>', {
                                        append: [
                                            $('<button>', {
                                                css: {
                                                    'width': '100%'
                                                },
                                                id: 'video',
                                                click: removevideo,
                                                text: 'Remove'
                                            })
                                        ]
                                    }),
                                ]
                            }),
                            $('<tr>', {
                                append: [
                                    $('<td>', {
                                        append: [
                                            $('<hr>'),
                                            $('<iframe>', {
                                                width: '100%',
                                                height: '200',
                                                name: 'videourl',
                                                id: 'video1',
                                                allowfullscreen: 'allowfullscreen',
                                                frameborder: '0'
                                            }),
                                        ]
                                    }),
                                ]
                            }),
                        ]
                    })
                ]
            }),
        ]
    }));

//Thanks to RansomTime, with some modifications
function exist(variable) {
	if (variable == "") {
		return false;
	}
	return true;
}

function addvideo() {
	$('#video1').show();
	var url = $('#video').val();
	var open = 'https://www.youtube.com/embed/' + url;
	var other = 'https://www.youtube.com/embed/Yq0zBXN1o2A';
	// Online Game Addicts Sprechchor
	if (exist(url)) {
		window.open(open, "videourl");
	} else {
		window.open(other, "videourl");
	}
}

function removevideo() {
	$('#video1').hide();
	var removevideo = ' ';
	window.open(removevideo, "videourl");
}

CSS = 'section#SideRail {\
    position: absolute;\
    bottom: 0;\
    top: 0;\
    width: 100%;\
}';

var css = document.createElement('style');
css.innerHTML = CSS;
document.body.appendChild(css);
