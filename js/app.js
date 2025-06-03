
fetch('videos.json')
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById('gallery');

        data.forEach(video => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="title">${video.title}</div>
            `;
            card.onclick = () => openVideo(video.id);
            gallery.appendChild(card);
        });
    });

function openVideo(id) {
    document.getElementById('videoFrame').src = `https://drive.google.com/file/d/${id}/preview`;
    document.getElementById('popup').style.display = 'flex';
}

function closeVideo() {
    document.getElementById('videoFrame').src = "";
    document.getElementById('popup').style.display = 'none';
}
