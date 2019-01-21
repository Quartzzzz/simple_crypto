

// Réassembler les lettres d'un texte dans l'ordre initial
const reverseTextCrypto = function(textCrypto) {
	let cryptoRev = "";
	let char = textCrypto.split("");
	for (let i = textCrypto.length-1; i >= 0; --i) {
		cryptoRev += char[i];
	}
	return cryptoRev
}

// Convertir les symboles crypto en lettres
const convertirCryptoLettre = function(symbCrypto) {
	let lettre = symbCrypto
	switch (symbCrypto) {
	  case "&":
	    lettre = "a"
	    break;
	  case "é":
	    lettre = "b"
	    break;
	  case "§":
	    lettre = "c"
	    break;
	  case "è":
	    lettre = "d"
	    break;
	  case "!":
	    lettre = "e"
	    break;
	  case "ç":
	    lettre = "f"
	    break;
	  case "à":
	    lettre = "g"
	    break;
	  case "ù":
	    lettre = "h"
	    break;
	  case "-":
	    lettre = "i"
	    break;
	  case ":":
	    lettre = "j"
	    break;
	  case "+":
	    lettre = "k"
	    break;
	  case "]":
	    lettre = "l"
	    break;
	  case "å":
	    lettre = "m"
	    break;
	  case "„":
	    lettre = "n"
	    break;
	  case ".":
	    lettre = "o"
	    break;
	  case "K":
	    lettre = "p"
	    break;
	  case "#":
	    lettre = "q"
	    break;
	  case "$":
	    lettre = "r"
	    break;
	  case "Ô":
	    lettre = "s"
	    break;
	  case "/":
	    lettre = "t"
	    break;
	  case "=":
	    lettre = "u"
	    break;
	  case "Á":
	    lettre = "v"
	    break;
	  case "0":
	    lettre = "w"
	    break;
	  case "@":
	    lettre = "x"
	    break;
	  case "[":
	    lettre = "y"
	    break;
	  case "Ÿ":
	    lettre = "z"
	    break;
	  case "ï":
	    lettre = "0"
	    break;
	  case "¿":
	    lettre = "1"
	    break;
	  case "•":
	    lettre = "2"
	    break;
	  case "*":
	    lettre = "3"
	    break;
	  case "£":
	    lettre = "4"
	    break;
	  case "°":
	    lettre = "5"
	    break;
	  case "Ω":
	    lettre = "6"
	    break;
	  case "X":
	    lettre = "7"
	    break;
	  case "∏":
	    lettre = "8"
	    break;
	  case "Ë":
	    lettre = "9"
	    break;
	  case "e":
	    lettre = "'"
	    break;
	  case "Ø":
	    lettre = "."
	    break;
	  case "^":
	    lettre = ","
	    break;
	  case "~":
	    lettre = "."
	    break;
	  case "r":
	    lettre = "?"
	    break;
	  case "%":
	    lettre = "!"
	    break;
	  case "©":
	    lettre = "-"
	    break;
	  case "€":
	    lettre = ")"
	    break;
	  case "ß":
	    lettre = "("
	    break;
	  case "≈":
	    lettre = " "
	    break;                                                                                                                                                                                                                                      
	} return lettre;
}

// Convertir le texte crypto en texte inte
const convertirCryptoText = function(textCrypto) {
	let cryptoRev = "";
  let textDecoded = "";
  cryptoRev = reverseTextCrypto(textCrypto);
  for (symbCrypto of cryptoRev) {
    textDecoded += convertirCryptoLettre(symbCrypto);
  } return textDecoded;
}

console.log(convertirCryptoText("„-/=]≈„=≈Ô-=Ô≈!:")); // "je suis un lutin"
console.log(convertirCryptoText("!=#-$!å&e]≈!$Á=.§!è≈éå.].§≈!ùK./Ô-$ù§≈^•Ë£¿")); // ""1492, Christophe Colomb decouvre l'Amerique""
console.log(convertirCryptoText("%≈/-=Ô$=.K≈Ô=.„≈„.à&$è≈„=")); // ""Un dragon nous poursuit !""