const express = require('express');
const app = express();
const port = 3000;

app.get('/sumar/:a/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const resultado = a + b;

  res.send(`La suma de ${a} y ${b} es: ${resultado}`);
});
app.get('/concat/:a/:b/:c', (req, res) => {
    const concatenatedString = `${req.params.a} ${req.params.b} ${req.params.c}`;
    res.send(`Concatenación de parámetros: ${concatenatedString}`);
  });
app.get('/usuario/:a/localidad/:b',(req ,res)=>{
    res.send(`El usuario ${req.params.a} es de la Localidad ${req.params.b}`)
});
app.get('/plusByJSON', (req, res) => {
    const jsonText = req.query.jsonText;
    if (!jsonText) {
      return res.status(400).send('Parámetro JSON no proporcionado');
    }
  
    try {
        const decodedJsonText = decodeURIComponent(jsonText);
        const json = JSON.parse(decodedJsonText);
      
      const resultado = json.a + json.b;
      res.send(`La suma de a y b es: ${resultado}`);
    } catch (error) {
      res.status(400).send('Formato JSON inválido');
    }
  });
     app.get('/echo', (req, res) => {
    const texto = req.query.texto;
  
    if (!texto) {
      return res.status(400).send('Parámetro "texto" no proporcionado');
    }
  
    res.send(`Contenido de la variable "texto": ${texto}`);
  });
  app.get('/chequearNumeroPar/:a', (req, res) => {
    const parametroA = req.params.a;
  
    // Verificar si el parámetro es un número
    if (isNaN(parametroA)) {
      return res.status(401).send('El parámetro no es un número');
    }
  
    const numeroA = parseInt(parametroA);
  
    // Verificar si el número es par
    if (numeroA % 2 === 0) {
      res.status(200).send('El número es par');
    } else {
      res.status(400).send('El número no es par');
    }
  });

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
