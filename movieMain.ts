import {movie} from "./movie"


let movie1: movie = new movie ("The wolf of Wall Street",2013,"U.S","comedy")
movie1.setActors(["Leonardo DiCaprio"," Margot Robie"])
movie1.setDirector("Martin Scorsese")
movie1.setWriter("Terence Winter")
movie1.setLanguage("English")
movie1.setPlataform("Netflix")
movie1.setIsMCU(false)
movie1.setMainCharacterName("Jordan Belfort")
movie1.setProducer("Leonardo DiCaprio")
movie1.setDistributor("Universal Pictures")


let movie2:movie =new movie ("Spider-Man: Homecoming",2017,"U.S","sciencie fiction")
movie2.setActors(["Tom Holland"," Michael Keaton"," Zendaya"])
movie2.setDirector("Jon Whas")
movie2.setWriter("Jonathan Goldstein")
movie2.setLanguage("English")
movie2.setPlataform("Netflix")
movie2.setIsMCU(true)
movie2.setMainCharacterName("Peter Parker")
movie2.setProducer("Kevin Feige")
movie2.setDistributor("	Sony Pictures Releasing2")


let movie3: movie = new movie("The Big Short",2015,"U.S","biography")
movie3.setActors(["Christian Bale"," Brad Pitt"])
movie3.setDirector("Adam Mckay")
movie3.setWriter("Adam Mckay")
movie3.setLanguage("English")
movie3.setPlataform("Netflix")
movie3.setIsMCU(false)
movie3.setMainCharacterName("Michael Burry")
movie3.setProducer("Dede Gardner")
movie3.setDistributor("Paramount Pictures")



console.log(movie1)
console.log(movie2)
console.log(movie3)