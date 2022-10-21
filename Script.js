var sitting_Exspanded = false
var mood_Exspanded = false
var ganeras_Exspanded = false
var choosen_Sitting = "AT Home Alone"
var choosen_Mood = ""

function Sitting_Div_Exspand(){ 
    if (sitting_Exspanded == true){
        document.getElementsByClassName("buttons_Setting")[0].style.height="50px"; 
        document.getElementById("button_Sitting_With_Friends").style.visibility="hidden"; 
        document.getElementById("button_Sitting_With_Family").style.visibility="hidden"; 
        document.getElementById('button_Setting_At_Home_Alone').innerHTML = choosen_Sitting;
        document.getElementById('button_Sitting_Exspand').innerHTML = "<";
        sitting_Exspanded = false
    }
    else{
        document.getElementsByClassName("buttons_Setting")[0].style.height="150px"; 
        document.getElementById('button_Setting_At_Home_Alone').innerHTML = "AT Home Alone";
        document.getElementById('button_Sitting_With_Friends').innerHTML = "With frinds";
        document.getElementById('button_Sitting_With_Family').innerHTML = "With Family";
        document.getElementById("button_Sitting_With_Friends").style.visibility="visible"; 
        document.getElementById("button_Sitting_With_Family").style.visibility="visible"; 
        document.getElementById('button_Sitting_Exspand').innerHTML = ">";
        sitting_Exspanded = true
    }
    
}

function Sitting_At_Home_Alone_Pressed(){
    if (sitting_Exspanded != false) {
        choosen_Sitting = "AT Home Alone"
        Sitting_Div_Exspand()
    }
}

function Sitting_With_Friends(){
    choosen_Sitting = "With frinds"
    Sitting_Div_Exspand()
}

function Sitting_With_Family(){
    choosen_Sitting = "With Family"
    Sitting_Div_Exspand()
}


//Sitting^-----------------------



function Mood_Div_Exspand() {
    if (mood_Exspanded == true){
        document.getElementsByClassName("buttons_Mood")[0].style.height="50px"; 
        document.getElementById("button_Mood_Happy").style.visibility="hidden"; 
        document.getElementById("button_Mood_Sad").style.visibility="hidden"; 
        document.getElementById("button_Mood_Angrey").style.visibility="hidden"; 
        document.getElementById("button_Mood_Empty").style.visibility="hidden";
        document.getElementById("button_Mood_Horny").style.visibility="hidden"; 
        document.getElementById("button_Mood_Goofy").style.visibility="hidden";
        document.getElementById("button_Mood_Evil").style.visibility="hidden"; 
        document.getElementById("button_Mood_Scared").style.visibility="hidden";    
        
        document.getElementById('button_Mood_Exspand').innerHTML = "<";
        if (choosen_Mood != ""){
            document.getElementsByClassName("buttons_Mood")[0].style.height="200px"; 
            document.getElementById("button_Mood_Happy").style.visibility="visible"; 
            document.getElementsByClassName("Mood_Row1")[0].style.left="80px"; 
            if(choosen_Mood === "Happy"){
                document.getElementById("happy_Button_ID").src="IndexImages/HappyMood.png";
                document.getElementById("happy_Button_ID").setAttribute("title", "Happy");
            }
            if(choosen_Mood === "Sad"){
                document.getElementById("happy_Button_ID").src="IndexImages/SadMood.png";
                document.getElementById("happy_Button_ID").setAttribute("title", "Sad");
            }
            if(choosen_Mood === "Angry"){
                document.getElementById("happy_Button_ID").src="IndexImages/AngryMood.png";
                document.getElementById("happy_Button_ID").setAttribute("title", "Angry");
            }
            if(choosen_Mood === "Empty"){ 
                document.getElementById("happy_Button_ID").src="IndexImages/EmptyMood.png";
                document.getElementById("happy_Button_ID").setAttribute("title", "Empty");
            }
            if(choosen_Mood === "Horny"){
                document.getElementById("happy_Button_ID").src="IndexImages/HornyMood.png";
                document.getElementById("happy_Button_ID").setAttribute("title", "Horny");
            }
            if(choosen_Mood === "Goofy"){ 
                document.getElementById("happy_Button_ID").src="IndexImages/GoofyMood.png";
                document.getElementById("happy_Button_ID").setAttribute("title", "Goofy");
            }
            if(choosen_Mood === "Scared"){
                document.getElementById("happy_Button_ID").src="IndexImages/ScaredMood.png";
                document.getElementById("happy_Button_ID").setAttribute("title", "Scared");
            }
            if(choosen_Mood === "Evil"){
                document.getElementById("happy_Button_ID").src="IndexImages/EvilMood.png";
                document.getElementById("happy_Button_ID").setAttribute("title", "Evil");
            }
            
        }
        mood_Exspanded = false
    }
    
    else {
        document.getElementsByClassName("buttons_Mood")[0].style.height="650px"; 
        document.getElementsByClassName("Mood_Row1")[0].style.left="0px"; 
        document.getElementById("happy_Button_ID").src="IndexImages/HappyMood.png";
        document.getElementById("button_Mood_Happy").style.visibility="visible"; 
        document.getElementById("button_Mood_Sad").style.visibility="visible"; 
        document.getElementById("button_Mood_Angrey").style.visibility="visible"; 
        document.getElementById("button_Mood_Empty").style.visibility="visible"; 
        document.getElementById("button_Mood_Horny").style.visibility="visible"; 
        document.getElementById("button_Mood_Goofy").style.visibility="visible";
        document.getElementById("button_Mood_Scared").style.visibility="visible"; 
        document.getElementById("button_Mood_Evil").style.visibility="visible";
        document.getElementById('button_Mood_Exspand').innerHTML = ">";
        mood_Exspanded = true
    }
}


function Mood_Happy(){
    if(mood_Exspanded == true){
        choosen_Mood = "Happy"
        Mood_Div_Exspand()
    }
}

function MoodSad(){
    choosen_Mood = "Sad"
    Mood_Div_Exspand()
}

function MoodAngry(){
    choosen_Mood = "Angry"
    Mood_Div_Exspand()
}

function MoodEmpty(){
    choosen_Mood = "Empty"
    Mood_Div_Exspand()
}

function MoodHorny(){
    choosen_Mood = "Horny"
    Mood_Div_Exspand()
}

function MoodGoofy(){
    choosen_Mood = "Goofy"
    Mood_Div_Exspand()
}

function MoodEvil(){
    choosen_Mood = "Evil"
    Mood_Div_Exspand()
}

function MoodScared(){
    choosen_Mood = "Scared"
    Mood_Div_Exspand()
}

//^Mood and Setting............................................................................



function Ganeras_Exspand(){
    

    if (ganeras_Exspanded == false){
        document.getElementsByClassName("buttons_Theam")[0].style.height="auto"; 
        document.getElementById("Ganera_Excender").style.top="0px"; 
        document.getElementById("Ganera_Excender").style.left="43.9%"; 
        document.getElementById('Ganera_Excender').innerHTML = "VIEW LESS";

        document.getElementById("button_Genra_Horror").style.visibility="visible"; 
        document.getElementById("button_Genra_Fantazy").style.visibility="visible"; 
        document.getElementById("button_Genra_History").style.visibility="visible"; 
        document.getElementById("button_Genra_Triller").style.visibility="visible"; 
        document.getElementById("button_Genra_War").style.visibility="visible"; 
        document.getElementById("button_Genra_Musical").style.visibility="visible"; 
        document.getElementById("button_Genra_Biography").style.visibility="visible"; 
        document.getElementById("button_Genra_Sport").style.visibility="visible"; 
        document.getElementById("button_Genra_Comedy").style.visibility="visible"; 
        document.getElementById("button_Genra_Adult").style.visibility="visible"; 
        ganeras_Exspanded = true
    }
    else{
        document.getElementsByClassName("buttons_Theam")[0].style.height="270px"; 
        document.getElementById("Ganera_Excender").style.top="-420px"; 
        document.getElementById("Ganera_Excender").style.left="43.3%"; 
        document.getElementById('Ganera_Excender').innerHTML = "VIEW MORE";

        document.getElementById("button_Genra_Horror").style.visibility="hidden"; 
        document.getElementById("button_Genra_Fantazy").style.visibility="hidden"; 
        document.getElementById("button_Genra_History").style.visibility="hidden"; 
        document.getElementById("button_Genra_Triller").style.visibility="hidden"; 
        document.getElementById("button_Genra_War").style.visibility="hidden"; 
        document.getElementById("button_Genra_Musical").style.visibility="hidden"; 
        document.getElementById("button_Genra_Biography").style.visibility="hidden"; 
        document.getElementById("button_Genra_Sport").style.visibility="hidden"; 
        document.getElementById("button_Genra_Comedy").style.visibility="hidden"; 
        document.getElementById("button_Genra_Adult").style.visibility="hidden"; 
        ganeras_Exspanded = false
    }
}