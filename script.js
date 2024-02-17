const accessKey = 'XdjdIR_PdnflvJMTA814VrIqVffTnb71AKI0Pakiteg';


const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

let keyword = '';
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result) => {
        // create img tag
        const image = document.createElement('img');
        image.src = result.urls.small;

        // create a tag
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';

        // img tag appenChild into a tag
        imageLink.appendChild(image);

        // a tag appenChild into search-result div
        searchResult.appendChild(imageLink);
    });
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});