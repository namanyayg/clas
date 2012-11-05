window.onload = function() {

var about = e('about'),
	motive = e('motive'),
	contact = e('contact'),
	toAbout = e('toAbout'),
	toMotive = e('toMotive'),
	toContact = e('toContact');


function e(el) {
	return document.getElementById(el);
}

var control = {
	silence: function (pg1, pg2) {

		if (pg1.style.opacity !== 0) {
			pg1.style.opacity = 0;
			pg1.style.zIndex = -2;
			pg1.style.position = 'absolute';
		}

		if(pg2.style.opacity !== 0) {
			pg2.style.opacity = 0;
			pg2.style.zIndex = -2; 
			pg2.style.position = 'absolute';
		}

},

	rise: function rise(pg) {
		pg.style.opacity = 1;
		pg.style.zIndex = 1;
		pg.style.position = 'static';
		}

}


function onlyAbout() {
	control.silence(motive, contact);
	control.rise(about);

	return false;
}

function onlyMotive() {
	control.silence(about, contact);
	control.rise(motive);

	return false;
}

function onlyContact() {
	control.silence(about, motive);
	control.rise(contact);

	return false;
}


toAbout.onclick = onlyAbout;
toMotive.onclick = onlyMotive;
toContact.onclick = onlyContact;

onlyAbout();
}