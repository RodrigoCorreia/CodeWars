#The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single #100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

#Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

#Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in #the line?

#Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

####Examples:

#// === JavaScript ==

#tickets([25, 25, 50]) // => YES 
#tickets([25, 100])    
#        // => NO. Vasya will not have enough money to give change to 100 dollars

function tickets(peopleInLine){
  var val1=0,val2=0,val3=0, iCan="YES";  
  
	for(i=0;i<peopleInLine.length;i++){
  	if(peopleInLine[i]=== 25){
    	val1++;
    }
    if(peopleInLine[i]=== 50){
    	val2++;
    }
    if(peopleInLine[i]=== 100){
    	val3++;
    }    
    if(peopleInLine[i]===100){
    	if(val2!==0 && val1!==0){
      	val2--;
        val1--;
  			console.log(val3 + " " + val2+ " " + val1);              
        console.log("val2!==0 && val1!==0");
      }else if(val1 >= 3){
      	val1-=3;
      }else{
      	iCan = "NO";
      }
    }
    if(peopleInLine[i]===50){
    	if(val1 !==0){
      	val1--;
      }else{
      	iCan="NO";
      }
    }
  }
  return iCan;
}
