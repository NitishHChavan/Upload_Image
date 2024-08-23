
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const galleryData = JSON.parse(localStorage.getItem('galleryData')) || [];
  
    galleryData.forEach((imgSrc) => {
      const imgElement = document.createElement('img');
      imgElement.src = imgSrc;
      imgElement.alt = 'Gallery Image';
      gallery.appendChild(imgElement);
    });
  });
  