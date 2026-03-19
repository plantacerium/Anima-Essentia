# 🐾 Anima Essentia Plataforma de Conexiones Cognitivas - Fichas de Adopción 🐾

Creado específicamente para protectoras de animales (inspirado por Moka y la Protectora de Utebo). Este proyecto revoluciona la forma en que se presentan los animales en busca de hogar, pasando de simples "fichas de datos" a **"perfiles cognitivos y espirituales"**.

## 🌟 La Visión

Cada animal rescatado tiene una historia profunda que contar. El objetivo de este proyecto es manifestar la verdadera esencia del animal. Para ello, hemos creado un sistema interactivo que:

1.  **Es Flexible (YAML Dinámico):** No hay campos fijos. Si un voluntario quiere añadir "Juguete favorito" o "Nivel de ansiedad", el sistema lo lee y lo pinta dinámicamente. 
2.  **Es Responsivo y Adaptable:** La ficha se adapta a cualquier tamaño de pantalla y permite elegir múltiples ratios visuales (16:9, 4:3, 9:16 para Reels/Stories). Acepta **imágenes individuales, múltiples fotos (pase de diapositivas auto-generado) y vídeos**.
3.  **Es Cognitivo:** El motor analiza el texto proporcionado buscando palabras clave para determinar la "energía" del animal (calma vs. alta energía). Según este análisis, modifica sutilmente la velocidad de las animaciones y los filtros visuales.
4.  **Identidad Visual (Logo/Banner):** Permite integrar un logo o banner de la protectora (opcional) que aparece como plantilla profesional bajo la imagen del animal.
5.  **Aporta Sabiduría:** Incluye un módulo de sabiduría que muestra un mensaje reflexivo, conectando al adoptante potencial desde la empatía.

## 🚀 Características Técnicas

*   **HTML5 & CSS3:** Maquetación moderna utilizando Flexbox y CSS Variables. Uso de `aspect-ratio` y `object-fit` para manejo universal de media.
*   **Vanilla JS:** Un analizador recursivo dinámico que recorre cualquier estructura YAML y la transforma en elementos del DOM categorizados.
*   **GSAP:** Animaciones fluidas ("Tweening") que infunden un sentido de respiración y vida a la ficha.
*   **Exportación Avanzada:** Genera instantáneamente la ficha en formatos **PNG**, **PDF**, **Video (WebM)** descargable o **JSON** de datos crudos.

## 🛠️ Cómo Usar

1.  Abre `index.html` en tu navegador.
2.  En la zona izquierda, introduce los datos del animal usando el formato **YAML**.
3.  Sube una o varias **Imágenes o Vídeos**. Si subes varias fotos, se creará un carrusel animado automáticamente.
4.  (Opcional) Sube un **Logo de Protectora** para aplicar la identidad visual del refugio de forma profesional.
5.  (Opcional) Sube un archivo de **Audio** o un **CSS Personalizado** para un control absoluto del diseño.
6.  Haz clic en **Manifestar Conexión**.

## 🧠 El Motor Cognitivo

El análisis cognitivo ("Cognitive Engine") procesa todos los strings dentro del YAML:
*   **Alta Energía:** ("energía", "fuerza", "correr", "jugar") -> Acelera las animaciones y aumenta el contraste vibrante.
*   **Calma:** ("tranquilo", "paz", "suave", "observador") -> Ralentiza la revelación del perfil, aplicando pátinas más suaves a la imagen.

## Citas de Sabiduría Ancestral
````yaml
  wisdom:
    tipo: "ancestral_sol"
    quote: "La senda libre se abre para quien la transita con verdad en el corazón."
    fuente_planeta: "Guía de la Manada Estelar"
`````

---
*"Software hecho con ❤️ por [Plantacerium](https://github.com/plantacerium). "*
