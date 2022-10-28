var MainScreenOppend = true



function CleanScreen() {
    if(MainScreenOppend == false){
        document.getElementsByClassName("MainIndex")[0].style.visibility="visible";
        document.getElementsByClassName("MoviePage")[0].style.visibility="hidden"; 
    }
    if(MainScreenOppend == true){
        document.getElementsByClassName("MainIndex")[0].style.visibility="hidden"; 
        document.getElementsByClassName("MoviePage")[0].style.visibility="visible"; 
        MainScreenOppend = false
    }
   
}