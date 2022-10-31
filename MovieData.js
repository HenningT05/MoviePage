class Movie {
    constructor(MovieName, Name_Font_Size, ImageDisplayTag, ImageBannerTag, Lenght_Hours,Lenght_Minuts, Year, WTW_Netflix, Netflix_Data, WTW_HBO, HBO_Data, WTW_Disney, Disney_Data, WTW_Apple, Apple_Data, WTW_Youtube, YouTube_Data, WTW_Date_Update, Age_Restriction, Ganera, IMDB_Rating, Letterboxb_Rating, MovieDirectorImg, MovieDirectorName, Actor1IMG, Actor1Name, Actor1Role, Actor2IMG, Actor2Name, Actor2Role, Actor3IMG, Actor3Name, Actor3Role, Actor4IMG, Actor4Name, Actor4Role, Actor5IMG, Actor5Name, Actor5Role, Actor6IMG, Actor6Name, Actor6Role) {
        this.MovieName = MovieName;
        this.Name_Font_Size = Name_Font_Size;
        this.ImageDisplayTag = ImageDisplayTag;
        this.ImageBannerTag = ImageBannerTag;
        this.Lenght_Hours = Lenght_Hours;
        this.Lenght_Minuts = Lenght_Minuts;
        this.Year = Year;
        this.WTW_Netflix = WTW_Netflix;
        this.Netflix_Data = Netflix_Data;
        this.WTW_HBO = WTW_HBO;
        this.HBO_Data = HBO_Data;
        this.WTW_Disney = WTW_Disney; 
        this.Disney_Data = Disney_Data;
        this.WTW_Apple = WTW_Apple;
        this.Apple_Data = Apple_Data;
        this.WTW_Youtube = WTW_Youtube;
        this.YouTube_Data = YouTube_Data;
        this.WTW_Date_Update = WTW_Date_Update;
        this.Age_Restriction = Age_Restriction;
        this.Ganera = Ganera;
        this.IMDB_Rating = IMDB_Rating;
        this.Letterboxb_Rating = Letterboxb_Rating;
        this.MovieDirectorImg = MovieDirectorImg;
        this.MovieDirectorName = MovieDirectorName;
        this.Actor1IMG = Actor1IMG;
        this.Actor1Name = Actor1Name;
        this.Actor1Role = Actor1Role;
        this.Actor2IMG = Actor2IMG;
        this.Actor2Name = Actor2Name;
        this.Actor2Role = Actor2Role;
        this.Actor3IMG = Actor3IMG
        this.Actor3Name = Actor3Name;
        this.Actor3Role = Actor3Role;
        this.Actor4IMG = Actor4IMG;
        this.Actor4Name = Actor4Name;
        this.Actor4Role = Actor4Role;
        this.Actor5IMG = Actor5IMG;
        this.Actor5Name = Actor5Name;
        this.Actor5Role = Actor5Role;
        this.Actor6IMG = Actor6IMG;
        this.Actor6Name = Actor6Name;
        this.Actor6Role = Actor6Role;
    }
}

let FightClub = new Movie (
    "Fight Club",
    40,
    "BC_Movie_Images/FightClubBC",
    "Banner_Movie_Images/FightClub.jpg",
    2,
    19,
    1999,
    false,  //Netflix
    "",
    true,  //HBO
    "Stream",
    true,  //Disney
    "Stream",
    true,  //Apple
    "Rent",
    true,
    "Rent",
    "10.31 2022",
    16,
    2,
    "MindFuck",
    8.8,
    4.3,
    "PeopleImages/DavidFincher.jpg", //Dirctor
    "David Fincher",
    "PeopleImages/BradPitt.jpg",
    "Brad Pitt",
    "PeopleImages/EdwardNorton.jpg",
    "Edward Norton",
    "PeopleImages/HelenaBonhamCarter.jpg", 
    "Helena Bonham Carter",
    "Meat Loaf image",
    "Meat Loaf",
    "Meat Loaf image",
    "Meat Loaf",
    "David Andrews image",
    "David Andrews"
);

let SpiderMan_FarFormHome = new Movie (
    "Spider-Man: Far from Home",
    "Imge tag",
    2,
    9,
    2019,
    false,
    true,
    false,
    true,
    12,
    2,
    "MindFuck",
    "Action",
    "U",
    7.4,
    "Jon Watts iamge",
    "Jon Watts",
    "Tom Holland image",
    "Tom Holland",
    "Samuel L. Jackson Image",
    "Samuel L. Jackson",
    "Jake Gyllenhaal image",
    "Jake Gyllenhaal",
    "Marisa Tomei image",
    "Marisa Tomei",
    "Jon Favreau image", 
    "Jon Favreau",
    "Zendaya image",
    "Zendaya"
);
    