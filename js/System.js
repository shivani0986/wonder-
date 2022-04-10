class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(90);
        fill("BLUE");
        text(code,300,300)
        if(actualCode === enteredCode.toUpperCase()) 
            return true
        else
            return false
    }

}
