// Icon sizing helper code
function addPrevClass (e) {
	var target = e.target;
	if(target.getAttribute('src')) { // check if it is img
		var li = target.parentNode.parentNode;
		var prevLi = li.previousElementSibling;
		if(prevLi) {
			prevLi.className = 'prev';
		}
	
		target.addEventListener('mouseout', function(){
			if(prevLi) {
				prevLi.removeAttribute('class');
			}
		}, false);
	}
}
if (window.addEventListener) {
	document.getElementById('dock').addEventListener('mouseover', addPrevClass, false);
}

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-377975-12', 'auto');
  ga('send', 'pageview');
