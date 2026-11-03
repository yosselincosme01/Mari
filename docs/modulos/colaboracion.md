# Guía de colaboración

## Distribución inicial propuesta

| Responsable | Módulos principales | Entregables futuros |
| --- | --- | --- |
| Desarrolladora 1 | `frontend/` | Vistas, accesibilidad, videos, cámara y confirmación |
| Desarrolladora 2 | `backend/` | Sesiones, sincronización, validación y adaptadores de reconocimiento y resumen |
| Ambas | `docs/`, `tests/` y decisiones sobre datos | Contratos, criterios de aceptación y revisión cruzada |

Esta distribución es una propuesta y puede ajustarse por acuerdo del equipo. No implica funcionalidades implementadas.

## Acuerdos previos a programar

1. Documentar en `docs/requerimientos/` el catálogo inicial, el vocabulario, la corrección de respuestas y los criterios de accesibilidad.
2. Acordar en `docs/arquitectura/` los contratos HTTP y eventos: identificadores de sesión y pregunta, estado de respuesta, confirmación, errores y desconexión. Distinguir una predicción de una respuesta confirmada.
3. Usar datos sintéticos para que el frontend pueda avanzar con simulaciones del contrato mientras se construye el backend.
4. Definir consentimiento, acceso, eliminación y tratamiento de videos antes de capturar o almacenar datos reales. No enviarlos a un LLM como parte del resumen.
5. Definir pruebas de integración: una respuesta sin confirmar no puede llegar al resumen; las correcciones deben reflejarse en ambas vistas.

## Flujo Git propuesto

- Mantener `main` como rama principal.
- Trabajar en ramas por tarea, por ejemplo `feat/vista-paciente` y `feat/sesiones`.
- Abrir pull requests pequeños con descripción del cambio y su validación; solicitar revisión de la otra desarrolladora.
- Actualizar contratos compartidos por acuerdo antes de cambiar su implementación.
- Revisar los archivos preparados para cada commit y no agregar secretos ni datos reales.
- Instalar únicamente las dependencias que el módulo necesite cuando comience su implementación.

## Carpetas reservadas

- `data/`: reservada; su contenido se ignora por defecto salvo `.gitkeep`.
- `tests/`: pruebas futuras de módulos e integración; actualmente vacía.
- `docs/arquitectura/` y `docs/requerimientos/`: decisiones y especificaciones futuras.
