const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8LeXCWOalN8SxlrPcG-PaQ&part=snippet%2Cid&order=date&maxResults=12';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5e0a5f3494msh61864f016de49f7p1ebe66jsn522cf29bf3a0',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = null || document.getElementById("content");

async function fetchData(url_api) {
        const response = await fetch(url_api, options);
        const result = await response.json();
        return result;

}

const x = fetchData(API);

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="" class="${video.snippet.description}">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,4).join('')}
        
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();