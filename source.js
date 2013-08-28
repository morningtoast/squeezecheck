	var running = false;
	var url;
	var view;
	var clock;
	var button;
	var breaks;
	var interval;

	function expand() {
		var w = breaks.shift();
		view.setAttribute("width",parseInt(w));
		breaks.push(w);

		document.getElementById("size").innerHTML = w;
	}

	function setUrl() {
		breaks = document.getElementById("breaks").value.split(",");
		nurl   = document.getElementById("url").value;

		if (nurl != url) {
			url = nurl;
			view.setAttribute("src",url);
		}
	}

	function init() {
		view     = document.getElementById("port");
		button   = document.getElementById("go");
		interval = button.getAttribute("data-interval");

		setUrl();
		expand();
	}

	function stop() {
		running = false;
		window.clearInterval(clock); 
		button.innerHTML = "Start";
	}

	function start(button) {
		if (running) {
			stop();
		} else {
			button.innerHTML = "Stop";
			running = true;

			setUrl();
			
			clock = window.setInterval(function() { expand(); },interval);
		}
	}