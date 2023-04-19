$(document).ready(function () {
    const searchTerm = '=' + $('#search');
    const list = $('#list');

    let endpoint = 'https://itunes.apple.com/search?';
    let params = {
        term: searchTerm
    }
    $.get(
        endpoint,
        params,
        function (data) {
            // this called in the future, when a response is retrieved
            console.log('list', data);
            searchTerm.addEventListener("input", (event) =>{
                const searchString = event.target.value.toLowerCase();
                const filteredData = data.filter((item) =>
                item.toLowerCase().includes(searchString)
                );
                displayData(filteredData)
            });

            list.html('');
            const displayData = (data) => {
                const htmlString = data
                    .map((item) => `<li class="list-group-item">${item}</li>`)
                    .join("");
                list.innerHTML = htmlString;
            };

            data.results.forEach(result => {
                if (result.kind) {
                    list.append(`<h3>${result.kind}</h3>`);
                }
                if (result.artistName) {
                    list.append(`<h3>${result.artistName}</h3>`);
                }
                if(result.collectionName) {
                    list.append(`<h3>${result.collectionName}</h3>`);
                }
                if(result.trackName) {
                    list.append(`<h3>${result.trackName}</h3>`);
                }
            })

        },
        'json' // could also be html, xml, text
    );

    console.log('done loading');
});