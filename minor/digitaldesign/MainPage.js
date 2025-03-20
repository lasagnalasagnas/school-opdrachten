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
    let imgSrc = imageContainer.querySelector('img').src;
    let trailerUrl = imageContainer.getAttribute('data-trailer');

    let rightTitleElement = document.querySelector('.right-section .box-title');
    let rightSubtitleElement = document.querySelector('.right-section .box-subtitle');
    let rightDescriptionElement = document.querySelector('.right-section .box-description');
    rightTitleElement.textContent = title;
    rightSubtitleElement.textContent = subtitle;
    rightDescriptionElement.textContent = description;

    let whiteBox = document.querySelector('.right-section .white-box');
    whiteBox.innerHTML = '';

    if (trailerUrl) {
        let iframe = document.createElement('iframe');
        iframe.width = '750';
        iframe.height = '500';
        iframe.src = trailerUrl + '?rel=0';
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        whiteBox.appendChild(iframe);
    } else {
        let img = document.createElement('img');
        img.src = imgSrc;
        img.classList.add('box-image');
        img.draggable = false;
        whiteBox.appendChild(img);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    let imageContainers = document.querySelectorAll('.left-section .image-container');

    imageContainers.forEach(container => {
        container.addEventListener('click', function () {
            updateRightSection(container);
        });
    });

    let paintingList = document.querySelector('.painting-list');
    imageContainers.forEach(container => {
        let title = container.getAttribute('data-title');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        checkbox.setAttribute('data-id', container.id);
        let label = document.createElement('label');
        label.textContent = title;
        label.prepend(checkbox);

        let div = document.createElement('div');
        div.classList.add('painting-item');
        div.appendChild(label);

        paintingList.appendChild(div);
    });
});