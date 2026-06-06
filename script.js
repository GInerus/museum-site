function openModal(img) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}

window.onclick = function(e) {
    const modal = document.getElementById("imgModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
}
