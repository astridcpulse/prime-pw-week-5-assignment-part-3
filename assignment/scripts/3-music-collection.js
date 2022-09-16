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

console.log(addToCollection('Goths', 'the mountain goats', '2015')); //album 1

console.log(addToCollection('Bleed Out', 'the mountain goats', '2022')); //album 2

console.log(addToCollection('Whats Going On', 'Marvin Gaye', '1971')); //album 3

console.log(addToCollection('Hell Yeah', 'Hell Yeah', '2007')); //album 4

console.log(addToCollection('Big Idgies Big Day', 'The Big Idgies', '2022')); //album 5

console.log(addToCollection('The Truth About', 'GridLick', '2022'));  //album 6

console.log(collection);



function showCollection(array){
    console.log(array.length);

    for (const item of array){
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}`);
    }
}

showCollection(collection);