$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

  function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
  }

  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }

  document.addEventListener('DOMContentLoaded', () => {
   const track = document.querySelector('.carousel-track');
   const logos = Array.from(track.children);
   const logoWidth = logos[0].getBoundingClientRect().width;

   // Clone logos to create a seamless loop
   logos.forEach(logo => {
       const clone = logo.cloneNode(true);
       track.appendChild(clone);
   });
});
