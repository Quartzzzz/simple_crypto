

// Inverser l'ordre des lettres dans le texte 
const inverseText = function(text) {
	let textInv = "";
	let char = text.toLowerCase().split("");
	for (let i = text.length-1; i >= 0; --i) {
		textInv += char[i];
	}
	return textInv;
}

// Convertir les lettres en symboles crypto
const convertirLettreCrypto = function(lettre) {
	let lettreCrypto = lettre
	switch (lettre.toLowerCase()) {
	  case "a":
	    lettreCrypto = "&"
	    break;
	  case "b":
	    lettreCrypto = "é"
	    break;
	  case "c":
	    lettreCrypto = "§"
	    break;
	  case "d":
	    lettreCrypto = "è"
	    break;
	  case "e":
	    lettreCrypto ="!"
	    break;
	  case "f":
	    lettreCrypto = "ç"
	    break;
	  case "g":
	    lettreCrypto = "à"
	    break;
	  case "h":
	    lettreCrypto = "ù"
	    break;
	  case "i":
	    lettreCrypto = "-"
	    break;
	  case "j":
	    lettreCrypto = ":"
	    break;
	  case "k":
	    lettreCrypto = "+"
	    break;
	  case "l":
	    lettreCrypto = "]"
	    break;
	  case "m":
	    lettreCrypto = "å"
	    break;
	  case "n":
	    lettreCrypto = "„"
	    break;
	  case "o":
	    lettreCrypto = "."
	    break;
	  case "p":
	    lettreCrypto = "K"
	    break;
	  case "q":
	    lettreCrypto = "#"
	    break;
	  case "r":
	    lettreCrypto = "$"
	    break;
	  case "s":
	    lettreCrypto = "Ô"
	    break;
	  case "t":
	    lettreCrypto = "/"
	    break;
	  case "u":
	    lettreCrypto = "="
	    break;
	  case "v":
	    lettreCrypto = "Á"
	    break;
	  case "w":
	    lettreCrypto = "0"
	    break;
	  case "x":
	    lettreCrypto = "@"
	    break;
	  case "y":
	    lettreCrypto = "["
	    break;
	  case "z":
	    lettreCrypto = "Ÿ"
	    break;
	  case "0":
	    lettreCrypto = "ï"
	    break;
	  case "1":
	    lettreCrypto = "¿"
	    break;
	  case "2":
	    lettreCrypto = "•"
	    break;
	  case "3":
	    lettreCrypto = "*"
	    break;
	  case "4":
	    lettreCrypto = "£"
	    break;
	  case "5":
	    lettreCrypto = "°"
	    break;
	  case "6":
	    lettreCrypto = "Ω"
	    break;
	  case "7":
	    lettreCrypto = "X"
	    break;
	  case "8":
	    lettreCrypto = "∏"
	    break;
	  case "9":
	    lettreCrypto = "Ë"
	    break;
	  case "'":
	    lettreCrypto = "e"
	    break;
	  case ".":
	    lettreCrypto = "Ø"
	    break;
	  case ",":
	    lettreCrypto = "^"
	    break;
	  case ".":
	    lettreCrypto = "~"
	    break;
	  case "?":
	    lettreCrypto = "r"
	    break;
	  case "!":
	    lettreCrypto = "%"
	    break;
	  case "-":
	    lettreCrypto = "©"
	    break;
	  case ")":
	    lettreCrypto = "€"
	    break;
	  case "(":
	    lettreCrypto = "ß"
	    break;
	  case " ":
	    lettreCrypto = "≈"
	    break;                                                                                                                                                                                                                                      
	} return lettreCrypto;
}

// Convertir un texte en crypto
const convertirTextCrypto = function(text) {
	let textInv = "";
  let textCrypto = "";
  textInv = inverseText(text);
  for (lettre of textInv) {
    textCrypto += convertirLettreCrypto(lettre);
  } return textCrypto;
}



console.log(convertirTextCrypto("Je suis un lutin")); // "„-/=]≈„=≈Ô-=Ô≈!:"
console.log(convertirTextCrypto("1492, Christophe Colomb decouvre l'Amerique")); // "!=#-$!å&e]≈!$Á=.§!è≈éå.].§≈!ùK./Ô-$ù§≈^•Ë£¿"
console.log(convertirTextCrypto("Un dragon nous poursuit !")); // "%≈/-=Ô$=.K≈Ô=.„≈„.à&$è≈„="



