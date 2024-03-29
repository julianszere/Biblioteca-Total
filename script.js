class LibraryHelper {
    constructor() {
        this.titleVariables = [
            ['La'],
            ['biblioteca'],
            ['total', 'completa', 'extensa', 'omnisciente', 'integral', 'entera', 'cabal', 'general', 'universal', 'absoluta', 'exhaustiva', 'global']
        ];
        this.textVariables = [
            ['Todo'], 
            ['estará', 'se hallará', 'permanecerá', 'se quedará', 'se encontrará', 'habitará', 'se ubicará', 'radicará', 'existirá', 'vivirá', 'residirá', 'se situará', 'se localizará'], 
            ['en', 'por', 'dentro de', 'en los confines de'], 
            ['sus'], 
            ['ciegos', 'invidentes', 'cegados', 'ofuscados', 'oscuros', 'insondables', 'enigmáticos', 'inexplorados', 'profundos'], 
            ['volúmenes.', 'tomos.', 'ejemplares.', 'libros.', 'textos.', 'escritos.', 'manuscritos.'], 
            ['Todo:'], 
            ['la'], 
            ['historia', 'crónica', 'memoria', 'habladuría', 'narración', 'descripción'], 
            ['minuciosa', 'meticulosa', 'puntillosa', 'metódica', 'cuidadosa', 'quisquillosa', 'exhaustiva', 'rigurosa', 'detallada', 'precisa', 'escrupulosa', 'completa'], 
            ['del'], 
            ['porvenir,', 'futuro,', 'destino,', 'mañana,'], 
            ['Los egipcios de Esquilo,'], 
            ['el'], 
            ['número'], 
            ['preciso', 'imperioso', 'conciso', 'específico', 'determinado', 'riguroso', 'estricto', 'severo', 'rígido', 'escrupuloso', 'quisquilloso', 'puntilloso', 'exacto', 'correcto'], 
            ['de'], 
            ['veces', 'ocasiones', 'oportunidades', 'momentos', 'instancias'], 
            ['que'], 
            ['las'], 
            ['aguas', 'corrientes'], 
            ['de'], 
            ['Ganges', 'Yamuna', 'Tapi', 'Narmada', 'Kaveri', 'Godavari'], 
            ['han'], 
            ['reflejado', 'reflectado', 'plasmado', 'manifestado', 'evidenciado', 'mostrado', 'reproducido', 'registrado', 'proyectado'], 
            ['el'], 
            ['vuelo', 'ascenso', 'viaje', 'desplazamiento', 'trayecto', 'movimiento', 'alzamiento', 'aleteo'], 
            ['de'], 
            ['un'], 
            ['halcón,', 'águila,', 'búho,'], 
            ['el'], 
            ['secreto', 'misterioso', 'enigmático', 'oculto', 'ignoto', 'reservado', 'confidencial', 'clandestino', 'privado'], 
            ['y', 'pero', 'aunque', 'mas'], 
            ['verdadero', 'verídico', 'correcto', 'genuino', 'auténtico', 'legítimo', 'fidedigno', 'probado', 'sincero', 'original', 'veraz'], 
            ['nombre', 'apelativo', 'título'], 
            ['de'], 
            ['Roma,'], 
            ['la'], 
            ['enciclopedia'], 
            ['que'], 
            ['hubiera', 'habría', 'puediera haber'], 
            ['edificado', 'consturido', 'elevado', 'levantado', 'alzado', 'fabricado', 'obrado', 'creado', 'elaborado', 'compuesto', 'erigido'], 
            ['Novalis,'], 
            ['mis'], 
            ['sueños', 'fantasías', 'visiones', 'ilusiones', 'deseos'], 
            ['y'], 
            ['entresueños'], 
            ['en', 'durante', 'por'], 
            ['el'], 
            ['alba', 'crepúsculo', 'amanecer'], 
            ['del'], 
            ['primero', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho'],
            ['de'], 
            ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
            ['de'], 
            ['1934,'], 
            ['la'], 
            ['demostración', 'prueba', 'evidencia'], 
            ['del teorema de Pierre Fermat,'], 
            ['los'], 
            ['no', 'jamás', 'nunca'], 
            ['escritos', 'transcritos', 'documentados'], 
            ['capítulos', 'títulos'], 
            ['de Edwin Drood,', 'de Franz Kafka,'],
            ['esos', 'aquellos'], 
            ['mismos', 'idénticos', 'exactos'], 
            ['capítulos', 'títulos', 'fragmentos', 'textos'], 
            ['traducidos', 'transcritos', 'convertidos', 'trasladados', 'adaptados'], 
            ['al'], 
            ['idioma', 'lenguaje', 'dialecto'], 
            ['que'], 
            ['hablaron', 'verbalizaron', 'conversaron', 'dialogaron', 'trataron', 'conversaron', 'versaron',  'trataron', 'versaron', 'murmuraron', 'cuchichearon', 'criticaron', 'dominaron', 'manejaron', 'evocaron'], 
            ['los'], 
            ['garamantas,', 'cartagineses,'], 
            ['las'], 
            ['paradojas', 'contradicciones'], 
            ['que'], 
            ['ideó', 'pensó', 'imaginó', 'concibió', 'discurrió', 'proyectó', 'inventó', 'esbozó', 'creó', 'desarrolló', 'elaboró', 'diseñó', 'formuló', 'planteó'], 
            ['Berkeley'], 
            ['acerca'], 
            ['del'], 
            ['Tiempo'], 
            ['y'], 
            ['que'], 
            ['no', 'jamás', 'nunca'], 
            ['publicó,', 'divulgó,', 'difundió,', 'propagó,', 'reveló,', 'presentó,', 'compartió,', 'reveló,'], 
            ['los'], 
            ['libros', 'ejemplares', 'tomos', 'volúmenes', 'textos', 'escritos'], 
            ['de'], 
            ['hierro', 'cobre'], 
            ['de'], 
            ['Urizen,'], 
            ['las'], 
            ['prematuras', 'precoces', 'precipitadas', 'tempranas', 'adleantadas', 'anticipadas'], 
            ['epifanías', 'revelaciones'], 
            ['de'], 
            ['Stephen Dedalus', 'James Joyce'], 
            ['que'], 
            ['antes de', 'previo a'], 
            ['un'], 
            ['ciclo', 'periodo', 'lapso', 'periodo', 'tiempo'], 
            ['de'], 
            ['cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos', 'mil'],
            ['años'], 
            ['nada', 'ninguna cosa'], 
            ['querrán', 'podrán', 'lograrán', 'conseguirán', 'serán capaz de'], 
            ['decir,', 'expresar,', 'comunicar,', 'manifestar,', 'afirmar,', 'explicar,', 'declarar,', 'transmitir,', 'enunciar,', 'pronunciar,'], 
            ['el evangelio gnóstico de Basílides,'], 
            ['el'], 
            ['cantar', 'canto'], 
            ['que'], 
            ['cantaron', 'interpretaron', 'entonaron', 'chillaron', 'vocalizaron'], 
            ['las'], 
            ['sirenas,'], 
            ['el'], 
            ['catálogo', 'índice'], 
            ['fiel', 'noble', 'confiable', 'sincero', 'riguroso', 'fidedigno', 'completo'], 
            ['de'], 
            ['la'], 
            ['Biblioteca,'], 
            ['la'], 
            ['demostración', 'prueba', 'razón', 'justificación', 'evidencia', 'corroboración', 'verificación'], 
            ['de'], 
            ['la'], 
            ['falacia', 'imposibilidad', 'falsedad', 'inexactitud'], 
            ['de'], 
            ['ese', 'aquel'], 
            ['catálogo.', 'índice.'], 
            ['Todo,'], 
            ['pero', 'mas', 'aunque'], 
            ['por', 'para'], 
            ['una'], 
            ['línea', 'oración', 'frase'], 
            ['razonable', 'prudente', 'suficiente', 'sensata'], 
            ['o'], 
            ['una'], 
            ['justa', 'simple', 'sencilla', 'inocente'], 
            ['noticia', 'comunicación', 'nota', 'novedad', 'idea', 'información'], 
            ['habrá', 'existirán', 'se encontrarán', 'aparecerán'], 
            ['miles', 'millones', 'billones', 'trillones'], 
            ['de'], 
            ['insensatas', 'alocadas', 'locas', 'desatinadas', 'irrazonables', 'ilógicas', 'descabelladas', 'irracionales', 'absurdas', 'incongruentes', 'disparatadas'], 
            ['cacofonías,', 'disonancias,', 'discordancias,', 'discrepancias,'], 
            ['de'],
            ['fárragos', 'revoltijos', 'maremagnos'], 
            ['verbales'], 
            ['y'], 
            ['de'], 
            ['incoherencias.', 'incongruencias.', 'contradicciones.', 'absurdos.', 'barbaridades.', 'inconsistencias'], 
            ['Todo,'], 
            ['pero', 'mas', 'aunque'], 
            ['las'], 
            ['generaciones', 'descendencias', 'sucesiones'], 
            ['de'], 
            ['los'], 
            ['hombres', 'mortales'], 
            ['pueden', 'son capaces de'], 
            ['pasar', 'cambiar', 'acabar', 'sufrir', 'transcurrir', 'transitar'], 
            ['sin'], 
            ['que'], 
            ['los'], 
            ['anaqueles', 'estantes'], 
            ['vertiginosos'], 
            ['-los'], 
            ['anaqueles', 'estantes'], 
            ['que'], 
            ['obliteran', 'obturan', 'taponan', 'atrancan', 'ocultan', 'esconden'], 
            ['el'], 
            ['día'], 
            ['y'], 
            ['en', 'por'], 
            ['los'], 
            ['que'], 
            ['habita', 'vive', 'mora', 'anida', 'se asienta', 'existe', 'reside', 'premanece', 'se encuentra', 'se aloja'], 
            ['el'], 
            ['caos-', 'desorden-', 'desconcierto-'], 
            ['les'], 
            ['hayan', 'hubieran'], 
            ['otorgado', 'regalado', 'donado', 'cedido', 'concedido', 'consentido', 'dispensado', 'brindado', 'entregado', 'proporcionado', 'facilitado', 'permitido', 'ofrecido'], 
            ['una'], 
            ['página', 'hoja'], 
            ['tolerable.', 'soportable.', 'leible.', 'aceptable.', 'razonable.']
        ];
        this.authorVariables = [
            ['Jorge Luis Borges', 'Luis Jorge Borges', 'Luis Borges Jorge', 'Borges Luis Jorge', 'Borges Jorge Luis', 'Jore Borges Luis']
        ];

        this.container = document.getElementById('repeatsPosts');
        this.createAndAddTextPost()
    }

    newCombination(synonyms) {
        let text = '';
        for (let i = 0; i < synonyms.length; i++) {
            let synonym = synonyms[i];
            let word = synonym[Math.floor(Math.random() * synonym.length)];
            text += ' ' + word;
        }
        return text;
    }

    getTitleTextAndAuthor() {
        return [this.newCombination(this.titleVariables), this.newCombination(this.textVariables), this.newCombination(this.authorVariables)]
    }

    createAndAddTextPost() {
        const [title, text, author] = this.getTitleTextAndAuthor();
        const container = document.createElement('div');
        container.classList.add('text-post');

        const titleReloadContainer = this.createTitleReloadContainer(title, () => {
            const [newTitle, newText, newAuthor] = this.getTitleTextAndAuthor();
            this.updateTextPost(container, newTitle, newText, newAuthor);
        });

        container.appendChild(titleReloadContainer);

        const paragraphs = text.split('\n');
        paragraphs.forEach(paragraph => {
            const content = this.createParagraph(paragraph);
            container.appendChild(content);
        });

        const authorElement = this.createAuthorElement(author, container);

        this.container.appendChild(container);
    }

    createTitleReloadContainer(title, onReload) {
        const titleReloadContainer = document.createElement('div');
        titleReloadContainer.classList.add('title-reload-container');

        const titleElement = this.createTitleElement(title);
        titleReloadContainer.appendChild(titleElement);

        const reloadButton = this.createReloadButton(onReload);
        titleReloadContainer.appendChild(reloadButton);

        return titleReloadContainer;
    }

    createTitleElement(title) {
        const titleElement = document.createElement('h2');
        titleElement.textContent = title;
        return titleElement;
    }

    createReloadButton(onReload) {
        const reloadButton = document.createElement('button');
        reloadButton.innerHTML = '<img src="icon.png" alt="Reload">';
        reloadButton.classList.add('reload-button');
        reloadButton.addEventListener('click', onReload);
        return reloadButton;
    }

    updateTextPost(container, title, text, author) {
        const titleElement = container.querySelector('h2');
        titleElement.textContent = title;

        const contentElements = container.querySelectorAll('p');
        contentElements.forEach(contentElement => {
            contentElement.textContent = ''; // Clear previous content
        });

        const paragraphs = text.split('\n');
        paragraphs.forEach(paragraph => {
            const content = this.createParagraph(paragraph);
            container.appendChild(content);
        });

        this.createAuthorElement(author, container)
    }

    createParagraph(paragraph) {
        const content = document.createElement('p');
        content.textContent = paragraph;
        return content;
    }

    createAuthorElement(author, container) {
        if (author) {
            const authorElement = document.createElement('p');
            authorElement.innerHTML = `<em>${author}</em>`;
            authorElement.style.textAlign = 'right';
            container.appendChild(authorElement);
        }
    }
}

const libraryHelper = new LibraryHelper();
