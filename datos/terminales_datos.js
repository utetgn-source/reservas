/*
 * TERMINALES / ESTACIONES · WEB DE CLIENTE
 * ------------------------------------------------------------------
 * Toda reserva (entrada y salida) se hace para una terminal o estación: se
 * elige al acceder a la web y viaja en el QR (clave «terminal», con el id) y
 * en el reporte impreso (con el nombre).
 *
 * El id es el MISMO que usa UTI-STOCK (dta/terminales/terminal.json y
 * dta/estación/estaciones.json) y no cambia al renombrar: es el que viaja
 * en el QR. tipo: «terminal» | «estacion». Solo se ofrecen las activas.
 *
 * Lo usan index.html (pregunta al acceder) y registros masivos/REGISTRO MASIVO.html.
 * Se gestiona desde registros masivos/editor.html (crear, editar, eliminar).
 * Creado el 04/10/2026 copiando las terminales y estaciones de UTI-STOCK.
 */
window.UTI_TERMINALES_DATOS = [
    {"id":"terminal_constanti","nombre":"TERMINAL CONSTANTI","tipo":"terminal","activa":true},
    {"id":"terminal_sevilla","nombre":"TERMINAL SEVILLA","tipo":"terminal","activa":true},
    {"id":"clasificación_tarragona","nombre":"CLASIFICACIÓN TARRAGONA","tipo":"estacion","activa":true},
    {"id":"puerto_gijón","nombre":"PUERTO GIJÓN","tipo":"estacion","activa":true}
];
