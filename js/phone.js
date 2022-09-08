//Inputmask

const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const formTwo = document.querySelector('.form__sec');
const telSelectorTwo = formTwo.querySelector('input[type="tel"]');
const inputMaskTwo = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelectorTwo);

const formThree = document.querySelector('.form__three');
const telSelectorThree = formThree.querySelector('input[type="tel"]');
const inputMaskThree = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelectorThree);

new window.JustValidate('.form', {
    rules: {
        tel: {
            required: true,
            function: () => {
                const phone = telSelector.inputmask.unmaskedvalue();
                return phone.lenght = 10;
            }
        }
    },
    messages: {
        tel: {
            required: 'Введите телефона',
            function: 'Введите правильный номер телефона'
        }
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        thisForm.reset();
    }
});

new window.JustValidate('.form__three', {
    rules: {
        tel: {
            required: true,
            function: () => {
                const phone = telSelectorThree.inputmask.unmaskedvalue();
                return phone.lenght = 10;
            }
        }
    },
    messages: {
        tel: {
            required: 'Введите телефона',
            function: 'Введите правильный номер телефона'
        }
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        thisForm.reset();
    }
});

new window.JustValidate('.form__sec', {
    rules: {
        tel: {
            required: true,
            function: () => {
                const phone = telSelectorTwo.inputmask.unmaskedvalue();
                return phone.lenght = 10;
            }
        }
    },
    messages: {
        tel: {
            required: 'Введите телефона',
            function: 'Введите правильный номер телефона'
        }
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        thisForm.reset();
    }
});