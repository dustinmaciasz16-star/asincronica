function ConsultarClima(ciudad) {
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            if (!ciudad || ciudad.trim() === "") {
                reject("Error: La ciudad no puede estar vacía");
                return;
            } else {
                const clima = { temperatura: "24°C", condicion: "Soleado" };
                resolver(clima);

            }
        }, 1500);
    });
}

async function mostrarClima(ciudad) {
    try {
        const clima = await ConsultarClima(ciudad);
        console.log(`El clima en ${clima.ciudad} es:`);
        console.log(`Temperatura: ${clima.temperatura}`);
        console.log(`Condición: ${clima.condicion}`);
    } catch (error) {
        console.log(error);
    }
}

mostrarClima("Quito");
mostrarClima("");
