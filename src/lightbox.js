console.log("lightbox script loaded");

const mainThumbnails = document.getElementsByName("main-thumbnail");
const mainProduct = document.getElementById("main-product");
const lightbox = document.getElementById("lightbox");
const productLightbox = document.getElementById("product-lightbox");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxThumbnails = document.getElementsByName("lightbox-thumbnail");

const prevBtns = document.querySelectorAll(".js-prev-btn");
const nextBtns = document.querySelectorAll(".js-next-btn");

let slideIndex = 0;

lightboxClose.addEventListener("click", () => {
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
});

mainThumbnails.forEach((thumbnail, ind) => {
  thumbnail.addEventListener("click", () => {
    window.scrollBy(0, 150);
    slideIndex = ind + 1;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    productLightbox.src = `./images/image-product-${slideIndex}.jpg`;
  });
});

lightboxThumbnails.forEach((thumbnail, ind) => {
  thumbnail.addEventListener("click", () => {
    slideIndex = ind + 1;
    productLightbox.src = `./images/image-product-${slideIndex}.jpg`;
  });
});

// next prev functionality

nextBtns.forEach((nextBtn, ind) => {
  nextBtn.addEventListener("click", () => {
    slideIndex += 1;
    console.log(ind);
    if (slideIndex > lightboxThumbnails.length) slideIndex = 1;

    ind === 0
      ? (productLightbox.src = `./images/image-product-${slideIndex}.jpg`)
      : (mainProduct.src = `./images/image-product-${slideIndex}.jpg`);
  });
});

prevBtns.forEach((prevBtn, ind) => {
  prevBtn.addEventListener("click", () => {
    slideIndex -= 1;
    if (slideIndex === 0) slideIndex = lightboxThumbnails.length;
    ind === 0
      ? (productLightbox.src = `./images/image-product-${slideIndex}.jpg`)
      : (mainProduct.src = `./images/image-product-${slideIndex}.jpg`);
  });
});
