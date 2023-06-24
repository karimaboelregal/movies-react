const pendingDispatch = () => { return { type: 2 } };


const successDispatch = (data) => { return { type: 1, payload: data} };

const errorDispatch = (error) => { return { type: 0, error: error } };




const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTRiMjczZTdiOTlhZjNlMzUyMzVhOTA2MTlhOTBlMCIsInN1YiI6IjY0NzcyNGNkODlkOTdmMDBkYjRlMzc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SH-88gxKSmKdC0ROaybfmcAQeHomGC6UqbIc_aQUhdE'
    }
  };


const detailsAct = (id) => (dispatch) => {

    dispatch(pendingDispatch());
    let url = "https://api.themoviedb.org/3/movie/"+id;
    fetch(url, options)
        .then(response => response.json())
        .then(element => {

            const data = { "id": element["id"], "title": element["title"], "overview": element["overview"], "picture": "https://image.tmdb.org/t/p/w500" + element["poster_path"], "rating": element["vote_average"], "count": element["vote_count"] }

            dispatch(successDispatch(data))
        }).catch(error => dispatch(errorDispatch(error)))


}

export default detailsAct;