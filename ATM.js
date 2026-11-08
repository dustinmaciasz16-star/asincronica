function retirarDinero(monto) {
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            const saldoDisponible = 500;
            if (monto > 0 && monto <= saldoDisponible) {
                const saldoRestante = saldoDisponible - monto;
                resolver(`Retiro exitoso de  $${monto}` +  
                        ` tu saldo restante es:  $${saldoRestante}`);
            }else{
                reject("fondo insuficiente limite de retiro : $500")
            }
        }, 1500);
    });
}

retirarDinero(200).then((mensaje) =>{ 
    console.log(mensaje);
}).catch((error) =>{ 
    console.log(error);
});

retirarDinero(600).then((mensaje) =>{ 
    console.log(mensaje);
}).catch((error) =>{ 
    console.log(error);
});