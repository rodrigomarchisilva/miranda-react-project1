export const fetchPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [postsJson, photosJson] = await Promise.all([
    postsResponse,
    photosResponse,
  ]);

  const [posts, photos] = await Promise.all([
    postsJson.json(),
    photosJson.json(),
  ]);

  const postsAndPhotos = posts.map((post, index) => {
    return { ...post, cover: photos[index].url };
  });

  return postsAndPhotos;
};
