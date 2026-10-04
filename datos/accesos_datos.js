/*
 * CONTRASEÑAS DE ACCESO · WEB DE CLIENTE
 * ------------------------------------------------------------------
 * NO contiene contraseñas: solo su huella SHA-256 de
 *     prefijo + CONTRASEÑA EN MAYÚSCULAS
 * (las contraseñas no distinguen mayúsculas de minúsculas).
 *
 * permisos:
 *   entrada → GENERAR ENTRADA      salida → GENERAR SALIDA
 *   lista   → LISTA RESERVAS       editor → entrar en registros masivos/editor.html
 *
 * Se gestiona desde registros masivos/editor.html (crear, editar, eliminar).
 * Creado el 29/09/2026:
 *   - CLIENTE GENERAL: la contraseña que ya existía, con acceso a TODOS.
 *   - ADMINISTRADOR:   contraseña inicial EDITOR-2026 → CAMBIARLA desde el EDITOR.
 */
window.UTI_ACCESOS_DATOS = {
    "prefijo": "UTI-CLIENTE|",
    "lista": [
        {"id":"acc-cliente-general","nombre":"CLIENTE GENERAL","hash":"7eff287511303d06c6dea068b8d35f230e1e22ea0443693548ba36cc711b3430","permisos":{"entrada":true,"salida":true,"lista":true,"editor":false}},
        {"id":"acc-administrador","nombre":"ADMINISTRADOR","hash":"be087e9b78eaf98cb8a96f49741facad3f376dca8d51cfe237018a4d17ffe194","permisos":{"entrada":true,"salida":true,"lista":true,"editor":true}}
    ]
};
