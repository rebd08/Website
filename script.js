document.addEventListener('DOMContentLoaded', () => {
    console.log('Welkom op mijn militaire website!');

    const form = document.querySelector('form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        alert('Formulier verzonden!');
    });
});
