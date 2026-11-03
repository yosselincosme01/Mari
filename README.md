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

Una sola aplicación web responsive con dos modos que se alternan en el mismo dispositivo y comparten una consulta en memoria. La búsqueda del profesional se limita a preguntas y alias registrados. El paciente podrá consultar videos validados del catálogo y responder con alternativas visuales o, experimentalmente, cámara.

Las preguntas escritas fuera del catálogo requerirán un mecanismo accesible acordado y validado con usuarios; no se propone convertir automáticamente cualquier texto en LSP. Los videos y el vocabulario deberán validarse con personas sordas usuarias de LSP y especialistas.

## Funcionalidades previstas del MVP

La base implementada incluye navegación, creación de consulta de demostración y búsqueda del catálogo. Las siguientes funcionalidades clínicas quedan **pendientes de implementación**:

- Vista del profesional con catálogo de preguntas y envío al paciente.
- Vista del paciente con videos en LSP asociados a preguntas del catálogo.
- Selección de pregunta y flujo de respuesta entre los modos del mismo dispositivo.
- Captura de cámara con consentimiento y reconocimiento experimental de un vocabulario acotado.
- Confirmación o corrección explícita de cada respuesta por el paciente.
- Resumen de consulta basado exclusivamente en respuestas confirmadas.
- Evaluación futura de un LLM para redactar ese resumen, bajo revisión profesional y sin inferir datos ausentes; fuera de esta etapa.
- Interfaz responsive, navegación por teclado, foco visible, contraste y estados comprensibles sin depender solo del sonido o color.

## Arquitectura tecnológica propuesta

La primera etapa utiliza React, TypeScript, Vite, React Router, Context API y CSS con variables. No utiliza backend, autenticación, WebSockets, sincronización entre dispositivos ni infraestructura cloud.

| Componente | Propuesta | Responsabilidad |
| --- | --- | --- |
| Interfaz | React y TypeScript | Rutas y componentes modulares |
| Herramientas | Vite y npm | Desarrollo y build local |
| Navegación | React Router | Cinco rutas y protección de consulta inexistente |
| Estado | Context API y reducer | Una consulta en memoria compartida entre modos |
| Pruebas | Vitest y React Testing Library | Navegación, catálogo y estado |
| Reconocimiento y resumen | Pendientes | Sin cámara ni servicios LLM activos |

Flujo previsto: pregunta del catálogo → video en LSP → respuesta → reconocimiento experimental → confirmación o corrección del paciente → revisión del profesional → resumen revisado.

El modelo separa `provisionalAnswers` de `consultation.answers`, que solo admite respuestas confirmadas. La captura de video y cualquier servicio externo requieren decisiones de consentimiento y privacidad antes de implementarse. El estado actual no se guarda en localStorage ni en una base de datos: se pierde al recargar.

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

Consultar [la guía de colaboración](docs/modulos/colaboracion.md) y [la arquitectura de esta etapa](docs/arquitectura/base-frontend.md). `backend/` permanece reservado y sin uso. Las pruebas del frontend viven junto a su aplicación en `frontend/src/tests/`; `tests/` se conserva para futuras pruebas transversales.

## Ejecutar el proyecto

Requisito: Node.js 22.12 o superior y npm. Ejecutar desde la raíz del repositorio:

```sh
cd frontend
npm ci
npm run dev
```

Abrir la dirección que indique Vite, habitualmente `http://127.0.0.1:5173`. Para verificar y previsualizar:

```sh
npm test
npm run build
npm run preview
```

`npm install` permite instalar por primera vez o actualizar el lockfile tras cambios de dependencias; `npm ci` reproduce las versiones fijadas en `package-lock.json`. No se necesita `.env` ni credenciales.

Rutas: `/`, `/consulta/nueva`, `/consulta/profesional`, `/consulta/paciente` y `/consulta/resumen`. Las tres últimas redirigen al inicio de consulta si no existe una consulta abierta. Un servidor futuro deberá redirigir las rutas SPA a `index.html`.

Para comprobar la base: crear una consulta de demostración, buscar «tos», alternar a paciente y abrir resumen. No ingresar datos reales. Los controles de confirmar, corregir y repetir se presentan solo como una guía visual no interactiva.

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

**Base frontend funcional.** Incluye las cinco rutas, diseño responsive, catálogo tipado con módulo respiratorio, búsqueda por alias, estado compartido en memoria y pruebas iniciales. Las vistas profesional, paciente y resumen son bases de navegación; no implementan todavía el flujo clínico completo. No hay videos LSP validados, captura de respuestas, reconocimiento, LLM ni despliegue. Los pictogramas son provisionales y no garantizan comprensión para personas que utilizan exclusivamente LSP.

## Licencia

Pendiente de decisión por el equipo. No se incluye un archivo de licencia.
