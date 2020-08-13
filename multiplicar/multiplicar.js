const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(limite)) {
            reject('El valor introducido no es un numero');
            return;
        }

        let data = '';

        console.log('========================='.green);
        console.log(`=======Tabla de ${base}=======`.green);
        console.log('========================='.green);

        for (let i = 1; i <= limite; i++) {
            data += `\n ${base} * ${i} = ${base*i}`
        }

        resolve(`tabla del ${base} con limite ${limite}: ${data}`);
    })

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`
        }



        fs.writeFile(`tablas/tabla-${base}-limite${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-limite-${limite}.txt`.rainbow);

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}