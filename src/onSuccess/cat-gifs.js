let catGifUrl = "https://api.thecatapi.com/api/images/get?format=src&type=gif";
let nextUrl;
let nextImage;
let preload

export const preloadNextCatGif = () => {
  preload = new Promise((resolve, reject) => {
    catGifUrl += "&cacheBuster=" + new Date().getTime();

    const image = new Image();
    image.style.width = '100%';
    image.onload = function () {
      console.log(catGifUrl, 'preloaded!')
      nextImage = image;
      nextUrl = nextImage.src
      resolve();
    }
    image.onerror = function (e) {
      reject(e)
    }
    image.src = catGifUrl;
  })


};

export const addCatImage = (jsElement) => {
  if (!preload) {
    preloadNextCatGif()
  }

  preload.then(() => {
    jsElement.innerHTML = '';
    jsElement.appendChild(nextImage);
  }).then(() => {
    preload = null;
    preloadNextCatGif();
  })
};

export const nextCatGifUrl = () => {
  if (!preload) {
    preloadNextCatGif()
  }
  return preload.then(() => {
    preload = null;
    return nextUrl
  })
}
