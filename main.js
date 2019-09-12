/* Your job is to sign each of these promising young music stars to the appropriate label.

JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.


Create an array for each of these record labels. */
const JumpStop = [];
const Chatten = [];
const Polar =[];

//Function for country + bluegrass artist//
const createCountryArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const artist1 = createCountryArtist("Bruce", "Country", 23)
Chatten.push(artist1)

const artist2 = createCountryArtist("Avilee", "Country", 19)
Chatten.push(artist2)

const artist3 = createCountryArtist("Bartholomew", "Bluegrass", 23)
Chatten.push(artist3)

//Function for Pop//
const createPopArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const pop1 = createPopArtist("Jensen", "Pop", 20)
Polar.push(pop1)

const pop2 = createPopArtist("Austin", "Pop", 22)
Polar.push(pop2)

//Function for Rap//
const createRapArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const rap1 = createRapArtist("Dre Funkz", "Funk", 20)
JumpStop.push(rap1)

const rap2 = createRapArtist("Dusta", "Rap", 21)
JumpStop.push(rap2)

const rap3 = createRapArtist("Loyonce", "Rap", 27)
JumpStop.push(rap3)

console.log(Chatten);
console.log(Polar);
console.log(JumpStop);