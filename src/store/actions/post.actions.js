const pendingDispatch = () => { return { type: "pending" } };


const successDispatch = (data, highestName, highest, page) => { return { type: "success", payload: data, name: highestName, rating: highest, page: page } };

const errorDispatch = (error) => { return { type: "failure", error: error } };







const postAction = (page) => (dispatch) => {
    dispatch(pendingDispatch());
    let url = "https://api.themoviedb.org/3/discover/movie?page=" + page + "&api_key=654b273e7b99af3e35235a90619a90e0";
    fetch(url)
        .then(response => response.json())
        .then(json => {
            let list = [];
            let first = true;
            let highestname = "";
            let highest = 0;
            json['results'].forEach(element => {
                if (first) {
                    highestname = element["title"];
                    highest = element["vote_average"];
                    first = false;
                }
                if (element["vote_average"] > highest) {
                    highestname = element["title"];
                    highest = element["vote_average"];
                }
                list.push({ "id": element["id"], "title": element["title"], "overview": element["overview"], "picture": "https://image.tmdb.org/t/p/w500" + element["poster_path"], "rating": element["vote_average"], "count": element["vote_count"] });
            });


    

            dispatch(successDispatch(list, highestname, highest, page))
        }).catch(error => dispatch(errorDispatch(error)))


}

export default postAction;