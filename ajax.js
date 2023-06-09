$(document).ready(function () {
$('#search').on('submit', function (event) {
    event.preventDefault();

    const searchTerm = $('#searchTerm').val();
    let endpoint = 'https://itunes.apple.com/search';
    let params = {
        term: searchTerm,
        filter: 'full',
        limit: 36,
    }

    $.get(
        endpoint,
        params,
        function (data) {
            // this called in the future, when a response is retrieved
            console.log('response,', data);

            $('#results').html('');

            data.results.forEach(result => {
                if (result.kind) {
                    $('#results').append(`<h3>${result.kind}</h3>`);
                }
                if (result.artistName) {
                    $('#results').append(`<h3>${result.artistName}</h3>`);
                }
                if (result.collectionName) {
                    $('#results').append(`<h3>${result.collectionName}</h3>`);
                }
                if (result.trackName) {
                    $('#results').append(`<h3>${result.trackName}</h3>`);
                }
            });
        },
        'json'
    );
});
});

