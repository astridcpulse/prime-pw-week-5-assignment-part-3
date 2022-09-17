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

console.log(addToCollection('Goths', 'The Mountain Goats', '2015')); //album 1

console.log(addToCollection('Bleed Out', 'The Mountain Goats', '2022')); //album 2

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



function findByArtist ( artist ){
    let artistArray = [];

/*    for ( artist of collection){
        if( artist === collection[].artist){
           
            artistArray.push(artist);
        }
        
    }
    return artistArray;
    */ 
   // The above for loop I tried to write using "for of" style, but I couldn't quite figure out how to make it work in the end

    for( i = 0; i < collection.length; i++){
        if ( artist === collection[i].artist){
            artistArray.push(collection[i]);
        }
    }
    return artistArray;
}

console.log(findByArtist('GridLick')); // this test should return the single album by GridLick, because that artist only has one album in the collection array
console.log(findByArtist('The Mountain Goats')); // this test should return the two different albums by The Mountain Goats, also Goths wasn't released in 2015

