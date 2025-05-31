const movies = [
    {
      "title": "The Shawshank Redemption",
      "imageUrl": "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
      "rating": 9.3,
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
      "title": "The Godfather",
      "imageUrl": "https://m.media-amazon.com/images/I/41JBl4PzVPL._AC_.jpg",
      "rating": 9.2,
      "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
      "title": "The Dark Knight",
      "imageUrl": "https://m.media-amazon.com/images/I/51sG1poBxeL._AC_SY679_.jpg",
      "rating": 9.0,
      "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
    },
    {
      "title": "Pulp Fiction",
      "imageUrl": "https://m.media-amazon.com/images/I/51uQAXJGeRL._AC_SY679_.jpg",
      "rating": 8.9,
      "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
      "title": "Forrest Gump",
      "imageUrl": "https://m.media-amazon.com/images/I/41MygexSCrL._AC_.jpg",
      "rating": 8.8,
      "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
    },
    {
      "title": "Inception",
      "imageUrl": "https://m.media-amazon.com/images/I/51sG1poBxeL._AC_SY679_.jpg",
      "rating": 8.8,
      "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
    },
    {
      "title": "Fight Club",
      "imageUrl": "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg",
      "rating": 8.8,
      "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
    },
    {
      "title": "The Matrix",
      "imageUrl": "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg",
      "rating": 8.7,
      "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    {
      "title": "Goodfellas",
      "imageUrl": "https://m.media-amazon.com/images/I/51B4FJLW4QL._AC_SY679_.jpg",
      "rating": 8.7,
      "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito."
    },
    {
      "title": "The Lord of the Rings: The Return of the King",
      "imageUrl": "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg",
      "rating": 8.9,
      "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
    },
    {
      "title": "The Empire Strikes Back",
      "imageUrl": "https://m.media-amazon.com/images/I/51Bw4N4xIBL._AC_SY679_.jpg",
      "rating": 8.7,
      "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader."
    },
    {
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "imageUrl": "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg",
      "rating": 8.8,
      "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
    },
    {
      "title": "Star Wars",
      "imageUrl": "https://m.media-amazon.com/images/I/81A-rN2A3DS._AC_SY679_.jpg",
      "rating": 8.6,
      "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station."
    },
    {
      "title": "Interstellar",
      "imageUrl": "https://m.media-amazon.com/images/I/71X7nK2D73L._AC_SY679_.jpg",
      "rating": 8.6,
      "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      "title": "Parasite",
      "imageUrl": "https://m.media-amazon.com/images/I/91tqf3yPyIL._AC_SY679_.jpg",
      "rating": 8.6,
      "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
    },
    {
      "title": "The Lion King",
      "imageUrl": "https://m.media-amazon.com/images/I/71PAMbuGx6L._AC_SY679_.jpg",
      "rating": 8.5,
      "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
    },
    {
      "title": "Back to the Future",
      "imageUrl": "https://m.media-amazon.com/images/I/71OFqSRFDgL._AC_SY679_.jpg",
      "rating": 8.5,
      "description": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown."
    },
    {
      "title": "The Lord of the Rings: The Two Towers",
      "imageUrl": "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg",
      "rating": 8.7,
      "description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard."
    },
    {
      "title": "Gladiator",
      "imageUrl": "https://m.media-amazon.com/images/I/61tBEn6H3vL._AC_SY679_.jpg",
      "rating": 8.5,
      "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
    },
    {
      "title": "Schindler's List",
      "imageUrl": "https://m.media-amazon.com/images/I/51hyfYlF7LL._AC_SY679_.jpg",
      "rating": 9.0,
      "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
    },
    {
      "title": "Jurassic Park",
      "imageUrl": "https://m.media-amazon.com/images/I/81WcnNQ-TBL._AC_SY679_.jpg",
      "rating": 8.1,
      "description": "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok."
    },
    {
      "title": "The Green Mile",
      "imageUrl": "https://m.media-amazon.com/images/I/81nDqTFLkxL._AC_SY679_.jpg",
      "rating": 8.6,
      "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift."
    },
    {
      "title": "The Godfather: Part II",
      "imageUrl": "https://m.media-amazon.com/images/I/91WOmXEOMVL._AC_SY679_.jpg",
      "rating": 9.0,
      "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
    },
    {
      "title": "The Silence of the Lambs",
      "imageUrl": "https://m.media-amazon.com/images/I/51l5v9gTVML._AC_SY679_.jpg",
      "rating": 8.6,
      "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
    },
    {
      "title": "Saving Private Ryan",
      "imageUrl": "https://m.media-amazon.com/images/I/81aA3RFdUJL._AC_SY679_.jpg",
      "rating": 8.6,
      "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."
    },
    {
      "title": "Braveheart",
      "imageUrl": "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SY679_.jpg",
      "rating": 8.3,
      "description": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England."
    },
    {
      "title": "Avengers: Endgame",
      "imageUrl": "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
      "rating": 8.4,
      "description": "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    },
    {
      "title": "Titanic",
      "imageUrl": "https://m.media-amazon.com/images/I/71vWl8c-6YL._AC_SY679_.jpg",
      "rating": 7.9,
      "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
    },
    {
      "title": "The Departed",
      "imageUrl": "https://m.media-amazon.com/images/I/51b5YG6YyqL._AC_.jpg",
      "rating": 8.5,
      "description": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
    },
    {
      "title": "Whiplash",
      "imageUrl": "https://m.media-amazon.com/images/I/81t7wBcoNvL._AC_SY679_.jpg",
      "rating": 8.5,
      "description": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential."
    },
    {
      "title": "The Prestige",
      "imageUrl": "https://m.media-amazon.com/images/I/81u+MK5WrIL._AC_SY679_.jpg",
      "rating": 8.5,
      "description": "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other."
    },
    {
      "title": "The Wolf of Wall Street",
      "imageUrl": "https://m.media-amazon.com/images/I/71Qvs9i5a%2BL._AC_SY679_.jpg",
      "rating": 8.2,
      "description": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption, and the federal government."
    },
    {
      "title": "The Social Network",
      "imageUrl": "https://m.media-amazon.com/images/I/51fG07rKahL._AC_SY679_.jpg",
      "rating": 7.7,
      "description": "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business."
    },
    {
      "title": "Django Unchained",
      "imageUrl": "https://m.media-amazon.com/images/I/81u+MK5WrIL._AC_SY679_.jpg",
      "rating": 8.4,
      "description": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi."
    },
    {
      "title": "The Lion King",
      "imageUrl": "https://m.media-amazon.com/images/I/51p3KHSTPKL._AC_SY679_.jpg",
      "rating": 8.5,
      "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
    },
    {
      "title": "Se7en",
      "imageUrl": "https://m.media-amazon.com/images/I/81P5Q-iIfdL._AC_SY679_.jpg",
      "rating": 8.6,
      "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
    },
    {
      "title": "The Pianist",
      "imageUrl": "https://m.media-amazon.com/images/I/81gTWU4KK5L._AC_SY679_.jpg",
      "rating": 8.5,
      "description": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II."
    },
    {
      "title": "Inglourious Basterds",
      "imageUrl": "https://m.media-amazon.com/images/I/81nC8YSog3L._AC_SY679_.jpg",
      "rating": 8.3,
      "description": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same."
    },
    {
      "title": "The Great Gatsby",
      "imageUrl": "https://m.media-amazon.com/images/I/51a7f5u0KJL._AC_SY679_.jpg",
      "rating": 7.2,
      "description": "A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby."
    },
    {
      "title": "Shutter Island",
      "imageUrl": "https://m.media-amazon.com/images/I/81nC8YSog3L._AC_SY679_.jpg",
      "rating": 8.2,
      "description": "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane."
    },
    {
      "title": "Blade Runner 2049",
      "imageUrl": "https://m.media-amazon.com/images/I/71U0Pt15DSL._AC_SY679_.jpg",
      "rating": 8.0,
      "description": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years."
    },
    {
      "title": "Joker",
      "imageUrl": "https://m.media-amazon.com/images/I/61mIbhwu9kL._AC_SY679_.jpg",
      "rating": 8.4,
      "description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime."
    },
    {
      "title": "Logan",
      "imageUrl": "https://m.media-amazon.com/images/I/71hIpTOr1yL._AC_SY679_.jpg",
      "rating": 8.1,
      "description": "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety."
    },
    {
      "title": "Mad Max: Fury Road",
      "imageUrl": "https://m.media-amazon.com/images/I/81+QfQZY80L._AC_SY679_.jpg",
      "rating": 8.1,
      "description": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper, and a drifter named Max."
    },
    {
      "title": "The Revenant",
      "imageUrl": "https://m.media-amazon.com/images/I/81kclD18VvL._AC_SY679_.jpg",
      "rating": 8.0,
      "description": "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team."
    },
    {
      "title": "Alien",
      "imageUrl": "https://m.media-amazon.com/images/I/51A29viWEYL._AC_SY679_.jpg",
      "rating": 8.5,
      "description": "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission."
    },
    {
      "title": "The Truman Show",
      "imageUrl": "https://m.media-amazon.com/images/I/81edp3aE8PL._AC_SY679_.jpg",
      "rating": 8.1,
      "description": "An insurance salesman discovers his whole life is actually a reality TV show."
    },
    {
      "title": "The Sixth Sense",
      "imageUrl": "https://m.media-amazon.com/images/I/81djBpdPYfL._AC_SY679_.jpg",
      "rating": 8.2,
      "description": "A boy who communicates with spirits seeks the help of a disheartened child psychologist."
    },
    {
      "title": "The Dark Knight Rises",
      "imageUrl": "https://m.media-amazon.com/images/I/81jXKzJ-9FL._AC_SY679_.jpg",
      "rating": 8.4,
      "description": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Selina, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane."
    },
    {
      "title": "A Beautiful Mind",
      "imageUrl": "https://m.media-amazon.com/images/I/81rj8mfC8zL._AC_SY679_.jpg",
      "rating": 8.2,
      "description": "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish."
    },
    {
      "title": "Catch Me If You Can",
      "imageUrl": "https://m.media-amazon.com/images/I/81c6qFuYGaL._AC_SY679_.jpg",
      "rating": 8.1,
      "description": "A seasoned FBI agent pursues Frank Abagnale Jr. who, before his 19th birthday, successfully performed cons worth millions of dollars by posing as a Pan Am pilot, a doctor, and a legal prosecutor."
    },
    {
      "title": "The Shining",
      "imageUrl": "https://m.media-amazon.com/images/I/71-cDSkFA5L._AC_SY679_.jpg",
      "rating": 8.4,
      "description": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
    }
  ]
  

export default movies