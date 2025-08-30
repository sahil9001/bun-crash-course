import fetchUser from "./githubAPI";

(async () => {
    const userData = await fetchUser('sahil9001');
    document.querySelector('h1').innerHTML = JSON.stringify(userData);
})();