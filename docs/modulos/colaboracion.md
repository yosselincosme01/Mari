# Guía de colaboración

## Distribución inicial propuesta

| Responsable | Módulos principales | Entregables futuros |
| --- | --- | --- |
| Desarrolladora 1 | `frontend/src/features/professional/`, `catalog/`, `summary/` | Selección de preguntas y revisión profesional |
| Desarrolladora 2 | `frontend/src/features/patient/`, futuros `recognition/` y `confirmation/` | Videos, respuestas visuales y confirmación |
| Ambas | `components/`, `types/`, `features/consultation/`, `src/tests/` y `docs/` | Contratos TypeScript, accesibilidad y revisión cruzada |

Esta distribución es una propuesta y puede ajustarse por acuerdo del equipo. No implica funcionalidades implementadas.

## Acuerdos previos a programar

1. Documentar en `docs/requerimientos/` el catálogo inicial, el vocabulario, la corrección de respuestas y los criterios de accesibilidad.
2. Acordar los tipos y acciones del reducer antes de implementar el flujo. Distinguir una predicción de una respuesta confirmada. No crear contratos HTTP ni eventos de red en esta etapa.
3. Usar datos sintéticos y trabajar en los módulos del mismo frontend. No se construye backend ni sincronización entre dispositivos.
4. Definir consentimiento, acceso, eliminación y tratamiento de videos antes de capturar o almacenar datos reales. No enviarlos a un LLM como parte del resumen.
5. Definir pruebas de integración: una respuesta sin confirmar no puede llegar al resumen; las correcciones deben reflejarse en ambas vistas.

## Flujo Git propuesto

- Mantener `main` como rama principal.
- Trabajar en ramas por tarea, por ejemplo `feat/vista-paciente` y `feat/vista-profesional`. La base se prepara en `chore/estructura-inicial`.
- Abrir pull requests pequeños con descripción del cambio y su validación; solicitar revisión de la otra desarrolladora.
- Actualizar contratos compartidos por acuerdo antes de cambiar su implementación.
- Revisar los archivos preparados para cada commit y no agregar secretos ni datos reales.
- Instalar únicamente las dependencias que el módulo necesite cuando comience su implementación.

## Carpetas reservadas

- `data/`: reservada; su contenido se ignora por defecto salvo `.gitkeep`.
- `tests/`: pruebas futuras de módulos e integración; actualmente vacía.
- `backend/`: reservado; fuera del alcance de esta versión.
- `docs/arquitectura/` y `docs/requerimientos/`: decisiones y especificaciones.
