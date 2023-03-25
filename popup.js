const popup1Button = document.querySelector('#popup1-button');
const popup1Dialog = document.querySelector('#popup1-dialog');
const popup1CloseButton = document.querySelector('#popup1-close-button');

popup1Button.addEventListener('click', () => {
    popup1Dialog.showModal();
});

popup1CloseButton.addEventListener('click', () => {
    popup1Dialog.close();
});