// Throttle
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

// CSS
$.ajax({
	url: 'https://raw.githubusercontent.com/GameModerator/Pokemon-Showdown-SideRail/master/main.css',
	success: function(data) {
		$('<style>').appendTo('head').html(data);
	}
});

// Actual siderail
$('<div class="arrow-holder-clickable">').append('<span class="arrow">')
	.appendTo('body').after('<div class="right-rail">')
	.click($.throttle(200, function() {
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
