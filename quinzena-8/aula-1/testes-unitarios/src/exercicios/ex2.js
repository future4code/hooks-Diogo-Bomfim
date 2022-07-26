export function checaPalindromo(frase) {
  return (
    frase.toLowerCase().split("").reverse().join("") 
    === 
    frase.toLowerCase().split("").reverse().join("")  
  );
}
