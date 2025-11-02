const password = document.getElementById('password');
const passwordAgain = document.getElementById('password-again');
const registerName = document.getElementById('name');
const surname = document.getElementById('surname');
const homeBtn = document.getElementById('homepage');

homeBtn.addEventListener('click', () => {
    location.href = 'index.html';
});

password.addEventListener('input', () => {
    comparePasswords();
});

passwordAgain.addEventListener('input', () => {
    comparePasswords();
});

/**
 * Check if passwords match and add style class accordingly
 */
const comparePasswords = () => {
    if (password.value == '' && passwordAgain.value == '') {
        password.classList.remove('invalid', 'valid');
        passwordAgain.classList.remove('invalid', 'valid');
        return;
    }

    if (password.value != passwordAgain.value) {
        password.classList.remove('valid');
        passwordAgain.classList.remove('valid');
        password.classList.add('invalid');
        passwordAgain.classList.add('invalid');
    } else {
        password.classList.remove('invalid');
        passwordAgain.classList.remove('invalid');
        password.classList.add('valid');
        passwordAgain.classList.add('valid');
    }
}

registerName.addEventListener('input', () => {
    checkString(registerName);
});

surname.addEventListener('input', () => {
    checkString(surname);
});

/**
 * Validates string (first name or last name).
 * Allows letters with diacritics, single spaces, apostrophes, and hyphens.
 *
 * @param input The input element containing the name to validate.
 */
const checkString = (input) => {
    const regex = /^[\p{L}]+(?:[\s'-][\p{L}]+)*$/u;

    if (input.value == '') {
        input.classList.remove('invalid', 'valid');
        return;
    }
    
    if (regex.test(input.value)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}
