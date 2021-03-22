const animateGallery = () => {
  // Shows the first element in the gallery
  document.querySelector('figure.hidden').classList.replace('hidden', 'active');
  // Sets a counter to monitor which image will be showing next
  let galCounter = 1;
  // Get all the figures inside the page
  const figureList = document.querySelectorAll('figure');

  const cycleImages = () => {
    // Hide the previous image
    document.querySelector('.active').classList.replace('active', 'hidden');
    // Check if end of the gallery is reached
    if (galCounter >= figureList.length) {
      galCounter = 0;
    }
    // Display the next image
    figureList[galCounter].classList.replace('hidden', 'active');
    // Iterate the counter
    galCounter += 1;
  };

  // Calls the cycleImages function every 5 seconds
  setInterval(cycleImages, 5000);
};

export default animateGallery;
