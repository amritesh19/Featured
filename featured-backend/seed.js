const { Genre } = require("./models/genre");
const { Movie } = require("./models/movie");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    name: "Documentary",
    movies: [
      { title: "Cracking the Shakespeare Code: I", duration: "50:18", language: "English" , ytubeSrc: "3XSx72gF0NQ", description: "This is the amazing story of Petter Amundsen, who believes he has deciphered a secret code hidden in Shakespeare’s first folio. He examines the codes to be found in Shakespeare’s plays and questions who really wrote them."},
      { title: "Eagles: The Kings of the Sky", duration: "28:39", language: "English" , ytubeSrc: "2P0VCMYZenw", description: "Whether in Alaska or in the Dolomites, eagles are generally seen as Kings of the skies. This film devotes itself on the one hand to the bald eagle and on the other, the Golden Eagle."},
      { title: "Vivekananda By Vivekananda", duration: "2:07:02", language: "Hindi" , ytubeSrc: "04ceHW8CVVU", description: "If there was one more Vivekananda, he would have understood what this Vivekananda has done... Vivekananda by Vivekananda His Life... in his own words"},
    ]
  },
  {
    name: "Animation",
    movies: [
      { title: "Father And Daughter", duration: "09:22", language: "English" , ytubeSrc: "CDprY-6IMG4", description: "A father says goodbye to his young daughter and leaves. As the wide Dutch landscapes live through their seasons so the girl lives through hers."},
      { title: "Pip The Dog", duration: "04:05", language: "Musical" , ytubeSrc: "07d2dXHYb94", description: "A heartwarming tale for underdogs everywhere, Pip is the story of a small dog with a big dream."},
      { title: "Le Gouffre", duration: "10:37", language: "Musical" , ytubeSrc: "bo2KQer1KNM", description: "An inspiring tale about friendship, sacrifice and conquering the impossible."},
    ]
  },
  {
    name: "Drama",
    movies: [
      { title: "Different", duration: "05:17", language: "English" , ytubeSrc: "yu24PZIbkoY", description: "A deaf girl comes across a boy who is paralyzed from the waist-down, but neither of them know about each other's differences."},
      { title: "The English Teacher", duration: "12:14", language: "English" , ytubeSrc: "fMpjENF1VDc", description: "Robert Brammel, a private English teacher who develops an unusual relationship with a new student.⁠ Featuring Louis James, Blake Ridder and Sophie Cardona."},
      { title: "A Social Life", duration: "08:26", language: "English" , ytubeSrc: "GXdVPLj_pIk", description: "Are you living the life that you post? A career driven woman named Meredith who's living the life she's always dreamed of... online."},
    ]
  },
  {
    name: "Thriller",
    movies: [
      { title: "A Simple Robbery", duration: "13:38", language: "English" , ytubeSrc: "lpZIMwh_Lng", description: "Becky and Stacey are two friends who enjoys taking money from rich men. But tragedy strikes when a robbery didn't go as planned."},
      { title: "The Damsel", duration: "10:30", language: "Hindi" , ytubeSrc: "LD0qEqx9rpY", description: "A young actor, two girls and series of events with tale of lies and revenge. In this suspense thriller film, nothing is what it looks like and truth is not what it may seem..."},
      { title: "Amber", duration: "09:48", language: "Hindi" , ytubeSrc: "Y5K_5KZkiOQ", description: "A barber at a highway barbershop is caught in a deadly situation when he realizes that his first customer of the day isn’t who he seems."},
    ]
  },
  {
    name: "Sci-fi",
    movies: [
      { title: "One-Minute Time Machine", duration: "05:40", language: "English" , ytubeSrc: "vBkBS4O3yvY", description: "Every time the beautiful Regina rejects his advances, James pushes a red button and tries again, all the while unaware of the reality and consequences of his actions."},
      { title: "Lie Detector", duration: "03:12", language: "English" , ytubeSrc: "CjVVNuraly8", description: "Dane only has one chance to make a stellar first impression. Good thing there's a lie detector present at his job interview! *BEEP* He's screwed."},
      { title: "Stealing Time", duration: "17:28", language: "English" , ytubeSrc: "UTO0ogdNMdY", description: "When a down-on-his-luck inventor builds a time machine to change the past, he unwittingly sets off a disastrous chain of events."},
    ]
  },
  {
    name: "Comedy",
    movies: [
      { title: "Kaun Ho Bhai?", duration: "13:03", language: "Hindi" , ytubeSrc: "fHWR_F5um-g", description: "Happy Holi. Knock Knock...Guess Who? This Film is about a greedy businessman who expects a lot from GOD."},
      { title: "Bus Stop", duration: "14:36", language: "English" , ytubeSrc: "nTQQiyy5mrQ", description: "Everyone knows what it is like to have a bad day. We all catch ourselves way too often thinking 'Today sucks' or 'Why me'."},
      { title: "Is This Free? ", duration: "08:36", language: "English" , ytubeSrc: "sxCWB47ZCLQ", description: "A whimsical comedy about creating remarkable situations from a most unremarkable question. "},
    ]
  }
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Movie.deleteMany({});
  await Genre.deleteMany({});

  for (let genre of data) {
    const { _id: genreId } = await new Genre({ name: genre.name }).save();
    const movies = genre.movies.map(movie => ({
      ...movie,
      genre: { _id: genreId, name: genre.name }
    }));
    await Movie.insertMany(movies);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
