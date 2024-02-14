window.onload = function () {
	let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector('.menu');

	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	})

	document.addEventListener('click', function (e) {
		if (!menuBtn.contains(e.target)) {
			menu.classList.remove('active');
			menuBtn.classList.remove('active');
		}
	})

}

