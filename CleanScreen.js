var MainScreenOppend = true

function CleanScreen() {
    if(MainScreenOppend == true){
        document.getElementsByClassName("MainIndex")[0].style.visibility="hidden"; 
        MainScreenOppend = false
    }
    else{
        document.getElementsByClassName("MainIndex")[0].style.visibility="visible";
    }
}