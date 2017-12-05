// Оживления попапа обратной связи

var feedback = document.querySelector(".feedback");
var feedbackPopup = document.querySelector(".write-us");
var feedbackClose = feedbackPopup.querySelector(".popup-close");
var feedbackName = document.querySelector("[name = name]");
var feedbackForm = document.querySelector(".write-us-form");
var feedbackEmail = document.querySelector("[name = email]");
var feedbackText = document.querySelector("[name = content");
var storage = localStorage.getItem("feedbackName");

feedback.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.add("popup-show");

	if (storage) {
		feedbackName.value = storage;
		feedbackEmail.focus();
	} else {
		feedbackName.focus();
	}
});

feedbackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("popup-show");
	feedbackPopup.classList.remove("popup-error");
});

feedbackForm.addEventListener("submit", function(evt) {
	evt.preventDefault();
	if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
		evt.preventDefault();
		feedbackPopup.classList.remove("popup-error");
		feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
		feedbackPopup.classList.add("popup-error");
	} else {
		localStorage.setItem("feedbackName", feedbackName.value);
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (feedbackPopup.classList.contains("popup-show")) {
			feedbackPopup.classList.remove("popup-show");
			feedbackPopup.classList.remove("popup-error");
		}
	}
});

// Оживления попапа с интерактивной картой

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".map");
var mapClose = mapPopup.querySelector(".popup-close");

mapLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("popup-show")) {
			mapPopup.classList.remove("popup-show");
		}
	}
});

