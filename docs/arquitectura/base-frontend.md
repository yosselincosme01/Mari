# Base frontend de Mari

## Decisión de alcance

Una SPA en `frontend/`, con modos alternados en un mismo dispositivo. Esta decisión sustituye la propuesta inicial de backend y WebSockets. Se conserva la estructura del repositorio sin eliminar archivos previos. No hay autenticación, red clínica, LLM, cámara ni persistencia.

## Módulos

- `src/app/`: rutas, layout, bienvenida y protección de consulta inexistente.
- `src/components/common/`: enlaces de acción reutilizables.
- `src/components/accessibility/`: pictogramas provisionales, decorativos para lectores de pantalla y acompañados de texto accesible.
- `src/features/consultation/`: Context API, reducer y creación de consulta en memoria.
- `src/features/professional/`, `patient/`, `summary/`: páginas base sin flujo clínico completo.
- `src/features/catalog/`: búsqueda local; nunca inventa preguntas o traducciones.
- `src/data/`: catálogo de demostración sin datos clínicos reales.
- `src/types/`: contratos TypeScript compartidos.
- `src/styles/`: variables de diseño y estilos responsive.
- `src/tests/`: pruebas de navegación y dominio.

`recognition/`, `confirmation/` y `hooks/` se crearán cuando tengan implementación real; no se añaden módulos vacíos ni abstracciones sin uso. El hook de consulta vive junto a su contexto para mantener cohesionada la funcionalidad.

## Estado y privacidad

`Consultation.answers` solo admite el tipo `ConfirmedAnswer`. Las respuestas sin confirmar se reservan en `provisionalAnswers`, fuera de la consulta. La unión discriminada exige fecha de confirmación para respuestas confirmadas y `null` para provisionales. Todavía no hay acciones de captura o confirmación.

No se guarda información entre recargas, no se solicitan nombres y no se registra contenido de consultas en logs. Los scripts de desarrollo son locales. React Router protege las rutas de consulta si falta estado; esta protección es de navegación, no autenticación.

## Accesibilidad y recursos LSP

Idioma español, encabezados semánticos, etiquetas de formulario, enlace para saltar al contenido, foco visible y traslado de foco al contenido tras navegar. No hay instrucciones por audio. Botones de al menos 48 px y diseño adaptable a tablet horizontal, computadora y pantallas pequeñas.

No existen videos validados: todas las preguntas contienen `videoUrl: null` y `videoValidated: false`. No se representa un intérprete ficticio. La pantalla del paciente es una reserva de espacio, no una interfaz lista para personas que solo usan LSP. Los símbolos y las opciones del catálogo requieren validación con usuarios, además de revisión del contenido clínico. No activar preguntas en una consulta real sin recursos accesibles validados.

## Próximas etapas

Selección de pregunta, reproductor con validación del recurso, alternativas visuales, confirmación/corrección y resumen determinista revisable. El reconocimiento experimental se evaluará por separado. No activar cámara ni agregar un proveedor de LLM como parte de esta base.

## Referencias técnicas

- [Guía oficial de Vite](https://vite.dev/guide/).
- [Instalación declarativa de React Router](https://reactrouter.com/start/declarative/installation).
