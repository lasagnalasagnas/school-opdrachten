document.addEventListener('DOMContentLoaded', function () {
    let imageContainers = document.querySelectorAll('.left-section .image-container');

    imageContainers.forEach(container => {
        container.addEventListener('click', function () {
            updateRightSection(container);
        });
    });
});

function updateRightSection(imageContainer) {
    let title = imageContainer.getAttribute('data-title');
    let subtitle = imageContainer.getAttribute('data-subtitle');
    let description = imageContainer.getAttribute('data-description');
    let trailerUrl = imageContainer.getAttribute('data-trailer'); // Get the trailer URL

    // Update the text content in the right section
    let rightTitleElement = document.querySelector('.right-section .box-title');
    let rightSubtitleElement = document.querySelector('.right-section .box-subtitle');
    let rightDescriptionElement = document.querySelector('.right-section .box-description');
    
    rightTitleElement.textContent = title;
    rightSubtitleElement.textContent = subtitle || "";  // Optional subtitle
    rightDescriptionElement.textContent = description;

    // Get the iframe element (the video player)
    let videoPlayer = document.querySelector('.right-section iframe');
    
    // Check if trailerUrl exists and is valid
    if (trailerUrl) {
        videoPlayer.src = trailerUrl + "?autoplay=1"; // Add autoplay parameter to start video immediately
    } else {
        console.error("Invalid video URL or format");
    }
}
