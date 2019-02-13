$('<div class="arrow-holder-clickable">')
    .append('<span class="arrow">')
    .appendTo('body')
    .after('<div class="right-rail">')
    .click($.throttle(200, function() {
        $('body').toggleClass('right-rail-open');
        if ($('body').hasClass('right-rail-open')) {
            $('.right-rail').animate({"width": '+=13%'});
            $('.WikiaPage').animate({"left": '13.8%'});
            $('.arrow-holder-clickable').animate({"left": '+=13%'});
        } else {
            $('.right-rail').animate({"width": '-=14%'});
            $('.arrow-holder-clickable').animate({"left": '-=13%'});
            $('.WikiaPage').animate({"left": '10'});
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
            }),
            $('<div>', {
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
        }'
	var css = document.createElement('style');
	css.innerHTML = CSS;
	document.body.appendChild(css);
        $('.loading').fadeOut();
    }, 5000);
    
$.getScript("https://www.youtube.com/iframe_api");

    var rail = $('<section id="_WikiaPage" class="_WikiaPage"></section>');
    var switchrail = $('\
    <table style="width:99%;">\
        <tr>\
            <td style="width:50%;">\
                <button onclick="switchMT()" style="width:102%;">Mod Tools</button>\
            </td>\
        </tr>\
        <tr>\
            <td style="width:50%;">\
                <button onclick="switchUI()" style="width:102%">User Info</button>\
            </td>\
        </tr>\
        <tr>\
            <td style="width:50%;">\
                <button onclick="switchIW()" style="width:102%">Interwiki</button>\
            </td>\
        </tr>\
        <tr>\
            <td style="width:50%;">\
                <button onclick="switchMW()" style="width:102%">MediaWiki</button>\
            </td>\
        </tr>\
        <tr>\
            <td style="width:50%;">\
                <button onclick="switchPG()" style="width:102%">Open Page</button>\
            </td>\
        </tr>\
        <tr>\
            <td style="width:50%;">\
                <button onclick="switchVID()" style="width:102%">Video</button>\
            </td>\
        </tr>\
        <tr>\
            <td style="width:50%;">\
                <button onclick="switchMU()" style="width:102%;">Music</button>\
            </td>\
        </tr>\
        <tr>\
            <td>\
            <br />\
            <form name="searchbox" id="searchbox" class="searchbox" action="/wiki/Special:Search" target="_blank">\
            <input class="searchboxInput" name="search" type="text" value="" placeholder="" style="width:99%">\
            <input type="submit" name="go" class="searchboxGoButton" style="width:102%; margin-top:4px;" value="Try exact match">\
            <br />\
            <input type="submit" name="fulltext" class="searchboxSearchButton" style="width:102%; margin-top:2px;" value="Search full text">\
            </form>\
            </td>\
        </tr>\
        <tr>\
            <td colspan="2">\
                <hr />\
            </td>\
        </tr>\
    </table>');
 
    var mtrail = $('\
    <table style="width:100%;" id="mtrail">\
        <tr>\
            <td><input type="text" id="userinput" value="" style="width:98%;"></td>\
        </tr>\
        <tr>\
            <td><button onclick="kick()" id="kickbutton" style=width:100%;">Kick</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="ban()" id="banbutton" style=width:100%;">Ban</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="autokick()" id="autokickbutton" style=width:100%;">AutoKick</button></td>\
        </tr>\
    </table>');
 
    var uirail = $('\
    <table style="width:100%;" id="uirail">\
        <tr>\
            <td><input type="text" id="userinfo" value="" style="width:98%;"></td>\
        </tr>\
        <tr>\
            <td><button onclick="userhideshow()" style=width:100%;">Main Pages</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="userpage()" class="mainuser" id="userpage" style=width:100%;">User Page</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="talkpage()" class="mainuser" id="talkpage" style=width:100%;">Talk Page</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="messagewall()" class="mainuser" id="mwall" style=width:100%;">Message Wall</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="blog()" class="mainuser" id="blog" style=width:100%;">Blog</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="contribs()" class="mainuser" id="contribution" style=width:100%;">Contributions</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="logshideshow()" style=width:100%;">Logs</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="banlog()" class="logs" id="banlog" style=width:100%;">Ban Log</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="blocklog()" class="logs" id="blocklog" style=width:100%;">Block Log</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="log()" class="logs" id="publiclogs" style=width:100%;">Logs</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="mwuserhideshow()" style=width:100%;">JS & CSS</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="wikiacss()" class="mwuser" id="wikiacss" style=width:100%;">Wikia.css</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="commoncss()" class="mwuser" id="commoncss" style=width:100%;">Common.css</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="chatcss()" class="mwuser" id="chatcss" style=width:100%;">Chat.css</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="globalcss()" class="mwuser" id="globalcss" style=width:100%;">Global.css</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="wikiajs()" class="mwuser" id="wikiajs" style=width:100%;">Wikia.js</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="commonjs()" class="mwuser" id="commonjs" style=width:100%;">Common.js</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="chatjs()" class="mwuser" id="chatjs" style=width:100%;">Chat.js</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="globakjs()" class="mwuser" id="globaljs" style=width:100%;">Global.js</button></td>\
        </tr>\
    </table>');
 
    var iwrail = $('\
    <table style="width:100%;" id="iwrail">\
        <tr>\
            <td><input type="text" id="interwiki" value="" style="width:98%;"></td>\
        </tr>\
        <tr>\
            <td><button onclick="recentchanges()" id="recentchanges" style=width:100%;">Recent Changes</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="wikiactivity()" id="wikiactivity" style=width:100%;">Wiki Activity</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="specialpages()" id="specialpages" style=width:100%;">Special Pages</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="wantedpages()" id="wantedpages" style=width:100%;">Wanted Pages</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="wantedfiles()" id="wantedfiles" style=width:100%;">Wanted Files</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="brokenredirects()" id="brokenredirects" style=width:100%;">Broken Redirects</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="uncatpages()" id="uncatpages" style=width:100%;">Uncat Pages</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="uncatfiles()" id="uncatfiles" style=width:100%;">Uncat Files</button></td>\
        </tr>\
        <tr>\
            <td><input type="text" id="wikipage" value="" style="width:98%;"></td>\
        </tr>\
        <tr>\
            <td><button onclick="wikipage()" id="wikipage" style=width:100%;">Other</button></td>\
        </tr>\
    </table>');

    var mwrail = $('\
    <table style="width:100%;" id="mwrail">\
        <tr>\
            <td><input type="text" id="mediawiki" value="" style="width:98%;"></td>\
        </tr>\
        <tr>\
            <td><button onclick="mwccss()" id="mwccss" style=width:100%;">Common.css</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="mwwcss()" id="mwwcss" style=width:100%;">Wikia.css</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="mwchss()" id="mwchss" style=width:100%;">Chat.css</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="mwcjs()" id="mwcjs" style=width:100%;">Common.js</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="mwwjs()" id="mwwjs" style=width:100%;">Wikia.js</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="mwchjs()" id="mwchjs" style=width:100%;">Chat.js</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="wmwu()" id="wmwu" style=width:100%;">Welcome Greeting</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="welcu()" id="welcu" style=width:100%;">Welcome User</button></td>\
        </tr>\
    </table>');
 
    var pgrail = $('\
    <table style="width:100%;" id="pgrail">\
        <tr>\
            <td><input type="text" id="newpage" value="" style="width:98%;"></td>\
        </tr>\
        <tr>\
            <td><button onclick="openpage()" id="openpage" style=width:100%;">Open Page</button></td>\
        </tr>\
    </table>');
    
    var videorail = $('\
    <table style="width:100%;" id="videorail">\
        <tr>\
            <td><input type="text" id="video" value="" style="width:98%;"></td>\
        </tr>\
        <tr>\
            <td><button onclick="addvideo()" id="video" style=width:100%;">Add</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="removevideo()" id="video" style=width:100%;">Remove</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="puvideo()" id="video" style=width:100%;">Pop Up</button>\
            <hr />\
            <iframe width="100%" height="100" id="video1" name="videourl" frameborder="0" allowfullscree></iframe>\
            </td>\
        </tr>\
    </table>');

    var murail = $('\
    <table style="width:100%;" id="murail">\
        <tr>\
            <td><input type="text" id="music" value="" style="width:98%;"></td>\
        </tr>\
        <tr>\
            <td><button onclick="addmusic()" style="width:100%;">Add</button></td>\
        </tr>\
        <tr>\
            <td><button onclick="removemusic()" style=width:100%;">Remove</button>\
            <hr />\
            <button id="musicbutton" onclick="playmusic()" style="display:none; width:100%;text-align:center;"><img src="https://vignette1.wikia.nocookie.net/steven-universe/images/f/fb/Notspriteplay.png/revision/latest/scale-to-width-down/14" alt="Play"></button>\
            </td>\
        </tr>\
    </table>');
 
    var helpbutton = $('<table style="width:100%; position:absolute; bottom:25px;"><tr><td><button onclick="help()" style="width:100%;">Help</button></td></tr></table>');
    
    var aboutbutton = $('<table style="width:100%; position:absolute; bottom:0;"><tr><td><button onclick="about()" style="width:100%;">About</button></td></tr></table>');

    var userhidden = false;
    var logshidden = false;
    var mwuserhidden = false;

    //Thanks to RansomTime, with some modifications
    function exist (variable) {
        if (variable == ""){
            return false;
        }
        return true;
    }

    function switchMT() {
        mtrail.toggle();
        uirail.hide();
        iwrail.hide();
        mwrail.hide();
        pgrail.hide();
        videorail.hide();
        murail.hide();
    }
    
    function switchUI() {
        mtrail.hide();
        uirail.toggle();
        iwrail.hide();
        mwrail.hide();
        pgrail.hide();
        videorail.hide();
        murail.hide();
    }
 
    function switchIW() {
        mtrail.hide();
        uirail.hide();
        iwrail.toggle();
        mwrail.hide();
        pgrail.hide();
        videorail.hide();
        murail.hide();
    }

    function switchMW() {
        mtrail.hide();
        uirail.hide();
        iwrail.hide();
        mwrail.toggle();
        pgrail.hide();
        videorail.hide();
        murail.hide();
    }
 
    function switchPG() {
        mtrail.hide();
        uirail.hide();
        iwrail.hide();
        mwrail.hide();
        pgrail.toggle();
        videorail.hide();
        murail.hide();
    }
    
    function switchVID() {
        mtrail.hide();
        uirail.hide();
        iwrail.hide();
        mwrail.hide();
        pgrail.hide();
        videorail.toggle();
        murail.hide();
    }
 
    function switchMU() {
        mtrail.hide();
        uirail.hide();
        iwrail.hide();
        mwrail.hide();
        pgrail.hide();
        videorail.hide();
        murail.toggle();
    }

    //Thanks S-A for clearing this up and explaining
    function kick() {
        var user = $('#userinput').val();
        if (exist(user) === true ) {
            mainRoom.kick({
                name: user
            });
        }
    }
 
    function ban() {
        var user = $('#userinput').val();
        if (exist(user) === true ) {
            mainRoom.ban({
                name: user
            });
        }
    }
 
    function autokick() {
        alert('Do not use');
        var user = $('#userinput').val();
        if (exist(user) === true ) {
            $.showCustomModal();
            mainRoom.kick({
                name: user
            });
        }
    }

    //Default hidden
    function userhideshow() {
        if (userhidden)
            $('.mainuser').each(function() {
                $(this).parent().parent().show();
            });
        userhidden = !userhidden;
        $('.mainuser').slideToggle(250, function() {
            if (userhidden)
                $(this).parent().parent().hide();
        });
    }
    
    function userpage() {
        var user = $('#userinfo').val();
        var open = '/wiki/User:' + user;
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyPage', '_blank');
        }
    }
 
    function talkpage() {
        var user = $('#userinfo').val();
        var open = '/wiki/User_talk:' + user;
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyTalk', '_blank');
        }
    }
 
    function messagewall() {
        var user = $('#userinfo').val();
        var open = '/wiki/Message_Wall:' + user;
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyTalk', '_blank');
        }
    }
 
    function blog() {
        var user = $('#userinfo').val();
        var open = '/wiki/User_blog:' + user;
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyBlog', '_blank');
        }
    }
 
    function contribs() {
        var user = $('#userinfo').val();
        var open = '/wiki/Special:Contributions/' + user;
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyContributions', '_blank');
        }
    }
    
    function logshideshow() {
        if (logshidden)
            $('.logs').each(function() {
                $(this).parent().parent().show();
            });
        logshidden = !logshidden;
        $('.logs').slideToggle(250, function() {
            if (logshidden)
                $(this).parent().parent().hide();
        });
    }
    
    function banlog() {
        var user = $('#userinfo').val();
        var open = '/wiki/Special:Log/chatban?page=User:' + user;
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyPage', '_blank');
        }
    }
 
    function blocklog() {
        var user = $('#userinfo').val();
        var open = '/wiki/Special:Log/block?page=User:' + user;
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyPage', '_blank');
        }
    }
 
    function log() {
        var user = $('#userinfo').val();
        var open = '/wiki/Special:Log/' + user;
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyPage', '_blank');
        }
    }
 
    function mwuserhideshow() {
        if (mwuserhidden)
            $('.mwuser').each(function() {
                $(this).parent().parent().show();
            });
        mwuserhidden = !mwuserhidden;
        $('.mwuser').slideToggle(250, function() {
            if (mwuserhidden)
                $(this).parent().parent().hide();
        });
    }
    
    function wikiacss() {
        var user = $('#userinfo').val();
        var open = '/wiki/User:' + user + '/wikia.css';
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyPage/wikia.css', '_blank');
        }
    }
 
    function commoncss() {
        var user = $('#userinfo').val();
        var open = '/wiki/User:' + user + '/common.css';
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyPage/common.css', '_blank');
        }
    }

    function chatcss() {
        var user = $('#userinfo').val();
        var open = '/wiki/User:' + user + '/chat.css';
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyPage/', 'chat.css');
        }
    }
    
     
     function globalcss() {
        var user = $('#userinfo').val();
        var open = '/wiki/w:c:c:User:' + user + '/global.css';
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/w:c:Special:MyPage/', 'global.css');
        }
    }
    function wikiajs() {
        var user = $('#userinfo').val();
        var open = '/wiki/User:' + user + '/wikia.js';
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyPage/wikia.js', '_blank');
        }
    }
 
    function commonjs() {
        var user = $('#userinfo').val();
        var open = '/wiki/User:' + user + '/common.js';
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyPage/common.js', '_blank');
        }
    }

    function chatjs() {
        var user = $('#userinfo').val();
        var open = '/wiki/User:' + user + '/chat.js';
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:MyPage/', 'chat.js');
        }
    }
    
    function globaljs() {
        var user = $('#userinfo').val();
        var open = '/wiki/w:c:c:User:' + user + '/global.js';
        if (exist(user)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/w:c:c:Special:MyPage/', 'global.js');
        }
    }
 
    function recentchanges() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':Special:RecentChanges';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:RecentChanges', '_blank');
        }
    }
 
    function wikiactivity() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':Special:WikiActivity';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:WikiActivity', '_blank');
        }
    }
 
    function specialpages() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':Special:SpecialPages';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:SpecialPages', '_blank');
        }
    }
 
    function wantedpages() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':Special:WantedPages';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:WantedPages', '_blank');
        }
    }
 
    function wantedfiles() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':Special:WantedFiles';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:WantedFiles', '_blank');
        }
    }
 
    function brokenredirects() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':Special:BrokenRedirects';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:BrokenRedirects', '_blank');
        }
    }
 
    function uncatpages() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':Special:UncategorizedPages';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:UncategorizedPages', '_blank');
        }
    }
 
    function uncatfiles() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':Special:UncategorizedFiles';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Special:UncategorizedFiles', '_blank');
        }
    }
    
    function wikipage() {
        var wiki = $('#interwiki').val();
        var page = $('#wikipage').val();
        var open = '/wiki/w:c:' + wiki + ':' + page;
        if (exist(wiki, page)) {
            window.open(open, '_blank');
        }
    }

    function mwccss() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':MediaWiki:Common.css';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/MediaWiki:Common.css', '_blank');
        }
    }

    function mwwcss() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':MediaWiki:Wikia.css';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/MediaWiki:Wikia.css', '_blank');
        }
    }

    function mwchss() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':MediaWiki:Chat.css';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/MediaWiki:Chat.css', '_blank');
        }
    }
    
    function mwcjs() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':MediaWiki:Common.js';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/MediaWiki:Common.js', '_blank');
        }
    }

    function mwwjs() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':MediaWiki:Wikia.js';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/MediaWiki:Wikia.js', '_blank');
        }
    }

    function mwchjs() {
        var wiki = $('#interwiki').val();
        var open = '/wiki/w:c:' + wiki + ':MediaWiki:Chat.js';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/MediaWiki:Chat.js', '_blank');
        }
    }
    
    function wmwu() {
        var wiki = $('#mediawiki').val();
        var open = '/wiki/w:c:' + wiki + ':MediaWiki:Welcome-message-wall-user';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/Welcome-message-wall-user', '_blank');
        }
    }

    function welcu() {
        var wiki = $('#mediawiki').val();
        var open = '/wiki/w:c:' + wiki + ':MediaWiki:Welcome-user';
        if (exist(wiki)) {
            window.open(open, '_blank');
        }
        else {
            window.open('/wiki/MediaWiki:Welcome-user', '_blank');
        }
    }
 
    function openpage() {
        var page = $('#newpage').val();
        var open = '/wiki/' + page;
        if (exist(page)) {
            window.open(open, '_blank');
        }
    }
    
    function addvideo() {
        $('#video1'). show();
        var url = $('#video').val();
        var open = 'https://www.youtube.com/embed/' + url;
        var other = 'https://www.youtube.com/embed/Yq0zBXN1o2A'; // Online Game Addicts Sprechchor
        if (exist(url)) {
            window.open(open, "videourl");
        }
        else {
            window.open(other, "videourl");
        }
    }
    
    function removevideo() {
        $('#video1'). hide();
        var removevideo = ' ';
        window.open(removevideo, "videourl");
    }
    
    function puvideo() {
        var id = $('#video').val();
        if (exist(id)) {
            $.showCustomModal('Video', '<iframe width="100%" height="500" src="//www.youtube.com/embed/' + id + '" allowfullscreen></iframe>', {
        id: 'videomodal',
        width: 800
        });
        }
        else {
            alert('Please insert a link!');
        }
    }
 
    /* <div><iframe> links from the maker of {{Template:YouTube Player}} */
    function addmusic() {
        var link = $('#music').val();
        if (window.player) {
            window.player.pauseVideo();
        }
        if (exist(link)) {
        $('#musicbutton'). show();
        window.player = new YT.Player($('<div>').appendTo('body')[0], {
            height: '0',
            width:  '0',
            videoId: link
        });
        try {
        player.playVideo();
        } catch(e) {}
        } else {
        $('#musicbutton'). show();
        window.player = new YT.Player($('<div>').appendTo('body')[0], {
            height: '0',
            width:  '0',
            videoId: 'B2zgebe8-PI' //File Select - Super Mario Galaxy
        });
        try {
        player.playVideo();
        } catch(e) {}
        }
    }
 
    function removemusic() {
        $('#musicbutton'). hide();
        window.player.pauseVideo();
        window.player = undefined;
    }
    
    var playing = false
    function playmusic() {
        if (!window.player) return;
        if (playing) {
            $('#musicbutton').html('<img src="https://vignette1.wikia.nocookie.net/steven-universe/images/f/fb/Notspriteplay.png/revision/latest/scale-to-width-down/14" alt="Play">');
            player.pauseVideo();
        } else {
            $('#musicbutton').html('<img src="http://vignette1.wikia.nocookie.net/steven-universe/images/b/bb/Notspritepause.png/revision/latest/scale-to-width-down/14" alt="Pause">');
            try {
                player.playVideo();
            } catch(e) {}
        }
        playing = !playing;
    }
    
    //Look at this terrible formatting
    function about() {
        $.showCustomModal('About', '<span style="font-size:18px;">ChatScript v1.2</span><br />\
        Formerly <a href="http://dev.wikia.com/wiki/ChatSideRail" class="extiw" title="w:c:dev:ChatSideRail">ChatSideRail</a> by <a href="/wiki/User:ChaoticShadow" title="User:ChaoticShadow" class="userlink">ChaoticShadow</a> but they left wikia, and I just found some use for it, so I salvaged it and modified it. Not gonna lie it took forever since I practically have no knowledge on JS.\
         <iframe width="0" height="0" src="https://www.youtube.com/embed/B2zgebe8-PI?autoplay=1" frameborder="0"></iframe>\
         <center>\
            <div style="width: 540px;height: 304px;border-radius: 20px;overflow: hidden;box-shadow: 0px 0px 40px #6049b9;margin: 20px 0px;">\
<div style="height: 0px;">\
            <img src="https://68.media.tumblr.com/de259c4cd4f7dba044fb8274aacdaedb/tumblr_nmoh0uO3YE1qb88xvo1_1280.gif" alt="Almost dead.gif">\
            </div>\
            <p style="padding: 20px 30px;text-align: right;color: #ffffff;">This chick was literally me.</p>\
            </div>\
        </center>', {
            id: 'aboutmodal',
            width: 560
        });
    }

    function help() {
        $.showCustomModal('Help', '\
        <div style="text-align:center">\
            Having trouble figuring out how this works?\
        </div>\
        <hr />\
        <h2>Features</h2>\
		<br />\
        <div style="overflow:auto; height:auto; max-height:400px; background:transparent;">\
            <h3>Mod Tools</h3>\
                <p>The username entered in the input box will be:</p>\
                <ul>\
                    <li>Kicked</li>\
                    <li>Banned</li>\
                    <li>Autokicked</li>\
                </ul>\
                <p>Know that this only works for Mods so don\'t even think about kicking anyone. ;)</p>\
			<br />\
            <h3>User Info</h3>\
                <p>Enter a Username in the input box.</p>\
                <p>Clicking Main Pages will show the following:</p>\
                <ul>\
                    <li>User Page: Link to their user page.</li>\
                    <li>Talk Page: Link to their talk page.</li>\
                    <li>Message Wall: Link to their message wall.</li>\
                    <li>Blog: Link to their blogs.</li>\
                    <li>Contribution: Link to their contributions.</li>\
                </ul>\
                <p>Clicking Logs will show the following:</p>\
                <ul>\
                    <li>Ban Log: Link to their ban log.</li>\
                    <li>Block Log: Link to their block log.</li>\
                    <li>Logs: Link to all their logs.</li>\
                </ul>\
                <p>Clicking JS & CSS will show the following:</p>\
                <ul>\
                    <li>Wikia.css: Link to their wikia.css.</li>\
                    <li>Common.css: Link to their common.css.</li>\
                    <li>Chat.css: Link to their chat.css.</li>\
                    <li>Global.css: Link to their global.css.</li>\
                    <li>Wikia.js: Link to their wikia.js.</li>\
                    <li>Common.js: Link to their common.js.</li>\
                    <li>Chat.js: Link to their chat.js.</li>\
                    <li>Global.js: Link to their global.js.</li>\
                </ul>\
			<br />\
            <h3>Interwiki</h3>\
                <p>The wikia name entered in the input box will link to it\'s:</p>\
                <ul>\
                    <li>RecentChanges: Special:RecentChanges page.</li>\
                    <li>Wiki Activity: Special:WikiActivity page.</li>\
                    <li>Special Pages: Special:SpecialPages page.</li>\
                    <li>Wanted Pages: Special:WantedPages page.</li>\
                    <li>Wanted Files: Special:WantedFiles page.</li>\
                    <li>Broken Redirects: Special:BrokenRedirects page.</li>\
                    <li>Uncat Pages: Special:UncategorizedPages page.</li>\
                    <li>Uncat Files: Special:UncategorizedFiles page.</li>\
                </ul>\
                <p>On the second input box, the page on that wiki will open. </p>\
			<br />\
            <h3>MediaWiki</h3>\
                <p>The wikia name entered in the input box will link to it\'s:</p>\
                <ul>\
                    <li>Common.css: Common.css page.</li>\
                    <li>Wikia.css: Wikia.css page.</li>\
                    <li>Chat.css: Chat.css page.</li>\
                    <li>Common.js: Common.js page.</li>\
                    <li>Wikia.js: Wikia.js page.</li>\
                    <li>Chat.js: Chat.js page.</li>\
                </ul>\
			<br />\
            <h3>Open Page</h3>\
                <p>Enter a page and and it\'ll link to it once you click \'Open\'.</p>\
			<br />\
            <h3>Video</h3>\
                <p>Enter a youtube video url, after v=.</p>\
            	<ul>\
                    <li>Add: Opens video below.</li>\
                    <li>Remove: Stops and removes the video.</li>\
                    <li>Pop Up: Opens the video in a Pop Up modal </li>\
                </ul>\
			<br />\
            <h3>Music</h3>\
                <p>Enter a youtube video url, after v=.</p>\
            	<ul>\
                    <li>Add: Shows the music interface.</li>\
                    <li>Remove: Removes the music and hides the music interface.</li>\
                    <li>Play: Plays music.</li>\
                    <li>Pause: Pauses music.</li>\
                </ul>\
        </div>', {
            width: 800
        });

    rail.append(helpbutton);
    rail.append(aboutbutton);
    rail.append(switchrail);
    rail.append(mtrail);
    rail.append(uirail);
    rail.append(iwrail);
    rail.append(mwrail);
    rail.append(pgrail);
    rail.append(videorail);
    rail.append(murail);
    mtrail.hide();
    uirail.hide();
    iwrail.hide();
    mwrail.hide();
    pgrail.hide();
    videorail.hide();
    murail.hide();
    rail.appendTo($('.right-rail'));
    CSS = 'section#_WikiaPage {\
    position: absolute;\
    bottom: 0;\
    top: 0;\
}' 
var css = document.createElement('style');
css.innerHTML = CSS;
document.body.appendChild(css);

userhidden = !userhidden;
    $('.mainuser').slideToggle(250, function() {
        if (userhidden)
        $(this).parent().parent().hide();
    });

logshidden = !logshidden;
    $('.logs').slideToggle(250, function() {
        if (logshidden)
        $(this).parent().parent().hide();
});

mwuserhidden = !mwuserhidden;
$('.mwuser').slideToggle(250, function() {
        if (mwuserhidden)
        $(this).parent().parent().hide();
});
}
