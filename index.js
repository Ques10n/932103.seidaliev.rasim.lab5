"use strict"

function openModal (targetModelId) {

    $("#" + targetModelId).fadeIn(400);
    $(".overlay").fadeIn(400);

}

function closeModal (targetModelId) {

    $("#" + targetModelId).fadeOut(400);
    $(".overlay").fadeOut(400);

}

const buttons = document.querySelectorAll(".block_news_openbtn");
buttons.forEach(element => {
    const targetModelId = element.getAttribute("target-model-id");

    element.addEventListener("click", () => openModal(targetModelId));
    document.querySelector(".overlay").addEventListener("click", () => closeModal(targetModelId));
});
