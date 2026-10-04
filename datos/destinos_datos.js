/*
 * DESTINOS · WEB DE CLIENTE
 * ------------------------------------------------------------------
 * Fuente única de los destinos para la web de cliente, que trabaja de
 * forma independiente (sin servidor). La usan index.html (selector
 * «Destino Final» de GENERAR ENTRADA) y creador de reservas_base.html
 * (columna DESTINO de LISTA RESERVAS).
 *
 * Es un .js y no un .json porque, abierta como archivo (file://), el
 * navegador no permite leer un .json; un <script src> sí funciona.
 *
 * Para añadir o quitar un destino: editar la lista de su grupo. El valor
 * debe escribirse EXACTAMENTE como figura en el catálogo de destinos del
 * sistema: es el que viaja en el QR y el que compara el MOSTRADOR - SCANNER.
 * Creado el 29/09/2026 con los destinos que ya ofrecía la web.
 */
window.UTI_DESTINOS_GRUPOS = [
    { label: '🌍 INTERNACIONALES', items: ['LUBA', 'COLONIA', 'PORTUGAL'] },
    { label: '🇪🇸 NACIONALES', items: ['SAN ROQUE', 'SEVILLA-LA NEGRILLA', 'MADRID-ABROÑIGAL', 'VIGO',
                                      'BILBAO-NACIONAL', 'TORRELAVEGA', 'PUERTOLLANO', 'BILBAO'] },
    { label: '🏭 SECTOR ESPECIAL', items: ['BILBAO-MEDW.', 'SEVILLA-ACOU.', 'ZARAGOZA-MEDW.'] },
    { label: '🏗️ ACCIÓN GRÚA', items: ['MOVIMIENTO GRUA'] },
    { label: '📋 STOCK', items: ['STOCK CLIENTE', 'STOCK CALENTAR', 'STOCK ESPECIAL', 'STOCK PORTUGAL'] }
];
