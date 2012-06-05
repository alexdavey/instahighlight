/*global SyntaxHighlighter */

"use strict";

console.log('RUNNING');

var pre = document.getElementsByTagName('pre');

for (var i = 0, l = pre.length; i < l; i++) {
	pre[i].innerHTML = pre[i].innerText;
	pre[i].className = 'brush: cpp';
}

SyntaxHighlighter.all();
