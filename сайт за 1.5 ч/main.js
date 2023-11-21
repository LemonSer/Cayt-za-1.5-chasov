const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

document.getElementById('email').textContent = email;

function redirectToSecondPage() {
const email = $('#form-1 [name="email"]').val();
location.href = `form2.html?email=${email}`;
}


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('input');
const zxc = document.querySelector('#zxc');

function isEmailValid(value) {
 	return EMAIL_REGEXP.test(value);
}

function onInput() {
	if (isEmailValid(input.value)) {
        zxc.style.visibility = 'hidden'
		input.style.borderColor = 'green';
	} else {
        zxc.style.visibility = 'visible'
		input.style.borderColor = 'red';
        
	}
}

input.addEventListener('input', onInput);

