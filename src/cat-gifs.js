let catGifUrl = "https://thecatapi.com/api/images/get?format=src&type=gif";
let nextImage;
let preload

const preloadNextCatGif = () => {
  preload = new Promise(((resolve, reject) => {
    catGifUrl += "&cacheBuster=" + new Date().getTime();

    const image = new Image();
    image.style.width = '100%';
    image.onload = function () {
      console.log(catGifUrl, 'preloaded!')
      nextImage = image;
      resolve();
    }
    image.onerror = function (e) {
      reject(e)
    }
    image.src = catGifUrl;
  }))


};

const addCatImage = (jsElement) => {
  preload.then(() => {
    jsElement.innerHTML = '';
    jsElement.appendChild(nextImage);
  })
};

module.exports = { addCatImage, preloadNextCatGif }
