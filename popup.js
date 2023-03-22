const popup1Button = document.querySelector('#popup1-button');
const popup1Dialog = document.querySelector('#popup1-dialog');
const popup1CloseButton = document.querySelector('#popup1-close-button');

popup1Button.addEventListener('click', () => {
    popup1Dialog.showModal();
});

popup1CloseButton.addEventListener('click', () => {
    popup1Dialog.close();
});

//opup2
const popup2Button = document.querySelector('#popup2-button');
const popup2Dialog = document.querySelector('#popup2-dialog');
const popup2CloseButton = document.querySelector('#popup2-close-button');

popup2Button.addEventListener('click', () => {
    popup2Dialog.showModal();
});

popup2CloseButton.addEventListener('click', () => {
    popup2Dialog.close();
});