const MovieForm = ()=>{
    function movieFormSubmitHandler(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues={};
        for( const[name,value] of formData.entries()) formValues[name]=value;
        console.log([...formData.entries()]);
        console.log(formValues);

    }
    return (
        <form onSubmit={movieFormSubmitHandler}>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" name="title"/>
            <label htmlFor="opening_text">Opening Text</label>
            <input id="opening_text" type="text" name="openingText"/>
            <label htmlFor="release_date">Release Date</label>
            <input id="release_date" type="text" name="releaseDate"/>
            <button type="submit">Add Movie</button>
        </form>
    )
}
export default MovieForm;