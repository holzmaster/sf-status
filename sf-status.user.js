// ==UserScript==
// @name		SF-Status
// @author		holzmaster
// @description Zeigt den SF-Status eines Bildes an.
// @namespace	holzmaster
// @include		http://pr0gramm.com*
// @include		https://pr0gramm.com*
// @version		1.2.0
// @updateURL	https://holzmaster.github.io/sf-status/sf-status.user.js
// @downloadURL	https://holzmaster.github.io/sf-status/sf-status.user.js
// @copyright	2015+, holzmaster
// @icon		http://pr0gramm.com/media/pr0gramm-favicon.png
// @grant		none
// ==/UserScript==

(function () {
	const s = document.createElement('script');
	s.appendChild(document.createTextNode('(' + main.toString() + ')();'));
	(document.body || document.head || document.documentElement).appendChild(s);

	function main() {
		"use strict";
		var extensionStyle = ".flags { color: #FFF; padding: 0 0.5em 0.1em 0.45em; margin-left: 0.3em; vertical-align: baseline; text-transform: lowercase; text-align: center; text-shadow: 1px 1px 1px #7F7F7F; line-height: 1; font-weight: 700; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border-radius: 0.25em; }\n";
		extensionStyle += ".flags-1 { background-color: #5CB85C; }\n";
		extensionStyle += ".flags-2 { background-color: #F0AD4E; }\n";
		extensionStyle += ".flags-4 { background-color: #D9534F; }\n";

		function addStyle(css) {
			var head = document.getElementsByTagName("head")[0];
			if (!head) return;
			var style = document.createElement("style");
			style.type = "text/css";
			style.innerHTML = css;
			head.appendChild(style);
		};
		$(function () {
			p.View.Stream.Item.prototype.template =
				p.View.Stream.Item.prototype.template.replace(
						'melden</span>] <?js } ?>',
						'melden</span>] <?js } ?> <span class="flags flags-{item.flags}">{p.Stream.FLAG_NAME[item.flags]}</span>'
				);
			addStyle(extensionStyle);
		});
	}
})();
