var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];
var messages = ["What goes up must come down","Don't forget that the longshots often pay off the biggest",
    "If you shoot for the moon and miss, you will fall amongst the stars","When life gives you lemons, make lemonade",
"There is no I in team","Stop, drop, and roll", "Two heads are better than one","Make like a tree and leave",
"Great minds think DIFFERENTLY","You will be freindzoned, sorry bud","You will be written in the book of life",
    "This month will be unlucky, please try again"];
var images = ["img/signs.aquarius.png","img/signs.pisces.jpeg","img/signs.aries.jpeg","img/signs.taurus.jpeg",
    "img/signs.gemini.jpeg","img/signs.cancer.jpeg","img/signs.leo.jpeg","img/signs.virgo.jpeg","img/signs.libra.png",
    "img/signs.scorpio.jpeg","img/signs.sagittarius.jpeg","img/signs.capricorn.jpeg"];


/* Aquarius: Jan 20 - Feb 18
Pisces: Feb 19 - March 20
Aries: March 21 - April 19
Taurus: April 20 - May 20
Gemini: May 21 - June 20
Cancer: June 21 - July 22
Leo: July 23 - August 22
Virgo: August 23 - Sept 22
Libra: Sept 23 - Oct 22
Scorpio: Oct 23 - Nov 21
Sagittarius: Nov 22 - Dec 21
Capricorn: Dec 22 - Jan 19
 */


function isBirthday(day,month) {
    var today = new Date();

    var isDay = today.getDate();
    var isMonth = today.getMonth();
    if (day == isDay && month == isMonth + 1){

        return true;
    }return false;
}



function onSubmit(){
    var month = document.getElementById("birthMonth").value;
    var day = document.getElementById("birthDay").value;
    var name = document.getElementById("name").value;
    var sign = determineSign(month,day);

    if (checkName(name) == false){
        return false;
    }
    if (isBirthday(day,month) == true){
        document.getElementById("itIsBirthday").innerHTML ="Wow congrats on your birthday! Today will be extra special!";
    }
    checkBirthday(month,day);
    document.getElementById("name").innerHTML = name;
    document.getElementById("outputSign").innerHTML = "Congratulations " + name + "! Your sign is " + signs[sign];
    document.getElementById("outputMessage").innerHTML = "Here are a few wise words for you to follow in the upcoming month:  " + messages[sign];
    document.getElementById("outputImage").src = images[sign];


}

function determineSign(month,day){
    if((month == 1 && day>19) || (month == 2 && day<19)){
        return 0;
    }
    if ((month ==2&&day>18) || (month ==3 && day < 20)){
        return 1;
    }
    if ((month == 3 && day > 20) || (month == 4 && day <20)){
        return 2;
    }
    if ((month == 4 && day > 19) || (month == 5 && day <21)){
        return 3;
    }
    if ((month == 5 && day > 20) || (month == 6 && day <21)){
        return 4;
    }
    if ((month == 6 && day > 20) || (month == 7 && day <23)){
        return 5;
    }
    if ((month == 7 && day > 22) || (month == 8 && day <23)){
        return 6;
    }
    if ((month == 8 && day > 22) || (month == 9 && day <23)){
        return 7;
    }
    if ((month == 9 && day > 22) || (month == 10 && day <23)){
        return 8;
    }
    if ((month == 10 && day > 22) || (month == 11 && day <22)){
        return 9;
    }
    if ((month == 11 && day > 21) || (month == 12 && day <22)){
        return 10;
    }
    if ((month == 12 && day > 21) || (month == 1 && day <20)){
        return 11;
    }

    console.log(sign);
}
function checkName(name){
    if (name == ""){
        alert("Please enter a name");
        return false;
    }

}
function checkBirthday(month,day){
    if ((month == 2 && day > 28) || (month == 4 && day == 31)||(month ==6 && day == 31)
        || (month == 9 && day == 31) || (month == 11 && day == 31)){
        alert("Please enter a valid date");
    }
}
