'use strict';

(function() {
	var win, x = 20, y = 20, w = 250, h = 400;

	document.querySelector('button').onclick = function () {
	  win = window.open('http://localhost:9999/', '', 'toolbar=no,location=no,width=250,height=400');
	};

	document.querySelector('#left').oninput = function (e) {
	  x = Number(e.target.value);
	  document.querySelector('#left-value').textContent = x;
	  win.moveTo(x, y);
	};

	document.querySelector('#top').oninput = function (e) {
	  y = Number(e.target.value);
	  document.querySelector('#top-value').textContent = y;
	  win.moveTo(x, y);
	};

	document.querySelector('#width').oninput = function (e) {
	  w = Number(e.target.value);
	  document.querySelector('#width-value').textContent = w;
	  win.resizeTo(w, h);
	};

	document.querySelector('#height').oninput = function (e) {
	  h = Number(e.target.value);
	  document.querySelector('#height-value').textContent = h;
	  win.resizeTo(w, h);
	};

	var winProps = ['innerHeight', 'innerWidth', 'outerHeight', 'outerWidth', 'screenLeft', 'screenTop', 'screenX', 'screenY'];
	var screenProps = ['availHeight', 'availWidth', 'availLeft', 'availTop', 'height', 'width'];

	setInterval(function () {
		
		document.querySelector('#window-sizes').innerHTML = '';
		winProps.forEach(function (prop) {
			document.querySelector('#window-sizes').innerHTML += prop + ' : ' + window[prop] + '<br>';
		});

		document.querySelector('#screen-sizes').innerHTML = '';
		screenProps.forEach(function (prop) {
			document.querySelector('#screen-sizes').innerHTML += prop + ' : ' + window.screen[prop] + '<br>';
		});
	}, 1000);
})()