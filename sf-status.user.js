// ==UserScript==
// @name		SF-Status
// @author		holzmaster
// @description Zeigt den SF-Status eines Bildes an.
// @namespace	holzmaster
// @include		http://pr0gramm.com*
// @version		1.1.0
// @updateURL	https://raw.githubusercontent.com/pr0nopoly/sf-status/master/sf-status.user.js
// @downloadURL	https://raw.githubusercontent.com/pr0nopoly/sf-status/master/sf-status.user.js
// @copyright	2015+, holzmaster
// @icon		http://pr0gramm.com/media/pr0gramm-favicon.png
// @grant		none
// ==/UserScript==

(function() {
	$(function() {
		p.View.Stream.Item.prototype.template =
		p.View.Stream.Item.prototype.template
			.replace('Bild googeln </a> </span> <?js } ?>',
					 'Bild googeln </a> </span> <?js } ?> <span class="flags flags-{item.flags}">{p.Stream.FLAG_NAME[item.flags]}</span>');
	});
})();
