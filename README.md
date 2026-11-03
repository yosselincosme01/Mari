# Mari

**The Cookies · Hackathon FACI 2026**

Aplicación web accesible que facilita la comunicación inicial entre personas sordas usuarias de LSP y profesionales de salud mediante recursos visuales e inteligencia artificial.

## Problema

En consultas ambulatorias no urgentes, las personas sordas adultas usuarias de Lengua de Señas Peruana (LSP) pueden encontrar barreras para comunicar sus síntomas cuando el profesional no conoce LSP. Estas barreras pueden afectar su autonomía, privacidad y calidad de atención.

## Objetivo general

Facilitar un intercambio inicial de preguntas clínicas y respuestas confirmadas mediante una interfaz visual accesible, recursos en LSP y reconocimiento experimental de un vocabulario limitado de señas.

## Público objetivo

- Personas sordas adultas usuarias de LSP.
- Profesionales de salud que realizan consultas ambulatorias no urgentes y no conocen LSP.

## Solución propuesta

Una aplicación web responsive con dos vistas sincronizadas. El profesional podrá seleccionar preguntas clínicas predefinidas o escribir preguntas y revisar las respuestas confirmadas. El paciente podrá consultar videos en LSP del catálogo validado, responder frente a una cámara y confirmar o corregir el resultado reconocido.

Las preguntas escritas fuera del catálogo requerirán un mecanismo accesible acordado y validado con usuarios; no se propone convertir automáticamente cualquier texto en LSP. Los videos y el vocabulario deberán validarse con personas sordas usuarias de LSP y especialistas.

## Funcionalidades previstas del MVP

Todas las funcionalidades siguientes están **propuestas y pendientes de implementación**:

- Vista del profesional con catálogo de preguntas y envío al paciente.
- Vista del paciente con videos en LSP asociados a preguntas del catálogo.
- Sincronización de preguntas, respuestas y estados de confirmación.
- Captura de cámara con consentimiento y reconocimiento experimental de un vocabulario acotado.
- Confirmación o corrección explícita de cada respuesta por el paciente.
- Resumen de consulta basado exclusivamente en respuestas confirmadas.
- Integración opcional de un LLM para redactar ese resumen, bajo revisión del profesional y sin inferir datos ausentes.
- Interfaz responsive, navegación por teclado, foco visible, contraste y estados comprensibles sin depender solo del sonido o color.

## Arquitectura tecnológica propuesta

La selección es preliminar; no hay dependencias instaladas ni componentes ejecutables.

| Componente | Propuesta | Responsabilidad |
| --- | --- | --- |
| Frontend | React y TypeScript | Vistas del profesional y paciente, videos, cámara y confirmación |
| Backend | Python y FastAPI | Sesiones, catálogo, validación y coordinación del flujo |
| Sincronización | API HTTP y WebSocket | Intercambio de eventos entre las dos vistas |
| Visión computacional | Evaluar MediaPipe y un clasificador de aprendizaje automático | Reconocimiento experimental de señas del vocabulario acordado |
| Resumen | Adaptador opcional para un proveedor de LLM por definir | Redacción con respuestas confirmadas y revisión humana |
| Persistencia | Por definir según necesidades y privacidad | Evitar persistencia clínica por defecto durante el prototipo |

Flujo previsto: pregunta del catálogo → video en LSP → respuesta → reconocimiento experimental → confirmación o corrección del paciente → revisión del profesional → resumen revisado.

El backend deberá excluir respuestas pendientes del resumen. La captura de video, su eventual almacenamiento y el envío de información a servicios externos requieren decisiones explícitas de consentimiento, minimización y retención antes de implementarse.

## Organización y trabajo colaborativo

```text
frontend/
backend/
docs/
  arquitectura/
  requerimientos/
  modulos/
data/
tests/
```

Consultar [la guía de colaboración](docs/modulos/colaboracion.md) para repartir responsabilidades y acordar contratos. Este repositorio todavía no tiene instrucciones de ejecución: no contiene una aplicación implementada.

## Alcance y limitaciones

- El prototipo se limita a personas adultas, consultas ambulatorias no urgentes y un catálogo acotado.
- No traduce conversaciones libres en LSP.
- No realiza diagnósticos ni triaje y no reemplaza a intérpretes profesionales.
- El reconocimiento será experimental; sus errores y nivel de confianza deberán evaluarse con usuarios y datos autorizados.
- Un resumen generado por IA no constituye una decisión clínica y requiere revisión profesional.
- La propuesta no está validada para uso clínico real.
- No deben publicarse datos personales, información clínica, grabaciones identificables, credenciales ni datasets sensibles. Los ejemplos de desarrollo deberán ser sintéticos.

## Equipo de desarrollo

**The Cookies**, equipo participante en la Hackathon FACI 2026. El trabajo está organizado para dos desarrolladoras con módulos independientes y contratos compartidos.

## Estado actual

**Preparación inicial del repositorio.** Solo están presentes documentación, estructura de carpetas y reglas de exclusión. No están implementadas las vistas, la sincronización, el reconocimiento de señas ni la integración con un LLM. No hay dependencias, pruebas ejecutables ni despliegue.

## Licencia

Pendiente de decisión por el equipo. No se incluye un archivo de licencia.
