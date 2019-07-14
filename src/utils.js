export function getData(url) {
  return fetch(url).then(response => response.json());
}

export function getActivePosts(array, pageSize, pageNumber) {
  pageNumber -= 1;
  return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}
