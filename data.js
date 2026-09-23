// Project content — bilingual (CA / EN)
window.PROJECTS = [
  {
    id: "cafe-vellut",
    num: "01",
    title: "Cafè Vellut",
    category: { ca: "Maqueta / Espai", en: "Model / Space" },
    location: { ca: "Barcelona", en: "Barcelona" },
    institution: { ca: "BAU, Centre Universitari d'Arts i Disseny", en: "BAU, University of Design and Fine Arts" },
    date: "17-03-2025",
    role: { ca: "Disseny i construcció de maqueta", en: "Design and model-making" },
    collaborators: { ca: "Elsa Carretero", en: "Elsa Carretero" },
    materials: { ca: "Volanderes, anelles, acer, fusta. Caixa 60 × 40 × 30 cm", en: "Washers, rings, steel, wood. Box 60 × 40 × 30 cm" },
    dimensions: "60 × 40 × 30 cm",
    blurb: {
      ca: "Reinterpretació del Cafè Samt & Seide de Mies van der Rohe i Lilly Reich (1927). Materials de ferreteria en lloc de vellut; una maqueta pensada per a una sola fotografia.",
      en: "A reinterpretation of Mies van der Rohe and Lilly Reich's Samt & Seide café (1927). Hardware materials instead of velvet; a model designed for a single photograph."
    },
    body: {
      ca: "El projecte reinterpreta el Cafè Samt & Seide de Mies van der Rohe i Lilly Reich (1927), on el vellut definia l'atmosfera d'un espai de reunió. L'encàrrec proposava convertir aquell cafè en una ferreteria; la resposta va ser mantenir la funció original però substituir el material: en lloc de vellut, les qualitats tàctils i visuals de les peces de ferreteria. La maqueta, construïda dins d'una caixa de 60 × 40 × 30 cm, va ser pensada per a un únic punt de vista. La llum, la disposició dels elements i la profunditat de l'espai es van calibrar per a una sola fotografia: la que havia de comunicar el projecte.",
      en: "The project reinterprets Mies van der Rohe and Lilly Reich's Samt & Seide café (1927), where velvet defined the atmosphere of a gathering space. The brief proposed turning that café into a hardware shop; the response was to keep the original function but swap the material: instead of velvet, the tactile and visual qualities of hardware components. The model, built inside a 60 × 40 × 30 cm box, was designed for a single viewpoint. Light, arrangement and spatial depth were all calibrated for one photograph: the one that would communicate the project."
    },
    images: [
      { src: "assets/projects/cafe-vellut-mies.jpg", layout: "ref", caption: { ca: "Referència: Samt & Seide, Mies van der Rohe & Lilly Reich, 1927", en: "Reference: Samt & Seide, Mies van der Rohe & Lilly Reich, 1927" } },
      { src: "assets/projects/cafe-vellut-01.jpg", layout: "full", caption: { ca: "Cortina principal, vista frontal", en: "Main curtain, frontal view" } },
      { src: "assets/projects/cafe-vellut-detail.jpg", layout: "half-l", caption: { ca: "Detall: anella i volandera, 1:1", en: "Detail: ring and washer, 1:1" } },
      { src: "assets/projects/cafe-vellut-exterior.jpg", layout: "half-r", caption: { ca: "Exterior: pavelló, llum natural", en: "Exterior: pavilion, natural light" } },
      { src: "assets/projects/cafe-vellut-people.jpg", layout: "full", caption: { ca: "L'espai habitat", en: "The space inhabited" } }
    ],
    cover: "assets/projects/cafe-vellut-01.jpg",
    tile: "t-large",
    filter: "instalacio"
  },
  {
    id: "alter-bn",
    num: "02",
    title: "Alter BN",
    category: { ca: "Disseny d'interiors / retail", en: "Interior design / retail" },
    location: { ca: "Barcelona", en: "Barcelona" },
    institution: { ca: "BAU, Centre Universitari de Disseny", en: "BAU, University of Design and Fine Arts" },
    date: "11-03-2025",
    role: { ca: "Disseny", en: "Design" },
    collaborators: { ca: "Berta Magallón", en: "Berta Magallón" },
    coordinator: "Lluís Alexandre",
    materials: { ca: "Acer, vidre, cadena industrial, formigó", en: "Steel, glass, industrial chain, concrete" },
    blurb: {
      ca: "Concepte comercial per a una botiga de cerveses i destil·lats a Barcelona. La façana es repensa com un mecanisme transversable: un panell vidriat, muntat sobre cadena, llisca 50 cm i descobreix una barra secundària.",
      en: "Retail concept for a brews and drinks shop in Barcelona. The storefront is rethought as a transversable mechanism: a glazed panel, mounted on a chain track, slides 50 cm and reveals a secondary bar."
    },
    body: {
      ca: "El projecte parteix de l'encàrrec de reforma d'un local a Barcelona, en col·laboració amb la Maia Wen i la Mar Ribas. Es planteja una reforma basada en la dualitat: dia i nit, dins i fora, oci i comerç. Una paret transversal de vidre temperat dividida llisca, mitjançant un mecanisme de cadena, per permetre l'alternança entre les dues funcions.",
      en: "The project starts from the brief of refurbishing a venue in Barcelona, in collaboration with Maia Wen and Mar Ribas. The proposal is based on duality: day and night, inside and outside, leisure and commerce. A horizontal tempered-glass partition slides on a chain mechanism to allow alternation between the two functions."
    },
    images: [
      { src: "assets/projects/alter-bn-model.jpg", layout: "half-l", caption: { ca: "Maqueta: vista isomètrica del mecanisme", en: "Model: isometric view of the mechanism" } },
      { src: "assets/projects/alter-bn-loop.mov", layout: "half-r", type: "video", caption: { ca: "Mecanisme: cadena, moviment", en: "Mechanism: chain, movement" } },
      { src: "assets/projects/alter-bn-plans.jpg", layout: "plan", caption: { ca: "Planta · secció · axonometria, A1", en: "Plan · section · axonometric, A1" } }
    ],
    cover: "assets/projects/alter-bn-model.jpg",
    tile: "t-medium",
    filter: "espais"
  },
  {
    id: "cine-infantil",
    num: "03",
    title: "CineClub Infantil",
    category: { ca: "Disseny d'edificis / entorn", en: "Floor Building Design / environment" },
    location: { ca: "Barcelona, Poblenou", en: "Barcelona, Poblenou" },
    institution: { ca: "BAU, Centre Universitari d'Arts i Disseny", en: "BAU, University of Design and Fine Arts" },
    date: "30-01-2025",
    role: { ca: "Disseny", en: "Design" },
    blurb: {
      ca: "Edifici comunitari al Poblenou per a un cineclub infantil. Els sostres de les aules actuen com a terres tous: cinema a l'interior i a l'exterior, sense seients ni pantalla definida.",
      en: "Community building in Poblenou for a children's film club. Classroom ceilings act as soft floors: cinema inside and outside, without seats or a fixed screen."
    },
    body: {
      ca: "Allotjar una societat consisteix a investigar les necessitats d'una organització cultural al barri del Poblenou; en el meu cas, un cineclub infantil. Posteriorment, juntament amb tots els membres participants en el projecte, es va reunir tot en un únic edifici, intentant maximitzar les relacions entre plantes i, per tant, connectar aquestes associacions culturals tan diverses. Vaig buscar millores espacials seguint el programa d'activitats que ja teníem. El concepte del projecte busca crear oportunitats infinites per veure pel·lícules: els sostres de les aules actuen com a terres tous perquè els nens s'hi puguin asseure i projectar pel·lícules a qualsevol de les parets. En altres paraules, l'interior funciona com a aules convencionals, mentre que l'exterior funciona com un cinema sense seients ni pantalla definida.",
      en: "Sheltering a society consists of carrying out research into the needs of a cultural organization in the Poblenou neighbourhood: in this case, a children's film club. Afterwards, together with all the members who took part in the project, we gathered everything in a single building, trying to maximize the relationships between floors and connect these very diverse cultural associations. I looked for spatial improvements following the activities programme we already had. The concept aims to create endless opportunities to watch films: classroom ceilings act as soft floors so that children can sit on them and project films onto any of the walls. In other words, the interior functions as conventional classrooms, while the exterior functions as a cinema without seats or a defined screen."
    },
    images: [
      { src: "assets/projects/cine-infantil-plans-v1.jpg", layout: "plan", caption: { ca: "Plànols v.1: planta, secció, alçat", en: "Plans v.1: floor plan, section, elevation" } },
      { src: "assets/projects/cine-infantil-plans-v2.jpg", layout: "plan", caption: { ca: "Plànols v.2: planta definitiva", en: "Plans v.2: final floor plan" } },
      { src: "assets/projects/cine-infantil-model.mp4", layout: "full", type: "video", caption: { ca: "Maqueta, vídeo", en: "Model, video" } },
      { src: "assets/projects/cine-infantil-01.jpg", layout: "half-l", caption: { ca: "Vista exterior", en: "Exterior view" } },
      { src: "assets/projects/cine-infantil-02.jpg", layout: "half-r", caption: { ca: "Vista interior", en: "Interior view" } },
      { src: "assets/projects/cine-infantil-03.jpg", layout: "half-l", caption: { ca: "Detall", en: "Detail" } },
      { src: "assets/projects/cine-infantil-04.jpg", layout: "half-r", caption: { ca: "Maqueta", en: "Model" } }
    ],
    cover: "assets/projects/cine-infantil-01.jpg",
    tile: "t-medium",
    filter: "espais"
  },
  {
    id: "i-am",
    num: "04",
    title: "I AM",
    category: { ca: "Disseny d'espais / exposició", en: "Space design / exhibition" },
    location: { ca: "Barcelona", en: "Barcelona" },
    institution: { ca: "BAU, Centre Universitari d'Arts i Disseny", en: "BAU, University of Design and Fine Arts" },
    date: "2025",
    role: { ca: "Disseny espacial", en: "Spatial design" },
    collaborators: { ca: "Marc Huget (disseny d'espais). Laia Rovira, Gina Valenti, Silvia Candès, Ivan Tirado (moda)", en: "Marc Huget (spatial design). Laia Rovira, Gina Valenti, Silvia Candès, Ivan Tirado (fashion)" },
    materials: { ca: "Tub metàl·lic cromat, malla metàl·lica, connectors esfera", en: "Chrome steel tube, wire mesh, ball joint connectors" },
    blurb: {
      ca: "Quatre estands dissenyats per a la presentació dels treballs finals de grau dels estudiants de moda de BAU. Estructura de tub cromat i malla, un marc neutre que cedeix el protagonisme als teixits.",
      en: "Four stands designed for the final-degree fashion show at BAU. Chrome tube and wire mesh, a neutral frame that yields centre stage to the garments."
    },
    body: {
      ca: "El projecte sorgeix d'una col·laboració entre dos estudiants de disseny d'espais, Josep Rodon i Marc Huget, i quatre estudiants de moda: Laia Rovira, Gina Valenti, Silvia Candès i Ivan Tirado. L'encàrrec era dissenyar els estands on cadascú presentaria el seu treball final de grau. La resposta va ser un sistema modular de tub metàl·lic cromat i malla estirada: una estructura lleugera que defineix l'espai sense tancar-lo. Els panells de malla actuen de suport i de divisor, però deixen passar la llum i la mirada. L'estructura desapareix quan hi ha roba; emergeix quan l'espai és buit.",
      en: "The project began as a collaboration between two spatial design students, Josep Rodon and Marc Huget, and four fashion students: Laia Rovira, Gina Valenti, Silvia Candès and Ivan Tirado. The brief was to design the stands where each would present their final-degree work. The response was a modular system of chrome steel tube and stretched wire mesh: a lightweight structure that defines space without enclosing it. The mesh panels act as support and divider, yet let light and the eye pass through. The structure disappears when clothes are present; it emerges when the space is empty."
    },
    images: [
      { src: "assets/projects/i-am-03.jpg", layout: "full", caption: { ca: "Detall: connector esfera, malla", en: "Detail: ball connector, mesh" } },
      { src: "assets/projects/i-am-04.jpg", layout: "full", caption: { ca: "Estructura: vista inferior", en: "Structure: view from below" } },
      { src: "assets/projects/i-am-01.jpg", layout: "half-l", caption: { ca: "Espai instal·lat: panells i obra exposada", en: "Installed space: panels and displayed work" } },
      { src: "assets/projects/i-am-02.jpg", layout: "half-r", caption: { ca: "Muntatge: visió general de l'estudi", en: "Installation: general studio view" } },
      { src: "assets/projects/i-am-05.jpg", layout: "half-l", caption: { ca: "Torre: geometria vertical", en: "Tower: vertical geometry" } },
      { src: "assets/projects/i-am-06.jpg", layout: "half-r", caption: { ca: "Peça exposada: col·laboració amb moda", en: "Displayed piece: fashion collaboration" } },
      { src: "assets/projects/i-am-esquema.jpg", layout: "ref", caption: { ca: "Esquema estètica: els quatre estudiants de moda", en: "Aesthetic scheme: the four fashion students" } }
    ],
    cover: "assets/projects/i-am-03.jpg",
    tile: "t-medium",
    filter: "instalacio"
  },
  {
    id: "can-mor",
    num: "05",
    title: "Can Mor CASA",
    category: { ca: "Documentació / Habitatge", en: "Documentation / Housing" },
    location: { ca: "Barcelona", en: "Barcelona" },
    institution: { ca: "BAU, Centre Universitari d'Arts i Disseny", en: "BAU, University of Design and Fine Arts" },
    date: "27-01-2025",
    role: { ca: "Disseny i documentació AutoCAD", en: "Design and AutoCAD documentation" },
    blurb: {
      ca: "Documentació i redisseny de l'habitatge familiar. El projecte treballa la tensió entre compartir i privatitzar: un espai d'estudi independent inserit dins la casa existent.",
      en: "Documentation and redesign of the family home. The project works the tension between sharing and privacy: an independent study space inserted within the existing house."
    },
    body: {
      ca: "El projecte comença com un exercici d'aprenentatge amb AutoCAD: mesurar i dibuixar l'habitatge familiar amb la màxima precisió possible, en planta i en secció. Sobre aquesta base construïda s'hi incorporen detalls i es desenvolupa un concepte. A Can Mor, la manca d'un espai propi és una necessitat real. El projecte treballa sobre la tensió entre compartir i privatitzar: identificar quins espais es poden individualitzar sense trencar la vida col·lectiva de la casa. La segona fase proposa canviar els usuaris: nous habitants amb necessitats i rutines diverses, i redissenyar alguns espais per adaptar-los a les noves exigències. L'exercici es tanca amb una axonometria a color que condensa la intervenció.",
      en: "The project begins as a learning exercise in AutoCAD: measuring and drawing the family home as accurately as possible, in plan and section. On that built foundation, details are added and a concept is developed. At Can Mor, the lack of private space is a real need. The project works the tension between sharing and privatising: identifying which spaces can become individual without breaking the collective life of the house. The second phase proposes changing the users: new inhabitants with different needs and routines, and redesigning some spaces to meet those demands. The exercise closes with a colour axonometric that condenses the intervention."
    },
    images: [
      { src: "assets/projects/can-mor-8.jpg", layout: "full", caption: { ca: "Axonometria de la intervenció: color, 1:50", en: "Axonometric of the intervention: colour, 1:50" } },
      { src: "assets/projects/can-mor-2.jpg", layout: "plan", caption: { ca: "Enderroc i obra nova: axonometria, 1:90", en: "Demolition and new construction: axonometric, 1:90" } },
      { src: "assets/projects/can-mor-3.jpg", layout: "plan", caption: { ca: "Estat actual: planta 1 i 2, 1:75", en: "Existing state: floors 1 and 2, 1:75" } },
      { src: "assets/projects/can-mor-4.jpg", layout: "plan", caption: { ca: "Estat actual: secció, 1:50", en: "Existing state: section, 1:50" } },
      { src: "assets/projects/can-mor-1.jpg", layout: "plan", caption: { ca: "Enderroc i obra nova: planta 1 i 2, 1:75", en: "Demolition and new construction: floors 1 and 2, 1:75" } },
      { src: "assets/projects/can-mor-7.jpg", layout: "plan", caption: { ca: "Enderroc i obra nova: secció, 1:50", en: "Demolition and new construction: section, 1:50" } },
      { src: "assets/projects/can-mor-5.jpg", layout: "half-l", caption: { ca: "Manifest: (Des)connexió", en: "Manifesto: (Dis)connection" } },
      { src: "assets/projects/can-mor-6.jpg", layout: "half-r", caption: { ca: "Descripció dels nous usuaris", en: "New users description" } }
    ],
    cover: "assets/projects/can-mor-8.jpg",
    tile: "t-medium",
    filter: "espais"
  },
  {
    id: "molta-fusta",
    num: "06",
    title: "Molta Fusta",
    category: { ca: "Fabricació digital / Objecte artístic", en: "Digital fabrication / Art object" },
    location: { ca: "Barcelona, BAU", en: "Barcelona, BAU" },
    institution: { ca: "BAU, Centre Universitari d'Arts i Disseny", en: "BAU, University of Design and Fine Arts" },
    date: "2025",
    role: { ca: "Disseny, construcció CNC i impressió 3D", en: "Design, CNC construction and 3D printing" },
    collaborators: { ca: "Roger Llimona (disseny gràfic i pintura)", en: "Roger Llimona (graphic design and painting)" },
    materials: { ca: "Fusta de pi 200×60 cm, PLA, spray", en: "Pine wood 200×60 cm, PLA, spray paint" },
    filter: "instalacio",
    blurb: {
      ca: "Una obra d'art funcional que es transforma en tamboret. La fusta la va treballar el Josep amb fresadora CNC i impressió 3D; la pintura és del Roger Llimona, grafiter. Dues visions, un sol objecte.",
      en: "A functional art piece that transforms into a stool. Josep built the wood structure with CNC routing and 3D printing; the painting is by Roger Llimona, street artist. Two visions, one object."
    },
    body: {
      ca: "El projecte neix de la col·laboració entre dues disciplines: construcció i grafiti. El Josep, amb experiència en fusta i eines, es va encarregar del disseny estructural i la fabricació amb fresadora CNC i impressora 3D. El Roger Llimona va dissenyar i executar la pintura amb spray. El repte era crear un objecte que fos simultàniament obra d'art i mobiliari funcional.\n\nLa forma del tamboret, un ninot esquematitzat com una figura humana, es va tallar amb fresadora CNC d'una fusta de pi de 200×60 cm. Les peces encaixen sense cargols: uns pius impresos en 3D les mantenen unides i en permeten el desmuntatge. Quan les peces estan posades, el resultat és un panell de paret amb el grafiti intacte. Quan es treuen, les mateixes peces es transformen en un tamboret funcional.\n\nEl procés va estar ple d'imprevistos: problemes amb la impressora 3D, ajustos de l'estructura per evitar crugits, forats addicionals per reforçar la unió. Cada obstacle va derivar en una solució afegida que enriquia el disseny. El resultat és un objecte que canvia de significat según es miri: art o seient, paret o terra.",
      en: "The project grew out of a collaboration between two disciplines: construction and graffiti. Josep, with experience in wood and tools, handled the structural design and fabrication using a CNC router and 3D printer. Roger Llimona designed and executed the spray painting. The challenge was to create an object that was simultaneously an artwork and functional furniture.\n\nThe stool shape, a schematic figure resembling a human body, was cut with a CNC router from a 200×60 cm pine board. The pieces fit together without screws: 3D-printed pins hold them in place and allow disassembly. When the pieces are in position, the result is a wall panel with the graffiti intact. When removed, the same pieces become a functional stool.\n\nThe process was full of setbacks: 3D printer failures, structural adjustments to eliminate creaking, extra holes to reinforce joints. Each obstacle led to an added solution that enriched the design. The result is an object that changes meaning depending on how you look at it: art or seat, wall or floor."
    },
    images: [
      { src: "assets/projects/molta-fusta-02.jpg", layout: "half-l", caption: { ca: "Procés: Josep treballant la fusta al carrer", en: "Process: Josep working the wood outside" } },
      { src: "assets/projects/molta-fusta-05.jpg", layout: "half-r", caption: { ca: "Desmuntatge: Roger i Josep traient les peces", en: "Disassembly: Roger and Josep removing the pieces" } },
      { src: "assets/projects/molta-fusta-04.jpg", layout: "half-l", caption: { ca: "Seient pintat vist des de dalt", en: "Painted seat seen from above" } },
      { src: "assets/projects/molta-fusta-01.jpg", layout: "half-r", caption: { ca: "Tamboret sol, vista superior", en: "Stool alone, top view" } },
      { src: "assets/projects/molta-fusta-03.jpg", layout: "half-l", caption: { ca: "En ús: persona asseguda al tamboret", en: "In use: person seated on the stool" } },
      { src: "assets/projects/molta-fusta-06.jpg", layout: "half-r", caption: { ca: "Detall de la unió de fusta", en: "Detail of the wood joint" } },
      { src: "assets/projects/molta-fusta-07.jpg", layout: "third-c", caption: { ca: "Detall de la pintura: la cara", en: "Painting detail: the face" } }
    ],
    cover: "assets/projects/molta-fusta-04.jpg",
    tile: "t-medium"
  },
  {
    id: "rrr",
    num: "07",
    title: "RRR",
    category: { ca: "Recerca de materials / Disseny de producte", en: "Material research / Product design" },
    location: { ca: "Barcelona, BAU", en: "Barcelona, BAU" },
    institution: { ca: "BAU, Centre Universitari d'Arts i Disseny", en: "BAU, University of Design and Fine Arts" },
    date: "2025",
    role: { ca: "Recerca, experimentació i disseny", en: "Research, experimentation and design" },
    blurb: {
      ca: "Testos biodegradables fets del cartró dels gots de cafè per emportar. El projecte investiga com separar el plàstic interior, trobar un lligant ecològic i crear un envàs que, un cop enterrat, es descomposi i deixi créixer la planta.",
      en: "Biodegradable plant pots made from takeaway coffee cup cardboard. The project investigates how to separate the inner plastic layer, find an ecological binder, and create a vessel that, once buried, decomposes and lets the plant grow."
    },
    body: {
      ca: "El punt de partida va ser la cafeteria de BAU i uns quatre-cents gots de cartró Kraft acumulats amb la complicitat del Jorge al llarg del curs. Els gots per emportar semblen plàstic però són majoritàriament cartró: lleuger, biodegradable i resistent a la calor. El problema és la capa interior de plàstic que els fa impermeables i que no és reciclable.\n\nEl primer repte va ser separar els dos materials. Submergir el cartró en aigua feia flotar el plàstic, però el procés d'assecat era massa lent. La solució definitiva va arribar per casualitat: triturar els gots amb la thermomix i aplicar aire amb un assecador sobre la barreja. El plàstic, més dens que el cartró, queda a la massa; l'aire el fa volar. En sacsejar el bol mentre s'hi aplica aire, els fragments de plàstic surten per la superfície i s'esbromen fora. Amb material net, el procés d'assecat passava de 4-6 hores a uns minuts.\n\nEl segon repte era el lligant. Després de descartar resines (DIPLAST, Jesmonite: cares, no ecològiques) i provar gelatina, agar-agar i glicerina en combinacions diverses, la fórmula guanyadora va ser la més senzilla i barata: aigua, maizena i vinagre. Biodegradable, ecològica i reproduïble a qualsevol cuina.\n\nEl tercer obstacle va ser el moho: amb maizena i vinagre la massa trigava 2-3 dies a assecar-se a l'aire, i el fong apareixia als 3 dies. La solució va ser el forn: primer a 200°C (tapa tancada), però produïa massa fum; finalment a 100°C amb la porta oberta durant 40-50 minuts. El calor elimina el moho i multiplicava per molt el procés d'assecat sense cremar el cartró.\n\nLa idea final va arribar a partir d'una proposta de la professora Marina: afegir llavors a la massa. El resultat és un test que es pot enterrar directament a terra amb la planta: el cartró tritutat es descomposa en poques setmanes, i el test passa a ser part del sòl sense deixar rastre.",
      en: "The starting point was BAU's cafeteria and around four hundred kraft cardboard cups collected with Jorge's help throughout the year. Takeaway cups look like plastic but are mostly cardboard: lightweight, biodegradable, and heat-resistant. The problem is the thin inner plastic layer that makes them waterproof and non-recyclable.\n\nThe first challenge was separating the two materials. Submerging the cardboard in water made the plastic float, but the drying process was far too slow. The real solution came by chance: blending the cups with water in the thermomix and then applying air with a hair dryer over the mixture. The plastic, denser than the cardboard pulp, stays in the mass; air lifts it off. By shaking the bowl while blowing, the plastic fragments rise to the surface and fly out. With clean material, drying time dropped from 4-6 hours to minutes.\n\nThe second challenge was the binder. After ruling out resins (DIPLAST, Jesmonite: expensive, not ecological) and testing gelatin, agar-agar and glycerin in various combinations, the winning formula was the simplest and cheapest: water, cornstarch and vinegar. Biodegradable, ecological, and reproducible in any kitchen.\n\nThe third obstacle was mould: with cornstarch and vinegar the pulp took 2-3 days to air-dry, and fungus appeared within 3 days. The solution was the oven: first at 200°C with the door closed — too much smoke — then at 100°C with the door open for 40-50 minutes. The heat eliminates mould and cuts drying time dramatically without burning the cardboard.\n\nThe final idea came from teacher Marina's suggestion: adding seeds to the pulp. The result is a pot that can be planted directly in the ground: the shredded cardboard decomposes within weeks, and the pot becomes part of the soil without leaving a trace."
    },
    images: [
      { src: "assets/projects/rrr-01.jpg", layout: "full", caption: { ca: "Producte final: testos amb suculentes", en: "Final product: pots with succulents" } },
      { src: "assets/projects/rrr-stopmotion.mp4", layout: "full", type: "video", caption: { ca: "Stop motion: procés de creació", en: "Stop motion: making process" } },
      { src: "assets/projects/rrr-03.jpg", layout: "half-l", caption: { ca: "Dos testos, dos plantes", en: "Two pots, two plants" } },
      { src: "assets/projects/rrr-04.jpg", layout: "half-r", caption: { ca: "Detall: textura del cartró tritutat", en: "Detail: shredded cardboard texture" } },
      { src: "assets/projects/rrr-02.jpg", layout: "half-l", caption: { ca: "Producte final, fons net", en: "Final product, clean background" } },
      { src: "assets/projects/rrr-05.jpg", layout: "half-r", caption: { ca: "Interior del test: terra i arrel", en: "Interior of pot: soil and root" } },
      { src: "assets/projects/rrr-samples.jpg", layout: "plan", caption: { ca: "Totes les mostres: variacions de fórmula i cocció", en: "All samples: formula and baking variations" } },
      { src: "assets/projects/rrr-process.jpg", layout: "plan", caption: { ca: "Procés sencer: 6 passos del got al test", en: "Full process: 6 steps from cup to pot" } },
      { src: "assets/projects/rrr-separation.jpg", layout: "half-l", caption: { ca: "Mostres: tres graus de trituració del material", en: "Samples: three degrees of material shredding" } },
      { src: "assets/projects/rrr-06.jpg", layout: "half-r", caption: { ca: "Context: testos a l'hivernacle", en: "Context: pots in the greenhouse" } }
    ],
    cover: "assets/projects/rrr-01.jpg",
    tile: "t-medium",
    filter: "recerca"
  },
  {
    id: "entre-pinos",
    num: "08",
    title: "Entre Pinos",
    category: { ca: "Anàlisi i redisseny / Paisatgisme", en: "Analysis and redesign / Landscape" },
    location: { ca: "Valle de Bravo, Mèxic", en: "Valle de Bravo, Mexico" },
    institution: { ca: "BAU, Centre Universitari d'Arts i Disseny", en: "BAU, University of Design and Fine Arts" },
    date: "2025",
    role: { ca: "Anàlisi, proposta i maqueta", en: "Analysis, proposal and model-making" },
    collaborators: { ca: "Taller Héctor Barroso (obra original)", en: "Taller Héctor Barroso (original work)" },
    materials: { ca: "Guix, cartró, fusta, flors seques. Maqueta 1:200", en: "Plaster, cardboard, wood, dried flowers. Model 1:200" },
    filter: "espais",
    blurb: {
      ca: "Cinc cases de cap de setmana d'Héctor Barroso a Valle de Bravo, sense zones comunes. El projecte proposa una espina pública que baixa amb el terreny: jardins, despatxos, barbacoa, sauna, piscines.",
      en: "Five weekend houses by Héctor Barroso at Valle de Bravo, with no shared spaces. The project proposes a public spine descending with the terrain: gardens, offices, barbecue, sauna, pools."
    },
    body: {
      ca: "El punt de partida és Entrepinos, un conjunt de cinc cases de cap de setmana que Héctor Barroso va construir a Valle de Bravo, Mèxic. L'arquitectura de Barroso parteix del lloc: matèria local, llum natural, integració amb el bosc de pins. Però el conjunt, pensat com a col·lecció de refugis privats, no genera comunitat. Cada casa és completa per ella mateixa, i entre elles no hi ha res.\n\nEl projecte identifica aquest buit com una oportunitat. La proposta és una espina pública que recorre el terreny en descens, cosint les cinc cases per un lateral i generant tot el que el conjunt no tenia. El camí asfaltat baixa acompanyant les persones fins a la porta de cada casa, però en el seu recorregut passa per jardins, zones de treball, una barbacoa exterior, una casa per a convidats, gimnàs i sauna, piscines i sistemes de recollida d'aigua pluvial que alimenten les piscines naturals de la cota inferior.\n\nLa proposta no substitueix l'arquitectura de Barroso: la complementa. La maqueta, a escala 1:200, construeix el terreny amb guix i representa les cases com a volums blancs; la intervenció s'insinua en blau. L'escala permet entendre el conjunt i la relació entre el privat i el comú.",
      en: "The starting point is Entrepinos, a cluster of five weekend houses built by Héctor Barroso at Valle de Bravo, Mexico. Barroso's architecture departs from the place: local material, natural light, integration with the pine forest. But the complex, conceived as a collection of private retreats, does not generate community. Each house is self-sufficient, and between them there is nothing.\n\nThe project identifies this gap as an opportunity. The proposal is a public spine descending through the terrain, stitching the five houses along one side and generating everything the complex lacked. The asphalt path leads people down to each front door, but along the way it passes through gardens, work areas, an outdoor barbecue, a guest house, gym and sauna, pools, and rainwater collection systems that feed the natural pools at the lower level.\n\nThe proposal does not replace Barroso's architecture: it complements it. The model, at 1:200 scale, builds the terrain in plaster and represents the houses as white volumes; the intervention is suggested in blue. The scale allows the overall complex and the relationship between private and communal to be understood."
    },
    images: [
      { src: "assets/projects/entre-pinos-planta.jpg", layout: "plan", caption: { ca: "Planta intervenció, 1:200", en: "Intervention plan, 1:200" } },
      { src: "assets/projects/entre-pinos-03.jpg", layout: "full", caption: { ca: "Maqueta: espina pública, zona de piscines i sauna", en: "Model: public spine, pool and sauna zone" } },
      { src: "assets/projects/entre-pinos-01.jpg", layout: "half-l", caption: { ca: "Maqueta: vista aèria, les cinc cases i la intervenció", en: "Model: aerial view, five houses and the intervention" } },
      { src: "assets/projects/entre-pinos-02.jpg", layout: "half-r", caption: { ca: "Maqueta: articulació del terreny", en: "Model: terrain articulation" } },
      { src: "assets/projects/entre-pinos-04.jpg", layout: "full", caption: { ca: "Maqueta general: conjunt de les cinc cases", en: "Full model: the five-house complex" } },
      { src: "assets/projects/entre-pinos-detalls.jpg", layout: "plan", caption: { ca: "Axonometria i seccions: entrada, barbacoa i piscines, 1:50", en: "Axonometric and sections: entrance, barbecue and pools, 1:50" } }
    ],
    cover: "assets/projects/entre-pinos-planta.jpg",
    tile: "t-medium"
  },
  {
    id: "casa-keremma",
    num: "09",
    title: "Casa R en Keremma",
    category: { ca: "Anàlisi i representació", en: "Analysis and representation" },
    location: { ca: "Keremma, França", en: "Keremma, France" },
    institution: { ca: "BAU, Centre Universitari d'Arts i Disseny", en: "BAU, University of Design and Fine Arts" },
    date: "2025",
    role: { ca: "Anàlisi, plànols i maqueta", en: "Analysis, plans and model-making" },
    materials: { ca: "Cartró, fusta, paper", en: "Cardboard, wood, paper" },
    filter: "instalacio",
    blurb: {
      ca: "Estudi de la Casa R en Keremma de Lacaton & Vassal a través de la representació: plànols, anàlisi estructural i maquetes. Entendre una obra d'arquitectura dibuixant-la.",
      en: "A study of Lacaton & Vassal's Casa R en Keremma through representation: plans, structural analysis, and model-making. Understanding architecture by drawing it."
    },
    body: {
      ca: "La Casa R en Keremma (1990) de Lacaton & Vassal és una casa unifamiliar a la costa bretona construïda amb recursos mínims i màxima intel·ligència material. Una estructura lleugera de policarbonat i fusta que deixa entrar la llum i redefineix la noció d'acabat en l'arquitectura domèstica.\n\nEl projecte proposa una metodologia senzilla: entendre la casa dibuixant-la. El procés comença amb els plànols, la mesura i la projecció, i continua amb l'estudi de l'estructura portant. Com es sostenen els forjats? Com es resolen els encontres? Què es veu i què queda amagat?\n\nLa maqueta es construeix com un exercici de comprensió, no de representació: cada peça posa a prova una hipòtesi sobre com funciona l'original. L'animació d'il·luminació estudia com varia la llum natural al llarg del dia, un eix central en l'obra de Lacaton & Vassal.",
      en: "Casa R en Keremma (1990) by Lacaton & Vassal is a single-family house on the Breton coast built with minimal resources and maximum material intelligence. A lightweight polycarbonate and timber structure that lets light in and redefines the notion of finish in domestic architecture.\n\nThe project proposes a simple methodology: understand the house by drawing it. The process begins with plans, measurement and projection, and continues with the study of the load-bearing structure. How are the slabs supported? How are the junctions resolved? What is visible and what remains hidden?\n\nThe model is built as an exercise in understanding, not representation: each element tests a hypothesis about how the original works. The illumination animation studies how natural light varies throughout the day — a central axis in the work of Lacaton & Vassal."
    },
    images: [
      { src: "assets/projects/casa-keremma-01.jpg", layout: "half-l", caption: { ca: "Maqueta: vista general", en: "Model: general view" } },
      { src: "assets/projects/casa-keremma-02.jpg", layout: "half-r", caption: { ca: "Maqueta: detall interior", en: "Model: interior detail" } },
      { src: "assets/projects/casa-keremma-03.jpg", layout: "half-l", caption: { ca: "Maqueta: estructura portant", en: "Model: load-bearing structure" } },
      { src: "assets/projects/casa-keremma-04.jpg", layout: "half-r", caption: { ca: "Maqueta: coberta i translucidesa", en: "Model: roof and translucency" } },
      { src: "assets/projects/casa-keremma.gif", layout: "full", caption: { ca: "Estudi d'il·luminació: variació de la llum al llarg del dia", en: "Illumination study: light variation throughout the day" } }
    ],
    cover: "assets/projects/casa-keremma-01.jpg",
    tile: "t-medium"
  },
  {
    id: "edificis-poble9",
    num: "10",
    title: "Edificis Poble9",
    category: { ca: "Fotografia d'arquitectura", en: "Architectural photography" },
    location: { ca: "Poblenou, Barcelona", en: "Poblenou, Barcelona" },
    institution: { ca: "Projecte personal", en: "Personal project" },
    date: "2025",
    role: { ca: "Fotografia", en: "Photography" },
    collaborators: { ca: "—", en: "—" },
    materials: { ca: "Fotografia digital", en: "Digital photography" },
    filter: "recerca",
    blurb: {
      ca: "Una sèrie fotogràfica pels carrers de Poblenou. Edificis moderns fotografiats per trobar artificialitat i duresa: contrastos alts, geometries que es deformen, formes extretes de context per forçar la reflexió.",
      en: "A photographic series through the streets of Poblenou. Modern buildings shot to find artificiality and hardness: high contrasts, distorted geometries, forms stripped of context to provoke reflection."
    },
    body: {
      ca: "El projecte parteix d'una deambulació per Poblenou amb l'objectiu de mirar els edificis d'una altra manera. No documentar-los, sinó deformar-los. La càmera s'usa com a eina per extreure fragments d'arquitectura del seu context: angles que no existeixen des del nivell del carrer, reflexos que dobleguen les façanes, contrastos portats al límit fins a reduir l'estructura a geometria pura.\n\nL'ordre de la sèrie segueix una lògica cromàtica, de les gammes taronges i ambre dels edificis de terracota fins al blanc dur i el blau fred del vidre i el cel. El color actua com a guia emocional: la calor de l'oxidació contra la fredor de la modernitat.",
      en: "The project begins with a drift through Poblenou with the aim of looking at buildings differently. Not documenting them, but distorting them. The camera is used as a tool to extract fragments of architecture from their context: angles that do not exist at street level, reflections that bend facades, contrasts pushed to the limit until the structure is reduced to pure geometry.\n\nThe series follows a chromatic logic, from the orange and amber tones of the terracotta buildings to the hard white and cold blue of glass and sky. Color acts as an emotional guide: the warmth of oxidation against the coldness of modernity."
    },
    images: [
      { src: "assets/projects/poble9-01.jpg", layout: "third-l", caption: { ca: "Façana ambre, modulació de panells", en: "Amber facade, panel modulation" } },
      { src: "assets/projects/poble9-02.jpg", layout: "third-c", caption: { ca: "Cantonada taronja, vista zenital", en: "Orange corner, upward view" } },
      { src: "assets/projects/poble9-03.jpg", layout: "third-r", caption: { ca: "Torre daurada, angle baix", en: "Golden tower, low angle" } },
      { src: "assets/projects/poble9-04.jpg", layout: "half-l", caption: { ca: "Trama de finestres, detall", en: "Window grid, detail" } },
      { src: "assets/projects/poble9-05.jpg", layout: "half-r", caption: { ca: "Façana groc alt contrast, cel blanc", en: "High-contrast yellow facade, white sky" } },
      { src: "assets/projects/poble9-06.jpg", layout: "third-l", caption: { ca: "Diagonal groc negre", en: "Yellow-black diagonal" } },
      { src: "assets/projects/poble9-07.jpg", layout: "third-c", caption: { ca: "Volum marró, buit lateral", en: "Brown volume, lateral void" } },
      { src: "assets/projects/poble9-08.jpg", layout: "third-r", caption: { ca: "Reflexe en vidre, cel blau", en: "Glass reflection, blue sky" } },
      { src: "assets/projects/poble9-09.jpg", layout: "half-l", caption: { ca: "Coberta de vidre, ocell en vol", en: "Glass roof, bird in flight" } },
      { src: "assets/projects/poble9-10.jpg", layout: "half-r", caption: { ca: "Façana verda, vista des de baix", en: "Green facade, upward view" } }
    ],
    cover: "assets/projects/poble9-04.jpg",
    tile: "t-medium"
  }
];

window.MENU_TILES = [
  { id: "cafe-vellut",     title: "Cafè Vellut",       date: "17-03-2025", category: "Maqueta / Espai",              img: "assets/projects/cafe-vellut-01.jpg",    size: "t-thumb", filter: "instalacio" },
  { id: "alter-bn",        title: "Alter BN",           date: "11-03-2025", category: "Espais / Retail",              img: "assets/projects/alter-bn-model.jpg",    size: "t-thumb", filter: "espais" },
  { id: "cine-infantil",   title: "CineClub Infantil",  date: "30-01-2025", category: "Disseny d'edificis",           img: "assets/projects/cine-infantil-01.jpg",  size: "t-thumb", filter: "espais" },
  { id: "i-am",            title: "I AM",               date: "2025",       category: "Disseny d'espais / exposició", img: "assets/projects/i-am-03.jpg",           size: "t-thumb", filter: "instalacio" },
  { id: "can-mor",         title: "Can Mor CASA",       date: "27-01-2025", category: "Documentació / Habitatge",     img: "assets/projects/can-mor-8.jpg",         size: "t-thumb", filter: "espais" },
  { id: "molta-fusta",     title: "Molta Fusta",        date: "2025",       category: "Fabricació digital",           img: "assets/projects/molta-fusta-04.jpg",    size: "t-thumb", filter: "instalacio" },
  { id: "rrr",             title: "RRR",                date: "2025",       category: "Recerca de materials",         img: "assets/projects/rrr-01.jpg",            size: "t-thumb", filter: "recerca" },
  { id: "entre-pinos",     title: "Entre Pinos",        date: "2025",       category: "Anàlisi / Paisatgisme",        img: "assets/projects/entre-pinos-03.jpg",    size: "t-thumb", filter: "espais" },
  { id: "casa-keremma",    title: "Casa R en Keremma",  date: "2025",       category: "Anàlisi / Representació",      img: "assets/projects/casa-keremma-01.jpg",   size: "t-thumb", filter: "instalacio" },
  { id: "edificis-poble9", title: "Edificis Poble9",    date: "2025",       category: "Fotografia",                   img: "assets/projects/poble9-04.jpg",         size: "t-thumb", filter: "recerca" }
];

window.FILTER_KEYS = ["all", "instalacio", "espais", "recerca"];

window.STRINGS = {
  ca: {
    nav: { home: "Inici", projects: "Projectes", about: "Sobre mi" },
    menu_eyebrow: "Tots els projectes",
    menu_filters: ["Tots", "Instal·lació", "Espais", "Recerca"],
    home_subtitle: "Disseny espacial, interiorisme i direcció artística. Basat a Barcelona.",
    home_about_label: "Sobre",
    home_about_text: "Pràctica entre arquitectura, interiorisme i instal·lació. La feina busca tensió entre material industrial i gest editorial: anelles, cadenes, vidre, llum natural, paper.",
    home_index_label: "Índex",
    home_press_enter: "Prem ENTER per veure",
    next: "Següent",
    prev: "Anterior",
    back: "Tornar",
    view: "Veure projecte",
    selected_works: "Obra seleccionada",
    contact: "Contacte",
    elsewhere: "També",
    info: "Informació",
    about_text_1: "Sóc en Josep Rodon, estudiant de disseny a BAU — Centre Universitari d'Arts i Disseny, Barcelona. La meva pràctica es mou entre el disseny d'espais, l'arquitectura i la direcció artística, amb un interès particular per la materialitat industrial i el disseny sostenible.",
    about_text_2: "AYMA Studio és el meu espai de recerca i projectes: un reflex del camí que estic construint com a dissenyador. Disponible per col·laboracions i encàrrecs."
  },
  en: {
    nav: { home: "Home", projects: "Projects", about: "About" },
    menu_eyebrow: "Selected works",
    menu_filters: ["All", "Installation", "Spaces", "Research"],
    home_subtitle: "Spatial design, interiors and art direction. Based in Barcelona.",
    home_about_label: "About",
    home_about_text: "A practice between architecture, interior design and installation. The work looks for tension between industrial material and editorial gesture: rings, chains, glass, natural light, paper.",
    home_index_label: "Index",
    home_press_enter: "Press ENTER to view",
    next: "Next",
    prev: "Previous",
    back: "Back",
    view: "View project",
    selected_works: "Selected works",
    contact: "Contact",
    elsewhere: "Elsewhere",
    info: "Information",
    about_text_1: "I am Josep Rodon, a design student at BAU — Centre Universitari d'Arts i Disseny, Barcelona. My practice moves between spatial design, architecture and art direction, with a particular interest in industrial materiality and sustainable design.",
    about_text_2: "AYMA Studio is my space for research and projects: a reflection of the path I am building as a designer. Available for collaborations and commissions."
  }
};
