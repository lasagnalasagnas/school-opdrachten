document.addEventListener('DOMContentLoaded', function () {
    let imageContainers = document.querySelectorAll('.left-section .image-container');

    imageContainers.forEach(container => {
        container.addEventListener('click', function () {
            updateRightSection(container);
        });
    });
});

function updateRightSection(imageContainer) {
    // Retrieve data from the clicked image container
    let title = imageContainer.getAttribute('data-title');
    let subtitle = imageContainer.getAttribute('data-subtitle'); // Not used here, but can be if needed
    let description = imageContainer.getAttribute('data-description');
    let trailerUrl = imageContainer.getAttribute('data-trailer');

    // Update the right section with the new movie info
    let rightTitleElement = document.querySelector('.right-section .box-title');
    let rightSubtitleElement = document.querySelector('.right-section .box-subtitle');
    let rightDescriptionElement = document.querySelector('.right-section .box-description');

    rightTitleElement.textContent = title;
    rightSubtitleElement.textContent = subtitle || "";  // You can decide if subtitle is optional
    rightDescriptionElement.textContent = description;

    // Update the video iframe with the new trailer URL
    let videoPlayer = document.getElementById('video-player');
    videoPlayer.src = trailerUrl + "?autoplay=1"; // Adds autoplay functionality if needed
}
