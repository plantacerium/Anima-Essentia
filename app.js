// app.js

document.getElementById('generate-btn').addEventListener('click', manifestCard);

const dogWisdomLibrary = [
    { text: "Posa las patas en la Tierra y la cabeza en las estrellas. Solo así recordarás tu origen planetario.", source: "Guía de la Manada Estelar" },
    { text: "Escucha el sonido del agua en la senda. Te enseña que la vida fluye, incluso cuando la corriente es fuerte.", source: "Guardián de los Ríos" },
    { text: "El Sol sale para todos. No guarda rencor a la noche, simplemente brilla. Sé como el sol.", source: "Mensajero del Amanecer" },
    { text: "El verdadero líder de la manada no gobierna con miedo, sino con la quietud de su propia presencia.", source: "Anciano del Gran Bosque" },
    { text: "El olfato te dice lo que es verdad. Los ojos mienten; la intuición, guiada por el aroma del amor, nunca falla.", source: "Caminante de los Vientos" },
    { text: "Tu senda es libre, pero tu corazón te guía. Escucha el latido primordial del planeta.", source: "Eco de la Tierra" },
    { text: "La nobleza está en la mirada de quien ha sufrido y aún así, mueve la cola.", source: "Sabiduria Animal" },
    { text: "No busques el camino en el mapa, sino en el aroma de las flores que el viento trae para ti.", source: "Explorador de fragancias" },
    { text: "La lealtad no es una cadena, es un puente invisible que une dos almas en el tiempo.", source: "Arquitecto de Vínculos" },
    { text: "A veces, ladrar es necesario para despertar al mundo, pero el silencio es lo que lo sana.", source: "Monje del Silencio Canino" },
    { text: "Corre detrás de tus sueños con la misma intensidad con la que persigues una mariposa en primavera.", source: "Cazador de Sueños" },
    { text: "La lluvia no es un castigo, es la forma en que el cielo invita a la tierra a renovar su piel.", source: "Chamán de las Tormentas" },
    { text: "Un hogar no son cuatro paredes, es el lugar donde el latido de otro corazón rima con el tuyo.", source: "Poeta del Refugio" },
    { text: "El tiempo no existe cuando juegas. Aprende del cachorro que vive en un presente infinito.", source: "Cronista de la Eternidad" },
    { text: "Si el camino se vuelve oscuro, confía en tu nariz; ella recuerda senderos que tus ojos olvidaron.", source: "Rastreador de Sombras" },
    { text: "Cada ser tiene una melodía única. No intentes aullar como el lobo si tu voz es un susurro de bosque.", source: "Músico de la Naturaleza" },
    { text: "La verdadera fuerza no está en los colmillos, sino en la paciencia de esperar a quien amas.", source: "Guardián del Umbral" },
    { text: "Acepta las caricias como si fueran rayos de sol: con gratitud y los ojos cerrados.", source: "Receptor de Luz" },
    { text: "No hay rastro demasiado viejo para quien sabe que el pasado siempre deja una esencia en el aire.", source: "Historiador del Viento" },
    { text: "La montaña no se mueve por el viento; tú no te quiebres por las palabras de quienes no te entienden.", source: "Espíritu de la Roca" },
    { text: "Mover la cola es la forma más pura de decir que el universo está en equilibrio en este instante.", source: "Bailarín de la Alegría" },
    { text: "El invierno es solo un sueño profundo del que la vida despertará con más color.", source: "Soñador de las Nieves" },
    { text: "Nunca eres demasiado pequeño para dejar una huella gigante en el corazón de alguien.", source: "Pequeño Gigante" },
    { text: "La libertad empieza donde terminan las dudas y comienza la primera carrera de la mañana.", source: "Corredor del Alba" },
    { text: "El perdón es el aroma que desprende la flor después de ser pisada.", source: "Alquimista del Perdón" },
    { text: "Mira a la luna y recuerda que, aunque cambie de forma, siempre es la misma luz la que nos guía.", source: "Astrónomo Nocturno" },
    { text: "La manada no es quien se parece a ti, sino quien cuida tu espalda cuando el bosque ruge.", source: "Guerrero de la Fraternidad" },
    { text: "Dormir al sol es una forma de meditación donde el alma se recarga para el próximo juego.", source: "Meditador Solar" },
    { text: "El agua del arroyo canta para quien se detiene a beber con humildad.", source: "Cantante del Riachuelo" },
    { text: "Tu cola es el metrónomo de tu espíritu; deja que marque el ritmo de tu felicidad.", source: "Director de Orquesta Vital" },
    { text: "Las nubes son solo pensamientos que pasan; tú eres el cielo que permanece azul.", source: "Observador del Firmamento" },
    { text: "Un bostezo largo es la forma en que el cuerpo suelta las tensiones de un día de guardia.", source: "Centinela del Reposo" },
    { text: "No temas a la sombra, pues solo existe porque hay una luz brillante cerca.", source: "Buscador de Resplandores" },
    { text: "La sabiduría no está en los libros, sino en la paz de una tarde recostado sobre la hierba.", source: "Filósofo de la Pradera" },
    { text: "Cada encuentro es una semilla; riégala con amabilidad y verás crecer un bosque de amigos.", source: "Sembrador de Almas" },
    { text: "El rugido del trueno es solo el cielo aplaudiendo la valentía de los que siguen en pie.", source: "Valiente de la Tormenta" },
    { text: "Sé como el árbol: echa raíces profundas pero deja que tus ramas dancen con la brisa.", source: "Árbol Sabio" },
    { text: "El rastro del amor nunca se borra, es una marca de fuego en el tapiz de la existencia.", source: "Tejedor de Destinos" },
    { text: "No corras para llegar, corre para sentir el aire golpeando tus orejas.", source: "Amante del Viento" },
    { text: "La vejez es solo la acumulación de historias hermosas grabadas en el pelaje canoso.", source: "Anciano de las Mil Historias" },
    { text: "El mejor regalo es tu presencia. No necesitas trucos para ser amado, solo ser tú mismo.", source: "Esencia Pura" },
    { text: "Las estrellas son las luces de los que ya no están, ladrando desde el jardín del infinito.", source: "Guía del Más Allá" },
    { text: "Un lametón puede curar una herida que el tiempo no pudo cerrar.", source: "Sanador Silencioso" },
    { text: "La paciencia es el arte de esperar a que la fruta caiga por su propio peso de madurez.", source: "Maestro de la Espera" },
    { text: "El bosque tiene mil orejas; habla con tus actos y el silencio te responderá.", source: "Oído de la Selva" },
    { text: "Confía en tu manada, pero nunca olvides que tú eres el líder de tu propio viaje interior.", source: "Capitán del Alma" },
    { text: "La alegría es un fuego que se multiplica cuando decides compartir tu calor.", source: "Portador del Fuego" },
    { text: "Busca la belleza en lo pequeño: una gota de rocío, una hoja seca, el calor de una mano.", source: "Coleccionista de Momentos" },
    { text: "El miedo es una niebla que se disipa cuando das el primer paso hacia lo desconocido.", source: "Disipador de Nieblas" },
    { text: "Tu ladrido es tu escudo, pero tu mirada es tu espada más afilada.", source: "Espadachín de la Verdad" },
    { text: "La generosidad es dar tu juguete favorito sabiendo que la felicidad del otro es tu recompensa.", source: "Filántropo Canino" },
    { text: "El otoño nos enseña que dejar ir es necesario para que nazca algo nuevo.", source: "Sabio de la Caída" },
    { text: "No guardes rencor, las nubes de hoy no deben arruinar el sol de mañana.", source: "Limpiador de Cielos" },
    { text: "El equilibrio se encuentra cuando tus cuatro patas pisan firme y tu mente vuela libre.", source: "Acróbata del Espíritu" },
    { text: "La curiosidad es la llave que abre todas las puertas del conocimiento salvaje.", source: "Explorador Curioso" },
    { text: "Un encuentro fugaz puede cambiar el rumbo de toda una vida. Presta atención.", source: "Vigía de Sincronicidades" },
    { text: "La fortaleza no es no tener miedo, sino seguir adelante aunque te tiemblen las patas.", source: "Héroe en las Sombras" },
    { text: "La gratitud es la memoria del corazón. Nunca olvides quién te dio agua en la sed.", source: "Agradecido de la Senda" },
    { text: "El sol brilla igual para el cachorro que para el viejo lobo. La vida no hace distinciones.", source: "Igualitario Universal" },
    { text: "Tu identidad es un río que siempre cambia pero siempre es el mismo cauce de amor.", source: "Río Errante" },
    { text: "La soledad es el espacio donde el alma se encuentra consigo misma para charlar.", source: "Ermitaño de la Paz" },
    { text: "El juego es la forma más elevada de investigación espiritual.", source: "Investigador Lúdico" },
    { text: "No intentes atrapar el viento, deja que te atraviese y te lleve sus mensajes.", source: "Receptor del Aire" },
    { text: "La humildad es saber que eres una pequeña parte de un gran misterio planetario.", source: "Parte del Todo" },
    { text: "El aullido a la luna es un recordatorio de que todos estamos conectados por un hilo de plata.", source: "Conector Cósmico" },
    { text: "La honestidad es que tu cola diga lo mismo que tus ojos.", source: "Espejo de la Verdad" },
    { text: "Cada amanecer es una oportunidad para perdonar el ayer y empezar el primer juego.", source: "Renacido del Alba" },
    { text: "La intuición es el mapa que llevas grabado en el ADN de tus ancestros.", source: "Heredero Estelar" },
    { text: "El sacrificio más grande es esperar bajo la lluvia por alguien que prometió volver.", source: "Guia del Amor" },
    { text: "La risa de un humano es música para los oídos de un perro sabio.", source: "Guia del Alma" },
    { text: "El mar nos enseña que las olas siempre regresan, al igual que los buenos recuerdos.", source: "Navegante de la Memoria" },
    { text: "Tu nombre es solo un sonido; lo que eres es un sentimiento que otros perciben.", source: "Místico del Nombre" },
    { text: "La perseverancia es intentar alcanzar esa galleta aunque esté en lo más alto del estante nocturno.", source: "Escalador de Sueños" },
    { text: "La magia existe en el momento exacto en que una mano toca tu cabeza y el mundo se detiene.", source: "Mago del Contacto" },
    { text: "El bosque no juzga tu raza, solo tu respeto por la vida que en él habita.", source: "Juez del Bosque" },
    { text: "La simplicidad es la máxima sofisticación de una vida bien vivida.", source: "Maestro de lo Simple" },
    { text: "No ladres a la oscuridad, enciende tu propia luz interior.", source: "Faro del Alma" },
    { text: "La compasión es sentir el frío del otro como si fuera tu propio pelaje mojado.", source: "Empático de la Noche" },
    { text: "El destino se escribe con cada paso, no dejes que otros lleven tu correa.", source: "Guía del Destino" },
    { text: "La herencia que dejas no son juguetes, sino el amor que pusiste en otros corazones.", source: "Legado del Alma" },
    { text: "El espíritu canino es el pegamento que mantiene unida a la familia humana.", source: "Unificador de Almas" },
    { text: "Nunca dejes que el ruido del mundo apague el susurro de tu propia naturaleza salvaje.", source: "Voz de la Selva" },
    { text: "La aventura te espera detrás de cada esquina, solo tienes que olisquear con atención.", source: "Buscador de Aventuras" },
    { text: "El refugio es sagrado cuando los que habitan en él comparten el pan y el sueño.", source: "Sumo Sacerdote del Hogar" },
    { text: "La belleza de la vida está en que nada es permanente, excepto la lealtad.", source: "Centinela del Infinito" },
    { text: "Un suspiro es el lenguaje de un alma que ha encontrado la paz después de la tormenta.", source: "Susurrador de Almas" },
    { text: "No midas el éxito por los premios, sino por las veces que hiciste sonreír a un triste.", source: "Comediante Sagrado" },
    { text: "El camino del guerrero es proteger a los que no pueden defenderse solos.", source: "Protector de los Débiles" },
    { text: "Las montañas guardan secretos antiguos para los que saben escuchar el eco de sus aullidos.", source: "Guardian de las Cumbres" },
    { text: "El amor es el único idioma que no necesita traducción gramatical.", source: "Políglota del Corazón" },
    { text: "La primavera vuelve siempre, recordándonos que la esperanza es una fuerza de la naturaleza.", source: "Mensajero de la Flor" },
    { text: "Tus orejas no solo sirven para oír, sino para sentir la dirección del destino.", source: "Antena Espiritual" },
    { text: "El barro en tus patas es la medalla de una batalla ganada contra la aburrida perfección.", source: "Guerrero del Lodo" },
    { text: "La sombra del árbol es el abrazo de la tierra en los días de calor intenso.", source: "Amigo de la Sombra" },
    { text: "La vida es un ciclo de carreras, siestas y caricias. No lo compliques demasiado.", source: "Teórico de la Simplicidad" },
    { text: "El alma canina es un trozo de estrella que decidió bajar a la tierra para darnos calor.", source: "Fragmento de Astro" },
    { text: "La verdadera nobleza es ser amable con quien ha sido rudo contigo.", source: "Caballero del Espíritu" },
    { text: "Confía en el proceso como un perro confía en que la mano de su dueño lo alimentará.", source: "Creyente del Destino" },
    { text: "El horizonte es una invitación, no un límite para tus sueños.", source: "Viajero del Límite" },
    { text: "La mirada de un perro es la ventana por la que Dios mira al mundo con pureza.", source: "Ojo de la Divinidad" },
    { text: "La felicidad es un rincón con sol y alguien que diga tu nombre con ternura.", source: "Arquitecto del Gozo" },
    { text: "Cada ser es un universo; respeta el espacio de los otros como respetas tu propio rastro.", source: "Diplomático Universal" },
    { text: "El aullido del coyote nos enseña que hay belleza en la melancolía del desierto.", source: "Cantor de las Arenas" },
    { text: "La vida es corta, pero el amor tiene la capacidad de estirarse hasta la eternidad.", source: "Estirador del Tiempo" },
    { text: "No busques el rastro perfecto, busca el rastro que te haga sentir vivo.", source: "Buscador de Vida" },
    { text: "La quietud de la montaña es la meta de toda mente agitada.", source: "Cumbre de la Paz" },
    { text: "El ladrido de un amigo es el sonido que trae paz al ambiente.", source: "Guardián de la Paz" },
    { text: "La compasión empieza contigo mismo; lámete las heridas y sigue adelante.", source: "Autosanador Canino" },
    { text: "Somos polvo de estrellas que aprendió a mover la cola por amor.", source: "Hijo del Cosmos" },
    { text: "La lección final de la manada es que nadie se queda atrás, pase lo que pase.", source: "Eterno Guardián de la Unión" },
    { text: "El latido primordial es la música que une a todos los seres vivos bajo este cielo.", source: "Eco de la Tierra II" }
];


// Función para obtener sabiduría
function getWisdom(data) {
    let exactWisdom = extractValueByKey(data, 'wisdom');
    if (exactWisdom && exactWisdom.quote) {
        return { text: exactWisdom.quote, source: exactWisdom.fuente_planeta || "Fuente Desconocida" };
    }
    const randomIndex = Math.floor(Math.random() * dogWisdomLibrary.length);
    return dogWisdomLibrary[randomIndex];
}

function extractValueByKey(obj, targetKey) {
    if (typeof obj !== 'object' || obj === null) return null;
    if (obj[targetKey]) return obj[targetKey];
    for (const key in obj) {
        const res = extractValueByKey(obj[key], targetKey);
        if (res) return res;
    }
    return null;
}

// Analizador Cognitivo: Determina la energía del texto para afectar UI y Animaciones
function analyzeCognitiveProfile(data) {
    const stringData = JSON.stringify(data).toLowerCase();
    let energyScore = 0;

    const highEnergyWords = ['energía', 'fuerza', 'inagotable', 'jugar', 'correr', 'activo', 'joven', 'fuerte', 'dinámico', 'ágil'];
    const lowEnergyWords = ['tranquilo', 'paz', 'calma', 'mayor', 'suave', 'dormir', 'observador', 'paciente', 'miedo', 'relajado'];

    highEnergyWords.forEach(word => { if (stringData.includes(word)) energyScore++; });
    lowEnergyWords.forEach(word => { if (stringData.includes(word)) energyScore--; });

    if (energyScore > 1) return 'energy';
    if (energyScore < -1) return 'calm';
    return 'balanced';
}

function createDynamicContent(data) {
    const container = document.getElementById('dynamic-content');
    container.innerHTML = '';

    // Extraer título principal
    const nombre = extractValueByKey(data, 'nombre') || extractValueByKey(data, 'alias') || 'Ser de Luz Anónimo';
    const h1 = document.createElement('h1');
    h1.className = 'title-main';
    h1.textContent = nombre;
    container.appendChild(h1);

    // Parseo recursivo universal puro con contenedores locales
    function parseNode(node, containerElem, depth = 0) {
        if (typeof node !== 'object' || node === null) return;

        const entries = Object.entries(node);
        // Desenvuelve el nodo raíz si es único ("perro:")
        if (depth === 0 && entries.length === 1 && typeof entries[0][1] === 'object') {
            parseNode(entries[0][1], containerElem, depth + 1);
            return;
        }

        // 1. Recolectar tags cortos de este nivel
        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'tags-container';
        let hasTags = false;

        for (const [key, value] of entries) {
            if (['meta_data', 'wisdom', 'tema', 'audio_ambiente', 'nombre', 'alias'].includes(key)) continue;
            if (typeof value === 'object' && value !== null) continue;

            const strValue = String(value);
            if (strValue.length <= 40) {
                const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                const tag = document.createElement('span');
                tag.className = 'data-tag';
                tag.innerHTML = `<span class="tag-key">${formattedKey}:</span> <span class="tag-val">${strValue}</span>`;
                tagsContainer.appendChild(tag);
                hasTags = true;
            }
        }
        if (hasTags) containerElem.appendChild(tagsContainer);

        // 2. Recolectar textos largos de este nivel
        for (const [key, value] of entries) {
            if (['meta_data', 'wisdom', 'tema', 'audio_ambiente', 'nombre', 'alias'].includes(key)) continue;
            if (typeof value === 'object' && value !== null) continue;

            const strValue = String(value);
            if (strValue.length > 40) {
                const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                const p = document.createElement('p');
                p.className = 'long-text';
                p.innerHTML = `<span class="text-key">${formattedKey}:</span> ${strValue}`;
                containerElem.appendChild(p);
            }
        }

        // 3. Recolectar sub-objetos (recursivo) para este nivel
        for (const [key, value] of entries) {
            if (['meta_data', 'wisdom', 'tema', 'audio_ambiente', 'nombre', 'alias'].includes(key)) continue;
            if (typeof value === 'object' && value !== null) {
                const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

                const section = document.createElement('div');
                section.className = 'data-section';

                const sectionTitle = document.createElement('h3');
                sectionTitle.className = 'section-category';
                sectionTitle.textContent = formattedKey;
                section.appendChild(sectionTitle);

                parseNode(value, section, depth + 1);
                containerElem.appendChild(section);
            }
        }
    }

    parseNode(data, container);
}

function manifestCard() {
    const yamlText = document.getElementById('yaml-input').value;
    let data;
    try {
        data = jsyaml.load(yamlText);
    } catch (e) {
        alert("El YAML tiene un error de sintaxis. Revisa los espacios y comillas.");
        return;
    }

    // Análisis Cognitivo
    const cognitiveState = analyzeCognitiveProfile(data);
    const card = document.getElementById('card');

    // Configurar Animaciones según el estado cognitivo
    let animDuration = 1.2;
    let animEase = "power3.out";

    if (cognitiveState === 'energy') {
        animDuration = 0.8;
        animEase = "back.out(1.7)"; // Más salto y energía
    } else if (cognitiveState === 'calm') {
        animDuration = 2.0;
        animEase = "power1.inOut"; // Muy suave y zen
    }

    // Obtener Tema
    let tema = 'nature';
    const metaInfo = extractValueByKey(data, 'meta_data');
    if (metaInfo && metaInfo.tema) tema = metaInfo.tema;
    else if (data.tema) tema = data.tema;

    card.className = `ficha theme-${tema} cognitive-${cognitiveState}`;

    // Construir DOM dinámicamente
    createDynamicContent(data);

    // 4. Procesar Ratios
    const mediaContainer = document.getElementById('media-container');
    const ratioSelect = document.getElementById('ratio-select');
    mediaContainer.className = `media-container ratio-${ratioSelect.value}`;

    // 5. Procesar Visuales (Imagen / Video / Slideshow Múltiple) autoajustable
    const mediaInput = document.getElementById('media-upload');
    if (mediaInput.files && mediaInput.files.length > 0) {
        const files = Array.from(mediaInput.files).sort((a, b) => a.name.localeCompare(b.name));

        if (files[0].type.startsWith('video/')) {
            const fileURL = URL.createObjectURL(files[0]);
            mediaContainer.innerHTML = `<video id="main-video" src="${fileURL}" autoplay loop muted playsinline></video>`;
        } else if (files.length === 1) {
            const fileURL = URL.createObjectURL(files[0]);
            mediaContainer.innerHTML = `<img src="${fileURL}" alt="Media animal">`;
        } else {
            // Múltiples Imágenes (Slideshow)
            mediaContainer.innerHTML = '';
            files.forEach((file, index) => {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.className = 'slide-img';
                img.style.position = 'absolute';
                img.style.top = '0';
                img.style.left = '0';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.opacity = index === 0 ? '1' : '0';
                mediaContainer.appendChild(img);
            });

            if (window.currentSlideInterval) clearInterval(window.currentSlideInterval);
            let currentIdx = 0;
            const images = mediaContainer.querySelectorAll('.slide-img');
            window.currentSlideInterval = setInterval(() => {
                const nextIdx = (currentIdx + 1) % images.length;
                gsap.to(images[currentIdx], { opacity: 0, duration: 1.2, ease: "power1.inOut" });
                gsap.to(images[nextIdx], { opacity: 1, duration: 1.2, ease: "power1.inOut" });
                currentIdx = nextIdx;
            }, 3000);
        }
    }

    // 6. Procesar Audio Sensorial
    const audioInput = document.getElementById('audio-upload');
    const audioElement = document.getElementById('out-audio');

    if (audioInput.files && audioInput.files[0]) {
        audioElement.src = URL.createObjectURL(audioInput.files[0]);
        audioElement.style.display = "block";
        audioElement.loop = true; // El sonido se sobrepone en el video en bucle
        audioElement.play().catch(e => console.log("Autoplay audio bloqueado", e));
    } else {
        audioElement.style.display = "none";
        audioElement.pause();
    }

    // 7. Logo Protectora
    const logoInput = document.getElementById('logo-upload');
    const outLogo = document.getElementById('out-logo');
    const logoWrapper = document.getElementById('logo-wrapper');

    const yamlLogo = extractValueByKey(data, 'logo');

    if (logoInput.files && logoInput.files[0]) {
        outLogo.src = URL.createObjectURL(logoInput.files[0]);
        logoWrapper.style.display = 'block';
    } else if (yamlLogo) {
        // Soporte para cargar logo desde URL/Ruta definida en YAML
        outLogo.src = yamlLogo;
        logoWrapper.style.display = 'block';
    } else {
        logoWrapper.style.display = 'none';
        outLogo.src = '';
    }

    // --- NUEVO: Procesar CSS Personalizado ---
    const cssInput = document.getElementById('css-upload');
    if (cssInput.files && cssInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            let styleTag = document.getElementById('custom-user-css');
            if (!styleTag) {
                styleTag = document.createElement('style');
                styleTag.id = 'custom-user-css';
                document.head.appendChild(styleTag);
            }
            styleTag.innerHTML = e.target.result;
        };
        reader.readAsText(cssInput.files[0]);
    } else {
        const styleTag = document.getElementById('custom-user-css');
        if (styleTag) styleTag.innerHTML = '';
    }

    // 8. Sabiduría Ancestral (Opcional)
    const showWisdom = document.getElementById('show-wisdom').checked;
    const outWisdom = document.getElementById('out-wisdom');
    if (showWisdom) {
        const wisdom = getWisdom(data);
        outWisdom.style.display = 'block';
        outWisdom.querySelector('.wisdom-text').textContent = wisdom.text;
        outWisdom.querySelector('.wisdom-source').textContent = `-- ${wisdom.source}`;
    } else {
        outWisdom.style.display = 'none';
    }

    // 9. Extra: Magia Visual (Partículas)
    let particlesContainer = mediaContainer.querySelector('.particles-container');
    if (!particlesContainer) {
        particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        mediaContainer.appendChild(particlesContainer);
    } else {
        particlesContainer.innerHTML = ''; // Limpiar anteriores
    }

    if (['nature', 'cyber', 'sunset', 'ocean'].includes(tema)) {
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 4 + 2;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;

            if (tema === 'nature') p.style.background = '#d4af37';
            if (tema === 'cyber') p.style.background = '#00ffcc';
            if (tema === 'ocean') p.style.background = '#64ffda';
            if (tema === 'sunset') p.style.background = '#ff9e7a';

            particlesContainer.appendChild(p);

            gsap.set(p, {
                x: Math.random() * (mediaContainer.offsetWidth || 500),
                y: Math.random() * (mediaContainer.offsetHeight || 300),
                opacity: Math.random() * 0.5 + 0.1
            });
            gsap.to(p, {
                y: "-=50",
                x: "+=" + (Math.random() * 40 - 20),
                opacity: 0,
                duration: Math.random() * 3 + 2,
                repeat: -1,
                yoyo: false,
                ease: "linear",
                delay: Math.random() * 2
            });
        }
    }

    // --- ANIMACIONES COGNITIVAS GSAP ---
    gsap.set(card, { opacity: 0, y: 40, scale: 0.95 });

    gsap.to(card, {
        duration: animDuration,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: animEase
    });

    gsap.fromTo("#dynamic-content > *",
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, delay: 0.3, ease: "power2.out" }
    );

    // ... (previous GSAP configs stay the same)
    gsap.fromTo("#out-wisdom",
        { opacity: 0, scale: 0.95 },
        {
            opacity: 1,
            scale: 1,
            duration: animDuration,
            delay: animDuration - 0.2,
            ease: "power2.out"
        }
    );
}

// ============================================
//         MÓDULOS DE EXPORTACIÓN
// ============================================

function getAnimalName() {
    const titleEl = document.querySelector('.title-main');
    return titleEl ? titleEl.textContent.trim().replace(/\s+/g, '_') : 'Ficha_Animal';
}

// 1. Exportar como PNG (Imagen)
document.getElementById('btn-export-img').addEventListener('click', async () => {
    const card = document.getElementById('card');
    // Reiniciamos temporalmente border-radius o sombras externas que puedan cortarse, 
    // html2canvas suele capturar mejor nodos limpios, pero confiaremos en su render.
    try {
        const canvas = await html2canvas(card, {
            scale: 2, // Retinadisplay ready
            useCORS: true,
            backgroundColor: null
        });
        const link = document.createElement('a');
        link.download = `Memoria_${getAnimalName()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (e) {
        console.error("Error al exportar a imagen:", e);
        alert("Ocurrió un error al capturar la imagen. Asegurate de que los medios no estén bloqueados por CORS.");
    }
});

// 2. Exportar como PDF
document.getElementById('btn-export-pdf').addEventListener('click', async () => {
    const card = document.getElementById('card');
    try {
        const canvas = await html2canvas(card, { scale: 2, useCORS: true });
        // Utilizando jsPDF cargado del CDN
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4'); // Retrato, milímetros, res A4

        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        // Calculamos la proporción para que encaje
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        // Colocamos la imagen centrada con un poco de margen superior
        pdf.addImage(imgData, 'PNG', 0, 15, pdfWidth, pdfHeight);

        pdf.save(`Dossier_${getAnimalName()}.pdf`);
    } catch (e) {
        console.error("Error al exportar a PDF:", e);
        alert("Hubo un error al generar el documento PDF.");
    }
});

// 3. Exportar como Video (Capturando la Animación WebM Únicamente de la Ficha)
document.getElementById('btn-export-vid').addEventListener('click', async () => {
    alert("Para grabar el video de forma óptima, se te pedirá seleccionar 'Esta pestaña' (preferCurrentTab). Compartir el audio de la pestaña es opcional pero recomendado.");
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: { displaySurface: "browser", preferCurrentTab: true },
            audio: true
        });

        // Calcular duración lógica del video
        let recordDuration = 6000; // default 6s
        const mediaInput = document.getElementById('media-upload');
        const audioInput = document.getElementById('audio-upload');
        let hasVideo = false;
        let slideCount = 0;

        if (mediaInput.files && mediaInput.files.length > 0) {
            if (mediaInput.files[0].type.startsWith('video/')) {
                const vid = document.getElementById('main-video');
                if (vid && vid.duration && vid.duration !== Infinity) {
                    recordDuration = vid.duration * 1000;
                }
                hasVideo = true;
            } else if (mediaInput.files.length > 1) {
                slideCount = mediaInput.files.length;
                recordDuration = slideCount * 3000; // 3s per slide
            }
        }

        if (!hasVideo && slideCount === 0 && audioInput.files && audioInput.files.length > 0) {
            const aud = document.getElementById('out-audio');
            if (aud && aud.duration && aud.duration !== Infinity) {
                recordDuration = aud.duration * 1000;
            }
        }

        if (!recordDuration || recordDuration < 3000 || recordDuration === Infinity) {
            recordDuration = 6000;
        }

        const card = document.getElementById('card');

        // --- MODO GRABACIÓN: Aislar y centrar la ficha para captura perfecta ---
        document.body.classList.add('recording-mode');

        // Forzar reducción del zoom web al 33%
        document.body.style.zoom = "33%";

        // Ajustar escala extra si aun así la ficha no cabe en el 90% vertical
        const vh = window.innerHeight;
        const cardHeight = card.offsetHeight;
        if (cardHeight > vh * 0.9) {
            const scale = (vh * 0.9) / cardHeight;
            card.style.transform = `scale(${scale})`;
            card.style.transformOrigin = 'center top';
        }

        window.scrollTo(0, 0);

        // Relanzamos la animación inmediatamente para registrar su nacimiento
        manifestCard();

        // Canvas de cultivo (Crop Canvas)
        const rect = card.getBoundingClientRect();
        const cropCanvas = document.createElement('canvas');
        cropCanvas.width = rect.width;
        cropCanvas.height = rect.height;
        const ctx = cropCanvas.getContext('2d');
        let canvasResized = false;

        const hiddenVideo = document.createElement('video');
        hiddenVideo.srcObject = stream;
        hiddenVideo.muted = true;
        hiddenVideo.play();

        let isRecording = true;
        function drawFrame() {
            if (!isRecording) return;

            // Esperar a tener dimensiones reales del stream
            if (hiddenVideo.videoWidth === 0 || hiddenVideo.videoHeight === 0) {
                requestAnimationFrame(drawFrame);
                return;
            }

            const curRect = card.getBoundingClientRect();

            // Factor de escala para soportar pantallas de alta densidad (Retina, Windows 125% DPI) y zoom del navegador
            const scaleX = hiddenVideo.videoWidth / window.innerWidth;
            const scaleY = hiddenVideo.videoHeight / window.innerHeight;

            if (!canvasResized) {
                // Aumentar la resolución del canvas de recorte para no perder calidad
                cropCanvas.width = curRect.width * scaleX;
                cropCanvas.height = curRect.height * scaleY;
                canvasResized = true;
            }

            ctx.clearRect(0, 0, cropCanvas.width, cropCanvas.height);

            const sourceX = curRect.left * scaleX;
            const sourceY = curRect.top * scaleY;
            const sourceWidth = curRect.width * scaleX;
            const sourceHeight = curRect.height * scaleY;

            ctx.drawImage(hiddenVideo, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, cropCanvas.width, cropCanvas.height);

            requestAnimationFrame(drawFrame);
        }

        hiddenVideo.onplay = () => drawFrame();

        const canvasStream = cropCanvas.captureStream(30);

        // Intentar rescatar y mezclar audio nativo de la pestaña
        if (stream.getAudioTracks().length > 0) {
            canvasStream.addTrack(stream.getAudioTracks()[0]);
        }

        let options = { mimeType: 'video/webm; codecs=vp9' };
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            options = { mimeType: 'video/webm' };
        }

        const mediaRecorder = new MediaRecorder(canvasStream, options);
        const chunks = [];

        mediaRecorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
        mediaRecorder.onstop = () => {
            isRecording = false;
            const blob = new Blob(chunks, { type: mediaRecorder.mimeType });
            const link = document.createElement('a');
            link.download = `Memoria_${getAnimalName()}.webm`;
            link.href = URL.createObjectURL(blob);
            link.click();

            stream.getTracks().forEach(track => track.stop());
            canvasStream.getTracks().forEach(track => track.stop());
            hiddenVideo.pause();

            // --- RESTAURAR UI ---
            document.body.classList.remove('recording-mode');
            document.body.style.zoom = ""; // Retornar zoom original (100%)
            card.style.transform = '';
            card.style.transformOrigin = '';
        };

        mediaRecorder.start();

        setTimeout(() => {
            if (mediaRecorder.state === "recording") {
                mediaRecorder.stop();
            }
        }, recordDuration);

    } catch (err) {
        console.error("Grabación de video fallida o cancelada:", err);
        alert("Error: Asegúrate de habilitar el uso compartido de pantalla en Chrome ('Pestaña').");
    }
});

// 4. Exportar como Datos Crudos (JSON)
document.getElementById('btn-export-data').addEventListener('click', () => {
    try {
        const yamlText = document.getElementById('yaml-input').value;
        const data = jsyaml.load(yamlText); // Transformar a objeto

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.download = `Datos_${getAnimalName()}.json`;
        link.href = URL.createObjectURL(blob);
        link.click();
    } catch (e) {
        alert("Asegúrate de que el formato YAML sea válido antes de exportar.");
    }
});

window.onload = () => {
    manifestCard();
};