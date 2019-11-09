function scrollTo() {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		if ((link.href && link.href.indexOf('#') != -1) && ((link.pathname == location.pathname) || ('/' + link.pathname == location.pathname)) && (link.search == location.search)) {
			link.onclick = scrollAnchors;
		}
	}
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({
		top: originalTop,
		left: 0,
		behavior: 'smooth'
	});
	const checkIfDone = setInterval(function () {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}

function triggerTab(event) {
	// logic for tab items
	document.querySelector(`#featuresTab`)
		.querySelectorAll(".tab-item")
		.forEach(item => {
			item.classList.remove("tab-active")
		})

	document.querySelector(`#${event.target.id}`).classList.add("tab-active")

	// logic for tab panes
	document.querySelector(`#featuresTabContent`)
		.querySelectorAll("[role='tabpanel']")
		.forEach(item => {
			item.classList.remove("tab-pane-active")
		})

	document.querySelector(`#tab-${event.target.id}`).classList.add("tab-pane-active")
}

// Activates smooth scroll functionality
scrollTo();

// Activates tab functionality
document.querySelectorAll(".tab-item").forEach(item => {
	item.addEventListener('click', triggerTab)
})
