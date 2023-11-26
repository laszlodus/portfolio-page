window.addEventListener('load', function() {
    var form = document.getElementById('myForm'); 
    if (form) {
        form.reset(); // Reset form fields to blank
    }
});

const certificates = document.querySelectorAll('.certificate img'); //select of pictures

// Lightbox and close
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const close = document.getElementById('close');

certificates.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxContent.src = img.src;
    });
});

close.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
