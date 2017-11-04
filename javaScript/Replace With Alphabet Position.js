#Welcome.

#In this kata you are required to, given a string, replace every letter with its position in the alphabet.

#If anything in the text isn't a letter, ignore it and don't return it.

#a being 1, b being 2, etc.

#As an example:

#alphabet_position("The sunset sets at twelve o' clock.")
#Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

function alphabetPosition(text) {
	var tex = text.toLocaleLowerCase().replace(/([^A-Za-z])/g, "");
  var res= "";
  for(i=0;i<tex.length;i++){
    switch(tex[i]) {
      case "a":
					res+= "1";
          break;
      case "b":
					res+= "2";
          break;
      case "c":
					res+= "3";
          break;
      case "d":
					res+= "4";
          break;
      case "e":
					res+= "5";
          break;
      case "f":
					res+= "6";
          break;
      case "g":
					res+= "7";
          break;
      case "h":
					res+= "8";
          break;
      case "i":
					res+= "9";
          break;
      case "j":
					res+= "10";
          break;
      case "k":
					res+= "11";
          break;
      case "l":
					res+= "12";
          break;
      case "m":
					res+= "13";
          break;
      case "n":
					res+= "14";
          break;
      case "o":
					res+= "15";
          break;
      case "p":
					res+= "16";
          break;
      case "q":
					res+= "17";
          break;
      case "r":
					res+= "18";
          break;
      case "s":
					res+= "19";
          break;
      case "t":
					res+= "20";
          break;
      case "u":
					res+= "21";
          break;
      case "v":
					res+= "22";
          break;
      case "w":
					res+= "23";
          break;
      case "x":
					res+= "24";
          break;  
      case "y":
					res+= "25";
          break;
      case "z":
					res+= "26";
          break;      
    }
    res+= (i < tex.length - 1? " " : "")
  }
  return res;
}
