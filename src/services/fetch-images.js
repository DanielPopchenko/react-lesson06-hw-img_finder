function fetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}}&page=${page}&key=34365152-dabc67f475d013033087d2982&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Images with ${name} tag not found :(`));
  });
}

const api = {
  fetchImages,
};

export default api;
