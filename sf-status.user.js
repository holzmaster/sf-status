// ==UserScript==
// @name		SF-Status
// @author		holzmaster
// @description Zeigt den SF-Status eines Bildes an.
// @namespace	holzmaster
// @include		http://pr0gramm.com*
// @version		1.0.0
// @updateURL	https://raw.githubusercontent.com/pr0nopoly/sf-status/master/sf-status.user.js
// @downloadURL	https://raw.githubusercontent.com/pr0nopoly/sf-status/master/sf-status.user.js
// @copyright	2015+, holzmaster
// @icon		http://pr0gramm.com/media/pr0gramm-favicon.png
// @grant		none
// ==/UserScript==

(function() {
	var extensionStyle = ".extension-flags { color: #FFF;	padding: 0 0.5em 0.1em 0.45em; /* 0.1em 0.5em 0.2em 0.45em; */	margin-left: 0.3em;	vertical-align: baseline;	text-transform: lowercase;	text-align: center;	text-shadow: 1px 1px 1px #7F7F7F;	line-height: 1;	font-weight: 700;	font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;	border-radius: 0.25em; }\n";
	extensionStyle += ".extension-flags-1 { background-color: #5CB85C; } /* #67D932 */\n";
	extensionStyle += ".extension-flags-2 { background-color: #F0AD4E; } /* #EE4D2E */\n";
	extensionStyle += ".extension-flags-4 { background-color: #D9534F; } /* #F00 */\n";

	function addStyle(css) {
		var head = document.getElementsByTagName("head")[0];
		if (!head)
			return;

		var style = document.createElement("style");
		style.type = "text/css";
		style.innerHTML = css;
		head.appendChild(style);
	};

	$(function() {
		p.View.Stream.Item.prototype.template =
		p.View.Stream.Item.prototype.template
			.replace('Bild googeln </a> </span> <?js } ?>',
					 'Bild googeln </a> </span> <?js } ?> <span class="extension-flags extension-flags-{item.flags}">{p.Stream.FLAG_NAME[item.flags]}</span>');
		addStyle(extensionStyle);
	});
})();
