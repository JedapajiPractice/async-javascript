/*const API =
"https://youtube-v31.p.rapidapi.com/search?channelId=UCb2HGwORFBo94DmRx4oLzow&part=snippet%2Cid&order=date&maxResults=50";

const content = null || document.getElementById("content");

const options = {
method: "GET",
headers: {
  "X-RapidAPI-Key": "26fe4b34b5mshc6bc2816f8ad626p1a04dcjsnb143a8835af8",
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
},
};

async function fetchData(urlApi) {
const response = await fetch(urlApi, options);
const data = await response.json();
return data;
}

(async () => {
try {
  const videos = await fetchData(API);
  let view = `
  ${videos.items
    .map(
      (video) => `
    <div class="group relative">
    <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
        </h3>
    </div>
</div>
  `
    )
    .slice(0, 8)
    .join("")}
  `;
  content.innerHTML = view;
} catch (error) {
  console.log(error);
}
})();*/
const API =
"https://deezerdevs-deezer.p.rapidapi.com/playlist/8874807802";

const content = null || document.getElementById("content");

const options = {
method: "GET",
headers: {
  "X-RapidAPI-Key": "26fe4b34b5mshc6bc2816f8ad626p1a04dcjsnb143a8835af8",
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
},
};

async function fetchData(urlApi) {
const response = await fetch(urlApi, options);
const data = await response.json();
return data;
}

(async () => {
try {

  const pokemons = await fetchData(API);
  console.log('esto es pokemons.tracks.data',pokemons.tracks.data)
  let view = `
  ${pokemons.tracks.data
    .map(
      (pokemon) => `
    <div class="group relative">
    <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${pokemon.album.cover_medium}" alt="${pokemon.title}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${pokemon.title_short}
        </h3>
    </div>
</div>
  `
    )
    .slice(0, 8)
    .join("")}
  `;
  content.innerHTML = view;
} catch (error) {
  console.log(error);
}
})();

