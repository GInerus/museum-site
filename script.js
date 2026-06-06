function openModal(img) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}

// закрытие по клику вне картинки
window.onclick = function(event) {
    const modal = document.getElementById("imgModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
