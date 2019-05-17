document.addEventListener('DOMContentLoaded', () => {
    let Images = ["Images/125MMDLP.jpg", "Images/125MM-HOMEPAGE.jpg"];
    let slides = document.querySelector(".slides");
    let currentIndex = 0;
    let buttonLeft = document.getElementById("prev");
    let buttonRight = document.getElementById("next");

    buttonRight.addEventListener("click", function () {
        let imagesLength = Images.length;
        if (currentIndex < imagesLength - 1) {
            currentIndex++;
            console.log(Images[currentIndex])
            slides.setAttribute('src', Images[currentIndex]);
        }
    })

    buttonLeft.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            slides.setAttribute('src', Images[currentIndex]);
        }
    })
});
