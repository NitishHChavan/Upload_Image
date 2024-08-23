/*document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const form = document.getElementById('artistry-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // Show the popup
      document.getElementById('popupBox').style.display = 'flex';
    });
  
    // Handle closing the popup
    const closePopupBtn = document.getElementById('closePopupBtn');
    closePopupBtn.addEventListener('click', () => {
      document.getElementById('popupBox').style.display = 'none';
      // Redirect to gallery page
      document.getElementById('galleryPage').style.display = 'block';
      
      // Example: Fetching and displaying gallery images
      const gallery = document.getElementById('gallery');
      const images = ['image1.png', 'image2.png', 'image3.png']; // Replace with your image paths
      images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        gallery.appendChild(imgElement);
      });
    });
  });
 */

/*  document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const form = document.getElementById('artistry-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // Show the popup
      document.getElementById('popupBox').style.display = 'flex';
    });
  
    // Handle closing the popup
    const closePopupBtn = document.getElementById('closePopupBtn');
    closePopupBtn.addEventListener('click', () => {
      document.getElementById('popupBox').style.display = 'none';
  
      // Redirect to the gallery page
      window.location.href = 'gallery.html';
    });
  
    // Handle image upload
    const imageUpload = document.getElementById('image-upload');
    imageUpload.addEventListener('change', (event) => {
      const files = event.target.files;
      const galleryData = [];
      
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          galleryData.push(e.target.result);
          // Save to localStorage
          localStorage.setItem('galleryData', JSON.stringify(galleryData));
        };
        reader.readAsDataURL(file);
      }
    });
  });
  */

 
  
  document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const form = document.getElementById('artistry-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Show the popup
        document.getElementById('popupBox').style.display = 'flex';
    });

    // Handle closing the popup
    const closePopupBtn = document.getElementById('closePopupBtn');
    closePopupBtn.addEventListener('click', () => {
        document.getElementById('popupBox').style.display = 'none';

        // Redirect to the gallery page
        window.location.href = 'gallery.html';
    });

    // Handle image upload
    const imageUpload = document.getElementById('image-upload');
    imageUpload.addEventListener('change', (event) => {
        const files = event.target.files;
        const galleryData = [];

        for (const file of files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                galleryData.push(e.target.result);
                // Save to localStorage
                localStorage.setItem('galleryData', JSON.stringify(galleryData));
            };
            reader.readAsDataURL(file);
        }
    });

    // Populate gallery on page load
    const gallery = document.getElementById('gallery');
    const galleryData = JSON.parse(localStorage.getItem('galleryData')) || [];

    galleryData.forEach((imgSrc) => {
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = 'Gallery Image';
        gallery.appendChild(imgElement);
    });
});
