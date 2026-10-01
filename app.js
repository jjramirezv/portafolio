// Datos del portafolio. Cada texto va como [español, inglés].
const GH = 'https://github.com/jjramirezv/';

const CONTACT = {
  email: 'jimenaramirezvilchez@gmail.com',
  phone: '+51983580700',
  phoneLabel: '+51 983 580 700',
  whatsapp: 'https://wa.me/51983580700',
  linkedin: 'https://www.linkedin.com/in/jelibethramirezvilchez/',
  github: 'https://github.com/jjramirezv',
  instagram: 'https://www.instagram.com/jelibeth356/'
};

const projects = [
  {name:'InfoMorph',category:'education',cover:'#c3adee',label:['HACKATÓN UNESCO 2026','UNESCO HACKATHON 2026'],sub:['Investiga. Comprende. Verifica.','Explore. Understand. Verify.'],url:'https://info-morph.vercel.app/',repo:'InfoMorph',stack:['React','TypeScript','Vite','IA'],
    description:['Plataforma de alfabetización mediática: información adaptada a distintas edades, fuentes visibles y herramientas para pensar de forma crítica.','A media literacy platform: age-adapted information, visible sources, and tools to encourage critical thinking.'],
    detail:['Desarrollado para el UNESCO Youth Hackathon 2026. La propuesta utiliza IA para adaptar explicaciones a distintos grupos de edad y ofrece consejos para verificar la información. La IA adapta el contenido; no decide qué es verdad.','Developed for the UNESCO Youth Hackathon 2026. The project uses AI to adapt explanations to different age groups and offers information verification tips. AI adapts the content; it does not decide what is true.']},
  {name:'Damian Company',category:'business',cover:'#d8e0c9',label:['CATÁLOGO Y SERVICIOS','CATALOG & SERVICES'],sub:['Equipamiento para proyectos reales.','Equipment for real projects.'],url:'https://damiancompany.com.pe/',repo:'DamianCompany',stack:['Laravel','PHP','Tailwind','MySQL'],
    description:['Catálogo de maquinaria, servicios y proyectos tecnológicos con cotizaciones por WhatsApp. En producción.','Machinery catalog, services, and technology projects with WhatsApp quotes. In production.'],
    detail:['Sitio empresarial que reúne equipamiento agrícola, forestal y de construcción, presentación de servicios y proyectos, y acceso a la academia de Damian Company.','A business website bringing together agricultural, forestry, and construction equipment, services, technology projects, and access to the Damian Company academy.']},
  {name:'Academia Damian',category:'education',cover:'#d7cbb9',label:['PLATAFORMA EDUCATIVA','LEARNING PLATFORM'],sub:['Aprender tecnología haciendo.','Learning technology by doing.'],url:'https://academia.damiancompany.com.pe/',repo:'Academia-Damian-Company',shot:'assets/academia.jpg',stack:['React','Node · Express','MySQL','OAuth'],
    description:['Portal educativo de robótica, IoT, diseño 3D y visión artificial, con registro e inicio de sesión con Google.','An educational portal for robotics, IoT, 3D design, and computer vision, with Google sign-in.'],
    detail:['Formación práctica mediante proyectos. Frontend en React y API propia en Express con MySQL, JWT y subida de archivos a Cloudinary. El catálogo completo requiere iniciar sesión.','Project-based learning. React frontend and a custom Express API with MySQL, JWT, and Cloudinary uploads. The full catalog requires authentication.']},
  {name:'AgroTrace',category:'management',cover:'#bed1d1',label:['DEMO DE TRAZABILIDAD','TRACEABILITY DEMO'],sub:['Del origen al producto terminado.','From source to finished product.'],url:'https://demo-trazabilidad.vercel.app/',repo:'demo-trazabilidad',stack:['React','Tailwind','Vite'],
    description:['Seguimiento de lotes que conecta compras, producción, inventario y despacho en una demo agroindustrial.','Batch tracking connecting purchasing, production, inventory, and dispatch in an agroindustrial demo.'],
    detail:['La demo incluye recepción, control de calidad, recetas de producción, envasado, ventas, incidentes y retiro de productos para explorar el recorrido de un lote.','The demo includes receiving, quality control, production recipes, packaging, sales, incidents, and product recalls to explore the journey of a batch.']},
  {name:'Max Planck · ERP',category:'management',cover:'#bbc5e4',label:['GESTIÓN EDUCATIVA','SCHOOL MANAGEMENT'],sub:['Una comunidad, un solo portal.','One community, one portal.'],url:'https://erp-colegio-max-planck.vercel.app/',repo:'erp-colegio-max-planck',stack:['React','Supabase','Electron','Playwright'],
    description:['ERP escolar que centraliza la gestión académica y administrativa del Colegio Max Planck, en web y escritorio.','A school ERP centralizing academic and administrative management for Colegio Max Planck, on web and desktop.'],
    detail:['Acceso mediante credenciales institucionales y recuperación de contraseña, base de datos en Supabase, versión de escritorio con Electron y pruebas end-to-end con Playwright. Las áreas internas requieren autorización.','Institutional sign-in and password recovery, a Supabase database, an Electron desktop build, and Playwright end-to-end tests. Internal areas require authorization.']},
  {name:'Colegio Max Planck',category:'education',cover:'#c9d6bb',label:['SITIO INSTITUCIONAL','SCHOOL WEBSITE'],sub:['Educación que deja huella.','Education that makes a difference.'],url:'https://colegio-tawny-sigma.vercel.app/',repo:'landing-page_colegio',stack:['React','Tailwind','Supabase'],
    description:['Niveles educativos, propuesta pedagógica, admisiones y comunidad escolar en un sitio interactivo.','Educational levels, teaching approach, admissions, and school community in an interactive site.'],
    detail:['Secciones interactivas para explorar inicial, primaria y secundaria, junto con información del campus virtual, noticias y proceso de admisión.','Interactive sections for preschool, primary, and secondary education, alongside virtual campus information, news, and admissions.']},
  {name:'El Fogón Peruano',category:'business',cover:'#e0b698',label:['RESTAURANTE','RESTAURANT'],sub:['Cocina criolla en la web.','Peruvian cuisine on the web.'],url:'https://landing-pagerestaurante.vercel.app/',repo:'landing-page_restaurante',stack:['Next.js','TypeScript','Drizzle','Three.js'],
    description:['Restaurante huancaíno con menú, galería, reservas de mesa, delivery y contacto por WhatsApp.','A Huancayo restaurant with menu, gallery, table reservations, delivery, and WhatsApp contact.'],
    detail:['Next.js con base de datos Postgres (Neon + Drizzle), detalles 3D con Three.js, generación de PDF y correos transaccionales.','Next.js with a Postgres database (Neon + Drizzle), 3D touches with Three.js, PDF generation, and transactional emails.']},
  {name:'Power Fitness Gym',category:'business',cover:'#d0d88e',label:['FITNESS','FITNESS'],sub:['Un plan para cada objetivo.','A plan for every goal.'],url:'https://gimnasio-three-swart.vercel.app/',repo:'landing-page_gimnasio',stack:['Next.js','Prisma','NextAuth','TypeScript'],
    description:['Servicios, planes de membresía, entrenadores, reseñas y galería, con registro e inicio de sesión.','Services, membership plans, trainers, reviews, and gallery, with registration and sign-in.'],
    detail:['Autenticación con NextAuth, base de datos con Prisma, envío de correos con Nodemailer y consultas por WhatsApp.','Authentication with NextAuth, a Prisma database, Nodemailer emails, and WhatsApp inquiries.']},
  {name:'VitalisSalud',category:'business',cover:'#bfd8df',label:['CLÍNICA','CLINIC'],sub:['Servicios de salud, bien presentados.','Healthcare services, clearly presented.'],url:'https://clinica-roan-eight.vercel.app/',repo:'landing-page_Clinica',stack:['Next.js','shadcn/ui','Framer Motion','Neon'],
    description:['Clínica con servicios, especialidades, staff médico, seguros y solicitud de citas.','A clinic site with services, specialties, medical staff, insurance, and appointment requests.'],
    detail:['Unidades especializadas, información de cobertura de seguros y contacto. Incluye una página de acceso para administradores con contraseñas cifradas.','Specialized units, insurance coverage information, and contact details. Includes an administrator sign-in page with hashed passwords.']}
];

// result: escribe aquí el logro cuando lo tengas, p. ej. ['Finalista','Finalist'] o ['3.er puesto','3rd place'].
const hackathons = [
  {event:'UNESCO Youth Hackathon 2026',date:['Jul – Ago 2026','Jul – Aug 2026'],place:['Internacional · virtual','International · online'],project:'InfoMorph',
    theme:['“Play Your Part”: el futuro de la alfabetización mediática e informacional','“Play Your Part”: the future of media and information literacy'],
    pitch:['Plataforma con IA que adapta explicaciones según la edad, muestra fuentes organizadas y enseña a verificar información antes de compartirla.','An AI platform that adapts explanations by age, shows organized sources, and teaches how to verify information before sharing it.'],
    stack:['React','TypeScript','IA generativa'],links:[['demo','https://info-morph.vercel.app/'],['repo',GH+'InfoMorph']],result:null,color:'#b69aff'},
  {event:'Hackatón PERUMEC 2026',date:['Ago 2026','Aug 2026'],place:['Cusco · UNSAAC','Cusco · UNSAAC'],project:'Qhawaq',
    theme:['Congreso Nacional de Ingeniería Mecánica, Eléctrica y ramas afines','National Congress of Mechanical, Electrical and related Engineering'],
    pitch:['Mantenimiento predictivo para bombas eléctricas: nodos ESP32 con acelerómetro de 3 ejes y temperatura, y un modelo Random Forest que detecta desbalance, fallas eléctricas o ambas en un dashboard claro. “Qhawaq” significa “el que observa” en quechua.','Predictive maintenance for electric pumps: ESP32 nodes with a 3-axis accelerometer and temperature sensor, and a Random Forest model that detects imbalance, electrical faults, or both on a clear dashboard. “Qhawaq” means “the observer” in Quechua.'],
    stack:['Next.js','ESP32','Random Forest','Recharts'],links:[['demo','https://qhawaq.vercel.app/'],['repo',GH+'Mec-hackaton-PERUMEC']],result:null,color:'#f0b77a'},
  {event:'Desafío 6 · OSINFOR',date:['Jun 2026','Jun 2026'],place:['Perú','Peru'],project:'EcoGuardian · Huella Legal Forestal',
    theme:['Trazabilidad de la madera y supervisión forestal','Timber traceability and forest oversight'],
    pitch:['Convierte documentos oficiales (censo, libro de operaciones, guías de transporte) en un grafo de evidencia árbol → troza → despacho. Un motor de consistencia marca dónde la cadena se rompe y genera una verificación pública. No certifica legalidad: hace visible la evidencia.','Turns official documents (census, operations log, transport permits) into an evidence graph tree → log → dispatch. A consistency engine flags where the chain breaks and produces a public verification. It does not certify legality: it makes the evidence visible.'],
    stack:['Laravel','PHP','React','Grafos'],links:[['repo',GH+'Desafio6_OSINFOR-Ecoguardian']],result:null,color:'#b9f972'}
];

// Primeros puestos (fuente: certificados de LinkedIn)
const awards = [
  {event:'Impact Startup Competition®',stage:['Final local · Emprendimiento social','Local final · Social entrepreneurship'],date:['Ene 2026','Jan 2026'],id:'ISC2026-CE-004-2026-110',
    text:['Primer lugar en la final local de la Impact Startup Competition, con una propuesta de emprendimiento social.','First place in the Impact Startup Competition local final, with a social entrepreneurship proposal.']},
  {event:'CONCEPMI',stage:['Concurso de Proyectos · Project Management Institute','Project Competition · Project Management Institute'],date:['Nov 2025','Nov 2025'],
    text:['Primer lugar en el Concurso de Proyectos del Project Management Institute (PMI).','First place in the Project Management Institute (PMI) Project Competition.']}
];

// Otras participaciones: hackatones y congresos
const contests = [
  {kind:['HACKATÓN','HACKATHON'],name:'Hackatón Nacional TransformaGob 2026',org:['Presidencia del Consejo de Ministros','Presidency of the Council of Ministers'],date:['Jun 2026','Jun 2026'],topic:['Gobierno digital','Digital government']},
  {kind:['HACKATÓN','HACKATHON'],name:['Hackatón de Innovación en Movilidad Sostenible','Sustainable Mobility Innovation Hackathon'],org:['Project Management Institute','Project Management Institute'],date:['Ago 2026','Aug 2026'],topic:['Movilidad sostenible','Sustainable mobility']},
  {kind:['HACKATÓN','HACKATHON'],name:'NASA International Space Apps Challenge',org:['NASA','NASA'],topic:['Ciencia y datos espaciales','Space science & data']},
  {kind:['CONGRESO','CONGRESS'],name:'PERUMEC',org:['ASME · Sociedad Americana de Ingenieros Mecánicos','ASME · American Society of Mechanical Engineers'],date:['Ago 2025','Aug 2025'],topic:['Ingeniería mecánica y eléctrica','Mechanical & electrical engineering']},
  {kind:['CONGRESO','CONGRESS'],name:'XXXI CONEIMERA 2025',org:['ANEIMERA Perú','ANEIMERA Peru'],date:['Sep 2025','Sep 2025'],topic:['Congreso nacional de estudiantes de ingeniería','National engineering students congress']}
];

const certs = [
  {name:['Data Science desde cero con Python','Data Science from scratch with Python'],org:'Women in DataLab',date:['Ago 2026','Aug 2026'],id:'WDL-20260821-21E078FE64D5',area:'data'},
  {name:'CAPM Power 2026',org:'Project Management Institute',date:['May 2026','May 2026'],area:'pm'},
  {name:'Python Essentials 2',org:'Cisco',date:['Dic 2025','Dec 2025'],area:'python'},
  {name:'Python Essentials 1',org:'Cisco',date:['Dic 2025','Dec 2025'],area:'python'},
  {name:'Google AI Summit for Education',org:'Google',date:['Jun 2025','Jun 2025'],area:'ai'},
  {name:['Python nivel avanzado','Python — advanced level'],org:['Centro de Formación y Capacitación NTS','NTS Training Center'],date:['Abr 2025','Apr 2025'],area:'python'},
  {name:['Python nivel intermedio','Python — intermediate level'],org:['Centro de Formación y Capacitación NTS','NTS Training Center'],date:['Abr 2025','Apr 2025'],area:'python'},
  {name:['Microsoft Excel básico, intermedio y avanzado','Microsoft Excel — basic to advanced'],org:['Cámara de Comercio Exterior','Chamber of Foreign Trade'],date:['Ene 2025','Jan 2025'],id:'25427',area:'data'},
  {name:['Análisis de datos con R: descriptivo y exploratorio','Data analysis with R: descriptive & exploratory'],org:['Centro de Formación y Capacitación NTS','NTS Training Center'],date:['Oct 2024','Oct 2024'],area:'data'}
];
const certAreas = {data:['DATOS','DATA'],python:['PYTHON','PYTHON'],pm:['GESTIÓN DE PROYECTOS','PROJECT MANAGEMENT'],ai:['IA','AI']};

const lab = [
  {kind:['INVESTIGACIÓN · UNCP','RESEARCH · UNCP'],title:['Microclimas contra plagas poscosecha','Microclimates against post-harvest pests'],
    text:['App móvil en C++ para gestionar microclimas y detectar a tiempo plagas en almacenes de Huancayo. Presentado en la XXV Jornada de Investigación Formativa y Tecnológica (2026-I), línea Ingeniería de Software, con asesoría del Mg. Arturo Solís Flores.','A C++ mobile app to manage microclimates and detect pests early in Huancayo warehouses. Presented at the 25th Formative and Technological Research Conference (2026-I), Software Engineering track, advised by Arturo Solís Flores, MSc.'],
    stack:['C++','Móvil','Sensores'],year:'2026'},
  {kind:['VISIÓN ARTIFICIAL','COMPUTER VISION'],title:['Comedor Inteligente UNCP','Smart Dining Hall UNCP'],
    text:['Estima cuántos gramos de cada alimento se desperdician en las bandejas del comedor universitario: segmentación con YOLO11, cálculo ponderado por densidad y balanza serial, todo en una Raspberry Pi 5.','Estimates how many grams of each food are wasted on university dining trays: YOLO11 segmentation, density-weighted estimation, and a serial scale, all running on a Raspberry Pi 5.'],
    stack:['Python','YOLO11','OpenCV','Raspberry Pi'],year:'2026',repo:'ComedorInteligente'},
  {kind:['IA · DEEP LEARNING','AI · DEEP LEARNING'],title:['NubeAI','NubeAI'],
    text:['Clasifica fotos del cielo en 7 tipos de nubes con una red ResNet50 (transfer learning) e incluye un asistente educativo con Gemini que explica cada resultado.','Classifies sky photos into 7 cloud types with a ResNet50 network (transfer learning) and includes a Gemini-powered educational assistant that explains each result.'],
    stack:['TensorFlow','FastAPI','Next.js','Gemini'],year:'2025',repo:'NubeAI-backend'},
  {kind:['IoT · TIEMPO REAL','IoT · REAL TIME'],title:['Dashboard IoT ambiental','Environmental IoT dashboard'],
    text:['App móvil que muestra en vivo temperatura, humedad, ruido, gas, luz y aforo de un ambiente, con alertas por color según la ocupación.','A mobile app showing live temperature, humidity, noise, gas, light, and occupancy of a space, with color alerts based on capacity.'],
    stack:['React Native','Expo','Supabase','Odroid'],year:'2026',repo:'DashboardIoT-Odroid'},
  {kind:['INVESTIGACIÓN · UNCP','RESEARCH · UNCP'],title:['Monitoreo de una piscigranja','Fish farm monitoring'],
    text:['Investigación formativa de la Facultad de Ingeniería de Sistemas sobre el monitoreo de la temperatura del agua en la piscigranja del Centro de Ingenio, Junín.','Formative research at the School of Systems Engineering on monitoring water temperature at the Ingenio fish farm in Junín.'],
    stack:['Sensores','Datos'],year:'2024'},
  {kind:['EXPERIENCIA WEB','WEB EXPERIENCE'],title:['Visor 360°','360° Viewer'],
    text:['Recorridos panorámicos de inmuebles en el navegador: arrastra para mirar alrededor de cada ambiente.','Panoramic property tours in the browser: drag to look around each room.'],
    stack:['JavaScript','WebGL'],year:'2026',url:'https://visor-360-html.vercel.app/',repo:'visor-360-html'}
];

const timeline = [
  {year:'2024',text:['Análisis de datos con R y primera investigación formativa en la Facultad de Ingeniería de Sistemas (UNCP).','Data analysis with R and first formative research project at the UNCP School of Systems Engineering.']},
  {year:'2025',text:['Certificaciones en Python (NTS y Cisco), Google AI Summit for Education, congresos PERUMEC y CONEIMERA, y primeros proyectos con IA como NubeAI.','Python certifications (NTS and Cisco), Google AI Summit for Education, PERUMEC and CONEIMERA congresses, and first AI projects such as NubeAI.']},
  {year:'2025',award:true,text:['1.er puesto en el Concurso de Proyectos del PMI (CONCEPMI).','1st place in the PMI Project Competition (CONCEPMI).']},
  {year:'2026',award:true,text:['1.er puesto en la final local de la Impact Startup Competition.','1st place in the Impact Startup Competition local final.']},
  {year:'2026',text:['Desarrolladora web en Damian Company: sitio, academia y demo de trazabilidad. Sitios para colegio, clínica, gimnasio y restaurante.','Web developer at Damian Company: website, academy, and traceability demo. Sites for a school, clinic, gym, and restaurant.']},
  {year:'2026',text:['Hackatones TransformaGob, OSINFOR, PERUMEC, PMI y UNESCO; CAPM Power, Data Science con Python y ponencia en la XXV Jornada de Investigación de la UNCP.','TransformaGob, OSINFOR, PERUMEC, PMI, and UNESCO hackathons; CAPM Power, Data Science with Python, and a talk at the 25th UNCP Research Conference.']}
];

const stack = ['JavaScript','TypeScript','React','Next.js','Node.js','PHP','Laravel','Python','R','FastAPI','TensorFlow','YOLO · OpenCV','Tailwind CSS','MySQL','Supabase','Prisma','React Native','ESP32','Raspberry Pi','Git','Vercel'];

const dictionary = {
  skip:['Ir al contenido','Skip to content'],
  navProjects:['proyectos','projects'],navHack:['concursos','hackathons'],navLab:['lab','lab'],navCerts:['certificados','certificates'],navAbout:['sobre-mí','about'],navContact:['contacto','contact'],
  hero:['Escribo código.<br>Construyo <em>ideas.</em>','I write code.<br>I build <em>ideas.</em>'],
  intro:['Desarrollo plataformas educativas, herramientas de gestión y experiencias web; compito en hackatones y exploro la IA y el IoT para resolver problemas reales.','I build learning platforms, management tools, and web experiences; I compete in hackathons and explore AI and IoT to solve real problems.'],
  factPlace:['Huancayo, Perú','Huancayo, Peru'],factUni:['Ing. de Sistemas · UNCP','Systems Engineering · UNCP'],factWork:['Dev web en Damian Company','Web dev at Damian Company'],
  explore:['explorar_proyectos()','explore_projects()'],talk:['Hablemos','Let’s talk'],
  statAwards:['primeros puestos','first places'],statHack:['concursos y hackatones','competitions & hackathons'],statProjects:['proyectos desplegados','shipped projects'],statCerts:['certificaciones','certifications'],factAwards:['2× primer puesto','2× first place'],
  toolbox:['MI CAJA DE HERRAMIENTAS','MY TOOLBOX'],
  selected:['01 / PROJECT EXPLORER','01 / PROJECT EXPLORER'],projectsTitle:['Mi código.<br>En el mundo real.','My code.<br>In the real world.'],
  projectsIntro:['Plataformas educativas, herramientas de gestión y sitios para negocios, todos desplegados y funcionando. Explóralos uno por uno y míralos en vivo.','Learning platforms, management tools, and business websites, all deployed and live. Explore each one and see it live.'],
  all:['Todos','All'],education:['Educación','Education'],business:['Negocios','Business'],management:['Gestión','Management'],
  hackLabel:['02 / HACKATHONS.LOG','02 / HACKATHONS.LOG'],hackTitle:['Compito.<br>Y a veces <em>gano.</em>','I compete.<br>Sometimes I <em>win.</em>'],
  hackIntro:['Dos primeros puestos y ocho concursos: emprendimiento social, gestión de proyectos, alfabetización mediática, industria, gobierno digital y protección de los bosques.','Two first places and eight competitions: social entrepreneurship, project management, media literacy, industry, digital government, and forest protection.'],podiumLabel:['🏆 PODIO','🏆 PODIUM'],buildsLabel:['PROTOTIPOS CONSTRUIDOS EN HACKATONES','PROTOTYPES BUILT AT HACKATHONS'],moreLabel:['MÁS PARTICIPACIONES','MORE PARTICIPATION'],
  labLabel:['03 / LAB · IA · IoT · INVESTIGACIÓN','03 / LAB · AI · IoT · RESEARCH'],labTitle:['Donde el software<br>toca el <em>mundo físico.</em>','Where software<br>meets the <em>physical world.</em>'],
  labIntro:['Visión artificial, modelos de clasificación, sensores y apps móviles. Proyectos de la universidad y experimentos propios.','Computer vision, classification models, sensors, and mobile apps. University projects and personal experiments.'],
  certsLabel:['04 / CERTIFICATIONS.JSON','04 / CERTIFICATIONS.JSON'],certsTitle:['Aprender también<br>se <em>certifica.</em>','Learning, also<br><em>certified.</em>'],certsIntro:['Python, ciencia de datos, gestión de proyectos e IA: la formación que acompaña lo que construyo.','Python, data science, project management, and AI: the training behind what I build.'],aboutLabel:['05 / README.md','05 / README.md'],aboutTitle:['La persona<br>detrás del <em>código.</em>','The person<br>behind the <em>code.</em>'],
  role:['Desarrolladora web · Estudiante de Ing. de Sistemas','Web developer · Systems Engineering student'],
  aboutText:['Me interesa convertir necesidades concretas en experiencias web claras y útiles.','I’m interested in turning real needs into clear, useful web experiences.'],
  aboutBody:['Estudio Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú y trabajo como desarrolladora web en Damian Company, donde construyo su catálogo de maquinaria, su academia de tecnología y una demo de trazabilidad agroindustrial.','I study Systems Engineering at Universidad Nacional del Centro del Perú and work as a web developer at Damian Company, where I build its machinery catalog, its technology academy, and an agroindustrial traceability demo.'],
  aboutHack:['Fuera del trabajo compito en hackatones y concursos (con dos primeros puestos), participo en investigación formativa y experimento con visión artificial, modelos de IA e IoT sobre Raspberry Pi y ESP32.','Outside work I compete in hackathons and competitions (with two first places), take part in formative research, and experiment with computer vision, AI models, and IoT on Raspberry Pi and ESP32.'],
  value1:['Aprender construyendo','Learning by building'],value2:['Diseñar con propósito','Designing with purpose'],value3:['Explorar nuevas ideas','Exploring new ideas'],
  journey:['git log --trayectoria','git log --journey'],
  contactLabel:['06 / NEXT COMMIT','06 / NEXT COMMIT'],contactTitle:['¿Tienes una idea?<br><em>Construyámosla.</em>','Got an idea?<br><em>Let’s build it.</em>'],
  contactIntro:['Proyectos web, prácticas, hackatones o una colaboración: escríbeme por el canal que prefieras.','Web projects, internships, hackathons, or a collaboration: reach out on whichever channel you prefer.'],
  vcard:['Guardar contacto (.vcf)','Save contact (.vcf)'],
  top:['Volver al inicio ↑','Back to top ↑'],
  terminalWelcome:['Prueba help, awards o contact.','Try help, awards, or contact.']
};

let lang = 0, filter = 'all', openProject = null;
const $ = s => document.querySelector(s), $$ = s => document.querySelectorAll(s);
const t = pair => pair[lang];
const tx = v => Array.isArray(v) ? v[lang] : v;
const icon = (id, cls = '') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
const external = (url, label, cls = '') => `<a class="${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
const host = url => new URL(url).hostname.replace(/^www\./, '');
// Captura del sitio: usa una imagen local si el proyecto la tiene, si no la genera thum.io
const shot = p => p.shot || `https://image.thum.io/get/wait/3/width/900/crop/800/noanimate/${p.url}`;
const waLink = () => `${CONTACT.whatsapp}?text=${encodeURIComponent(lang ? 'Hi Jelibeth, I saw your portfolio and would like to talk.' : 'Hola Jelibeth, vi tu portafolio y me gustaría conversar.')}`;
const grid = $('#project-grid'), dialog = $('#project-dialog');

function channels() {
  return [
    {id:'whatsapp',name:'WhatsApp',value:CONTACT.phoneLabel,href:waLink(),hint:['Respuesta más rápida','Fastest reply']},
    {id:'mail',name:lang?'Email':'Correo',value:CONTACT.email,href:`mailto:${CONTACT.email}`,hint:['Para propuestas y detalles','For proposals and details'],copy:CONTACT.email},
    {id:'linkedin',name:'LinkedIn',value:'in/jelibethramirezvilchez',href:CONTACT.linkedin,hint:['Trayectoria profesional','Professional background']},
    {id:'github',name:'GitHub',value:'@jjramirezv',href:CONTACT.github,hint:['Todo mi código','All my code']},
    {id:'instagram',name:'Instagram',value:'@jelibeth356',href:CONTACT.instagram,hint:['El lado personal','The personal side']}
  ];
}

function renderContact() {
  const list = channels();
  $('#contact-grid').innerHTML = list.map(c => `
    <div class="contact-card c-${c.id}">
      <a class="contact-main" href="${c.href}" ${c.href.startsWith('mailto') ? '' : 'target="_blank" rel="noopener noreferrer"'}>
        <span class="contact-icon">${icon(c.id)}</span>
        <span class="contact-text"><b>${c.name}</b><span>${c.value}</span><small>${t(c.hint)}</small></span>
        ${icon('arrow', 'contact-arrow')}
      </a>
      ${c.copy ? `<button type="button" class="copy" data-copy="${c.copy}" aria-label="${lang ? 'Copy email' : 'Copiar correo'}">${icon('copy')}</button>` : ''}
    </div>`).join('');
  $$('[data-contact-links]').forEach(box => {
    box.innerHTML = list.map(c => `<a href="${c.href}" ${c.href.startsWith('mailto') ? '' : 'target="_blank" rel="noopener noreferrer"'} aria-label="${c.name}" title="${c.name}">${icon(c.id)}</a>`).join('');
  });
  const fab = $('#wa-fab');
  fab.href = waLink();
  fab.setAttribute('aria-label', lang ? 'Message on WhatsApp' : 'Escribir por WhatsApp');
}

function renderProjects() {
  const shown = projects.filter(p => filter === 'all' || p.category === filter);
  grid.innerHTML = `<li class="row-head" aria-hidden="true"><span>#</span><span>${lang ? 'project' : 'proyecto'}</span><span>${lang ? 'type' : 'tipo'}</span><span>stack</span><span>${lang ? 'links' : 'enlaces'}</span></li>` +
  shown.map(p => {
    const index = projects.indexOf(p);
    return `<li class="row reveal" style="--cover:${p.cover}" data-row="${index}">
      <span class="row-num">${String(index + 1).padStart(2, '0')}</span>
      <button class="row-name" data-project="${index}" aria-label="${lang ? 'Details about' : 'Detalles de'} ${p.name}">
        <b data-text="${p.name}">${p.name}</b><small>${t(p.sub)}</small>
      </button>
      <span class="row-kind">${t(p.label)}</span>
      <span class="row-stack">${p.stack.join(' · ')}</span>
      <span class="row-links">
        ${external(p.url, 'demo ↗')}
        ${p.repo ? external(GH + p.repo, lang ? 'code' : 'código') : ''}
      </span>
    </li>`;
  }).join('');
  const hint = canHover
    ? (lang ? 'hover to preview, click for details' : 'pasa el cursor para ver la vista previa, haz clic para el detalle')
    : (lang ? 'tap a project to see it' : 'toca un proyecto para verlo');
  $('#result-count').textContent = `${shown.length} ${lang ? 'projects' : 'proyectos'} · ${hint}`;
  observe(grid.querySelectorAll('.reveal'));
}

// Vista previa flotante que sigue al cursor (solo con mouse)
const preview = $('#preview');
const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
const pv = {x: 0, y: 0, tx: 0, ty: 0, raf: 0, active: null};
function movePreview() {
  const dx = pv.tx - pv.x;
  pv.x += dx * 0.16; pv.y += (pv.ty - pv.y) * 0.16;
  const tilt = reduceMotion ? 0 : Math.max(-10, Math.min(10, dx * 0.08));
  preview.style.transform = `translate3d(${pv.x}px, ${pv.y}px, 0) rotate(${tilt}deg)`;
  pv.raf = Math.abs(dx) > 0.3 || Math.abs(pv.ty - pv.y) > 0.3 ? requestAnimationFrame(movePreview) : 0;
}
function showPreview(index) {
  if (pv.active === index) return;
  pv.active = index;
  const p = projects[index];
  preview.style.setProperty('--cover', p.cover);
  preview.querySelector('.browser-bar span').textContent = host(p.url);
  preview.querySelector('.preview-fallback').textContent = p.name;
  const img = preview.querySelector('img');
  img.classList.remove('ready');
  img.onload = () => img.classList.add('ready');
  img.src = shot(p);
  preview.classList.add('show');
}
function hidePreview() { pv.active = null; preview.classList.remove('show'); }
if (canHover) {
  grid.addEventListener('mousemove', e => {
    const row = e.target.closest('.row');
    if (!row) return hidePreview();
    pv.tx = e.clientX + 28; pv.ty = e.clientY - 120;
    if (pv.tx + 380 > innerWidth) pv.tx = e.clientX - 380;
    if (!preview.classList.contains('show')) { pv.x = pv.tx; pv.y = pv.ty; }
    showPreview(Number(row.dataset.row));
    if (!pv.raf) pv.raf = requestAnimationFrame(movePreview);
  });
  grid.addEventListener('mouseleave', hidePreview);
  // Precarga las capturas para que la vista previa aparezca al instante
  addEventListener('load', () => setTimeout(() => projects.forEach(p => { new Image().src = shot(p); }), 1500));
}

// Efecto de "descifrado" del nombre al pasar el cursor
const glyphs = '01<>/{}#$*_=+';
function scramble(el) {
  if (reduceMotion || el.dataset.busy) return;
  const text = el.dataset.text;
  let frame = 0;
  el.dataset.busy = '1';
  const tick = () => {
    el.textContent = [...text].map((c, i) => c === ' ' || i < frame / 2 ? c : glyphs[Math.floor(Math.random() * glyphs.length)]).join('');
    if (frame++ < text.length * 2) requestAnimationFrame(tick);
    else { el.textContent = text; delete el.dataset.busy; }
  };
  tick();
}
grid.addEventListener('mouseover', e => {
  const row = e.target.closest('.row');
  if (row && !row.contains(e.relatedTarget)) scramble(row.querySelector('b'));
});

function renderHackathons() {
  const linkLabel = {demo: lang ? 'Live demo ↗' : 'Ver demo ↗', repo: lang ? 'Code' : 'Código'};
  $('#hack-list').innerHTML = hackathons.map((h, i) => `
    <li class="hack reveal" style="--accent:${h.color}">
      <div class="hack-rail"><span class="hack-index">${String(i + 1).padStart(2, '0')}</span></div>
      <article class="hack-card">
        <header class="hack-head">
          <span class="hack-badge">${icon('trophy')} ${h.event}</span>
          <span class="hack-meta">${t(h.date)} · ${t(h.place)}</span>
        </header>
        <h3>${h.project}</h3>
        <p class="hack-theme">${t(h.theme)}</p>
        <p>${t(h.pitch)}</p>
        <ul class="tags">${h.stack.map(s => `<li>${s}</li>`).join('')}</ul>
        <div class="hack-foot">
          <span class="hack-result ${h.result ? 'won' : ''}">${h.result ? '★ ' + t(h.result) : (lang ? '✓ Prototype delivered' : '✓ Prototipo entregado')}</span>
          <div class="card-links">${h.links.map(([k, url]) => external(url, linkLabel[k])).join('')}</div>
        </div>
      </article>
    </li>`).join('');
  observe($$('#hack-list .reveal'));
}

function renderPodium() {
  $('#podium').innerHTML = awards.map(a => `
    <article class="award reveal">
      <div class="award-medal" aria-hidden="true"><span>1°</span></div>
      <div class="award-body">
        <span class="award-place">${icon('trophy')} ${lang ? '1st place' : '1.er puesto'} · ${t(a.date)}</span>
        <h3>${a.event}</h3>
        <p class="award-stage">${t(a.stage)}</p>
        <p>${t(a.text)}</p>
        ${a.id ? `<code class="cred-id">ID ${a.id}</code>` : ''}
      </div>
    </article>`).join('');
  $('#more-grid').innerHTML = contests.map(c => `
    <article class="more-card reveal">
      <div class="lab-top"><span>${t(c.kind)}</span><span>${c.date ? t(c.date) : ''}</span></div>
      <h4>${tx(c.name)}</h4>
      <p>${t(c.org)}</p>
      <span class="more-topic">${t(c.topic)}</span>
    </article>`).join('');
  observe($$('#podium .reveal, #more-grid .reveal'));
}

function renderCerts() {
  $('#cert-grid').innerHTML = certs.map(c => `
    <article class="cert reveal cert-${c.area}">
      <span class="cert-area">${t(certAreas[c.area])}</span>
      <h3>${tx(c.name)}</h3>
      <p>${tx(c.org)}</p>
      <div class="cert-foot"><span>${t(c.date)}</span>${c.id ? `<code title="${lang ? 'Credential ID' : 'ID de credencial'}">${c.id}</code>` : ''}</div>
    </article>`).join('');
  observe($$('#cert-grid .reveal'));
}

function renderLab() {
  $('#lab-grid').innerHTML = lab.map(x => `
    <article class="lab-card reveal">
      <div class="lab-top"><span>${t(x.kind)}</span><span>${x.year}</span></div>
      <h3>${t(x.title)}</h3>
      <p>${t(x.text)}</p>
      <ul class="tags">${x.stack.map(s => `<li>${s}</li>`).join('')}</ul>
      ${x.url || x.repo ? `<div class="card-links">${x.url ? external(x.url, (lang ? 'Live demo' : 'Ver demo') + ' ↗') : ''}${x.repo ? external(GH + x.repo, lang ? 'Code' : 'Código') : ''}</div>` : ''}
    </article>`).join('');
  observe($$('#lab-grid .reveal'));
}

function renderTimeline() {
  $('#timeline').innerHTML = timeline.map(x => `<li class="${x.award ? 'award-step' : ''}"><time>${x.year}</time><p>${x.award ? '🏆 ' : ''}${t(x.text)}</p></li>`).join('');
}

function renderMarquee() {
  const items = stack.map(s => `<span>${s}</span>`).join('<b>·</b>');
  $('#marquee').innerHTML = `<div>${items}<b>·</b></div><div aria-hidden="true">${items}<b>·</b></div>`;
}

function showProject(index) {
  openProject = index;
  const p = projects[index];
  $('#dialog-content').innerHTML = `
    <div class="browser dialog-shot" style="--cover:${p.cover}">
      <div class="browser-bar"><i></i><i></i><i></i><span>${host(p.url)}</span></div>
      <div class="browser-view"><div class="preview-fallback">${p.name}</div><img src="${shot(p)}" alt="${lang ? 'Screenshot of' : 'Captura de'} ${p.name}" onerror="this.remove()"></div>
    </div>
    <div class="eyebrow">${t(p.label)}</div>
    <h2 id="dialog-title">${p.name}</h2>
    <p class="dialog-lead">${t(p.description)}</p>
    <p>${t(p.detail)}</p>
    <ul class="tags">${p.stack.map(s => `<li>${s}</li>`).join('')}</ul>
    <div class="dialog-actions">
      ${external(p.url, lang ? 'Open live demo ↗' : 'Abrir demo ↗', 'button primary')}
      ${p.repo ? external(GH + p.repo, lang ? 'View repository' : 'Ver repositorio', 'button ghost') : ''}
    </div>`;
  dialog.setAttribute('aria-labelledby', 'dialog-title');
  if (!dialog.open) dialog.showModal();
}

function setLanguage() {
  document.documentElement.lang = lang ? 'en' : 'es';
  document.title = lang ? 'Jelibeth Ramírez — Web, AI & IoT developer' : 'Jelibeth Ramírez — Desarrollo web, IA e IoT';
  $$('[data-i]').forEach(el => { if (dictionary[el.dataset.i]) el.innerHTML = t(dictionary[el.dataset.i]); });
  $('#language').innerHTML = lang ? 'EN <span>/ ES</span>' : 'ES <span>/ EN</span>';
  $('#language').setAttribute('aria-label', lang ? 'Cambiar a español' : 'Switch to English');
  $('nav').setAttribute('aria-label', lang ? 'Main' : 'Principal');
  $('.filters').setAttribute('aria-label', lang ? 'Filter projects' : 'Filtrar proyectos');
  $('.close').setAttribute('aria-label', lang ? 'Close' : 'Cerrar');
  renderProjects(); renderPodium(); renderHackathons(); renderLab(); renderCerts(); renderTimeline(); renderContact();
  if (dialog.open) showProject(openProject);
}

function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('show'), 2200);
}

function downloadVCard() {
  const card = ['BEGIN:VCARD','VERSION:3.0','N:Ramírez Vilchez;Jelibeth;;;','FN:Jelibeth Ramírez Vilchez',
    `TITLE:${lang ? 'Web developer' : 'Desarrolladora web'}`,'ORG:Damian Company',
    `TEL;TYPE=CELL:${CONTACT.phone}`,`EMAIL;TYPE=INTERNET:${CONTACT.email}`,
    `URL:${CONTACT.linkedin}`,`URL:${CONTACT.github}`,'ADR;TYPE=WORK:;;;Huancayo;Junín;;Perú','END:VCARD'].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([card], {type: 'text/vcard'}));
  a.download = 'Jelibeth-Ramirez.vcf';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

// Aparición al hacer scroll
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const io = 'IntersectionObserver' in window && !reduceMotion
  ? new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin: '0px 0px -40px 0px'})
  : null;
function observe(nodes) { nodes.forEach(n => io ? io.observe(n) : n.classList.add('in')); }

function countUp(el) {
  const end = Number(el.dataset.count);
  if (reduceMotion) { el.textContent = end; return; }
  const start = performance.now();
  const step = now => {
    const k = Math.min((now - start) / 900, 1);
    el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

$('#language').addEventListener('click', () => { lang = 1 - lang; setLanguage(); });
$$('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
  filter = btn.dataset.filter;
  $$('[data-filter]').forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
  renderProjects();
}));
grid.addEventListener('click', e => {
  if (e.target.closest('a')) return;
  const row = e.target.closest('.row');
  if (row) { hidePreview(); showProject(Number(row.dataset.row)); }
});
$('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {
  if (e.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
});
document.addEventListener('click', async e => {
  const b = e.target.closest('[data-copy]');
  if (!b) return;
  try { await navigator.clipboard.writeText(b.dataset.copy); toast(lang ? 'Email copied ✓' : 'Correo copiado ✓'); }
  catch { toast(b.dataset.copy); }
});
$('#vcard').addEventListener('click', downloadVCard);

// Header con fondo al hacer scroll
const header = $('.site-header');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 12), {passive: true});

// Contador de estadísticas
const statsObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('[data-count]').forEach(countUp); statsObserver.unobserve(e.target); } }))
  : null;
if (statsObserver) statsObserver.observe($('.stats'));

// Las cifras salen de los datos para que siempre coincidan
const totals = {awards: awards.length, contests: awards.length + hackathons.length + contests.filter(c => c.kind[0] === 'HACKATÓN').length, projects: projects.length, certs: certs.length};
$$('[data-total]').forEach(el => { el.dataset.count = el.textContent = totals[el.dataset.total]; });

renderMarquee();
observe($$('main > section > .reveal, main > .reveal, .section-heading.reveal'));
