

const getStarted = () => {
	sheet = document.getElementById('bottomsheet');
	sheet.style.display = 'block';
	main = document.getElementsByTagName('main')[0]
	main.style.animationName = 'upwardpull';
	main.style.animationDuration = '1s';
	main.style.marginTop = '-53%';
	// document.getElementsByTagName('body')[0].style.top = '100px';
}