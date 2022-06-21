exports.addFilm = async (collection, filmObj) => {
    try {
        // add database entry using in method of insertOne
        // and passing the filmObj enetered by the user.
        const addEntry = await collection.insertOne(filmObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
};

exports.listFilms = async (collection) => {
    try {
        const filmList = await collection.find().toArray();
        console.log(filmList);
    } catch (error) {
        console.log(error);
    }
};

//Create function for updating database entry

//Create function to delete one or more database entries.