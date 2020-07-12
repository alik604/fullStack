$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();


    });
});


function getMovies(searchText) {
    let output = "";
    axios.get('http://www.omdbapi.com?s=' + searchText + "&apikey=a1e5da08")
        .then((res) => {
            console.log(res);
            let movies = res.data.Search;
            for (var i = 0; i < 10; i++) {
                output +=
                    '<div class="col-md-3"><div class="well text-center"><img src="${res.data.Search[i].Poster}"><h5>${res.data.Search[i].Title}</h5><a onclick="movieSelected($'
                {
                    res.data.Search[i].imdbID
                }
                ')"class="btn btn-primary"href="#">Movie Details</a></div></div>';
            }
        }).then(() => {
        $('#movies').html(output);
    })
        .catch((err) => {
            console.log(err);
        });
}//func

function getMovie() {

}