console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    collection.push(album);
    return album;
}

addToCollection('Goths', 'the mountain goats', '2015');
console.log(collection[0]); //album 1

addToCollection('Bleed Out', 'the mountain goats', '2022');
console.log(collection[1]); //album 2

addToCollection('Whats Going On', 'Marvin Gaye', '1971');
console.log(collection[2]); //album 3

addToCollection('Hell Yeah', 'Hell Yeah', '2007');
console.log(collection[3]); //album 4

addToCollection('Big Idgies Big Day', 'The Big Idgies', '2022');
console.log(collection[4]); //album 5

addToCollection('The Truth About', 'GridLick', '2022');
console.log(collection[5]); //album 6