function openLetter() {
    const letter = document.getElementById('letter');
    letter.style.display = 'block';
    setTimeout(() => {
        letter.style.opacity = 1;
    }, 10);
}

function closeLetter() {
    const letter = document.getElementById('letter');
    letter.style.opacity = 0;
    setTimeout(() => {
        letter.style.display = 'none';
    }, 500);
}
