export const getAllJobs = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://lienflash-be.herokuapp.com/api/v1/jobs`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
}
