//Semana 11, 12, 13
let contadorCitas = 0;

function registrarCitaReserva() {
    // 1. SEMANA 11: Variables y selección de elementos
    let nombre = document.getElementById("nombre").value;
    let motivo = document.getElementById("motivo").value;
    let mascotaSelect = document.querySelector('input[name="tipo_mascota"]:checked');

    if (!mascotaSelect || nombre.trim() === "" || motivo.trim() === "") {
        alert("¡Por favor completa todos los campos y selecciona una mascota!");
        return;
    }

    let mascota = mascotaSelect.value;

    // 2. SEMANA 12: Diálogos (confirm y prompt)
    let emergencia = confirm("¿Desea atención de emergencia prioritaria? (+ S/. 20.00)");
    let costoExtra = emergencia ? 20.00 : 0.00;

    let codigo = prompt("Ingrese su código de descuento (o déjelo vacío):");

    // 3. SEMANA 12: Arreglos y bucles para validar el código
    let codigosValidos = ["PELUDO10", "VET2026"];
    let descuento = 0;

    if (codigo) {
        for (let i = 0; i < codigosValidos.length; i++) {
            if (codigo.toUpperCase() === codigosValidos[i]) {
                descuento = 10.00;
                break;
            }
        }
    }

    // Calcular precio base según tu tabla (Perro/Gato = 80, Otro = 90)
    let precioBase = (mascota === "otro") ? 90.00 : 80.00;
    let total = (precioBase + costoExtra) - descuento;
    contadorCitas++;

    // 4. SEMANA 13: Manipulación del DOM (Mostrar tarjeta de resultado en pantalla)
    let tarjeta = document.querySelector(".tarjeta.cuadro");
    
    // Evitar duplicados eliminando el mensaje anterior si ya existía
    let anterior = document.getElementById("resumenDOM");
    if (anterior) anterior.remove();

    let div = document.createElement("div");
    div.id = "resumenDOM";
    div.style.cssText = "margin-top: 15px; padding: 12px; background: #e8f5e9; border-radius: 6px; color: #2e7d32; font-size: 0.95em;";

    div.innerHTML = `
        <b>🐾 ¡Cita Registrada! (N° ${contadorCitas})</b><br>
        Cliente: ${nombre}<br>
        Mascota: ${mascota.toUpperCase()}<br>
        <b>Total a pagar: S/. ${total.toFixed(2)}</b>
    `;

    tarjeta.appendChild(div);

    // Mensaje final
    alert(`¡Reserva exitosa!\nTotal a pagar: S/. ${total.toFixed(2)}`);

    // Limpiar formulario
    document.querySelector("form.reserva").reset();
}