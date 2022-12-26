const tablaSustitucion = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    ...
    z: 26
  }
  Crea una función que reciba el objeto de la tabla de sustitución como parámetro. Esta función será la encriptadora.
  
  En la función encriptadora, recorre el mensaje original carácter por carácter y, para cada uno, busca el carácter sustituto en la tabla de sustitución.
  
  Almacena cada carácter sustituto en una nueva cadena de texto, que será el mensaje cifrado.
  
  Devuelve el mensaje cifrado como resultado de la función.
  
  Para utilizar la función encriptadora, basta con llamarla y pasarle como parámetros el mensaje original y la tabla de sustitución. Por ejemplo:
  
  Copy code
  const mensajeCifrado = encriptar(mensajeOriginal, tablaSustitucion);
  Es importante tener en cuenta que la tabla de sustitución puede ser cualquier objeto JavaScript que contenga parejas de caracteres originales y sustitutos. Por ejemplo, en lugar de un objeto, podrías utilizar un array o una matriz. También podrías utilizar cualquier otro tipo de valor, como números o incluso booleanos, siempre y cuando el algoritmo de encriptación esté diseñado para trabajar con ellos.
  
  
  
  
  