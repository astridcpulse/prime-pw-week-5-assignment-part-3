console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    collection.push(album);
    console.log(album);
    return album;
}

addToCollection('Goths', 'the mountain goats', '2015'); //album 1

addToCollection('Bleed Out', 'the mountain goats', '2022'); //album 2

addToCollection('Whats Going On', 'Marvin Gaye', '1971'); //album 3

addToCollection('Hell Yeah', 'Hell Yeah', '2007'); //album 4

addToCollection('Big Idgies Big Day', 'The Big Idgies', '2022'); //album 5

addToCollection('The Truth About', 'GridLick', '2022');  //album 6

console.log(collection);