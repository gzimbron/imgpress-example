import { Compressor } from 'imgpress';

//Procesamos una imagen sin parametros

const imagenSola = await Compressor.imageCompress('./fisherman-2739115.jpg');

console.log('Imagen procesada sin parámetros:', imagenSola);

//Imagen procesada con nombre establecido y calidad al 50%
const imagenSola2 = await Compressor.imageCompress('./fisherman-2739115.jpg', './nuevoNombre.jpg', {
	quality: 50
});

console.log('Segunda imagen procesada:', imagenSola2);

//Procesamos una carpeta entera
const resultado = await Compressor.folderCompress('./originales', './imagenesProcesadas');

console.log('Folder procesado');

console.log(resultado);
