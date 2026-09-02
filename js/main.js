// ---- pixel icon patterns (8x8 grid, X = filled) ----
const PATTERNS = {
  heart: [".XX..XX.","XXXXXXXX","XXXXXXXX","XXXXXXXX",".XXXXXX.","..XXXX..","...XX...","........"],
  controller: ["..XXXX..",".XXXXXX.","XXXXXXXX","XXXXXXXX","XXXXXXXX",".XXXXXX.","..X..X..","..X..X.."],
  paintbrush: [".......X","......XX",".....XX.","....XX..","...XX...","..XX....",".XX.....","XX......"],
  monitor: ["XXXXXXXX","X......X","X.XXXX.X","X.X..X.X","X.XXXX.X","X......X","XXXXXXXX","..XXXX.."],
  camera: [".XXXXXX.","XXXXXXXX","X.XXXX.X","X.XXXX.X","X.XXXX.X","XXXXXXXX","........","........"],
  mail: ["XXXXXXXX","X......X","X.X..X.X","X..XX..X","X......X","X......X","XXXXXXXX","........"],
  star: ["...XX...","...XX...","XXXXXXXX",".XXXXXX.","..XXXX..",".XXXXXX.","XX....XX","........"],
  dog: ["XX....XX","XXX..XXX","XXXXXXXX","X.X..X.X","XXXXXXXX","X.XXXX.X","XX....XX",".XXXXXX."],
  code: ["...X...X","..X...X.",".X...X..","X.....X.",".X...X..","..X...X.","...X...X","........"]
};

function renderPixelIcons(){
  document.querySelectorAll('.picon').forEach(el => {
    const name = el.getAttribute('data-icon');
    const color = el.getAttribute('data-color') || 'currentColor';
    const scale = parseFloat(el.getAttribute('data-scale')) || 2;
    const pattern = PATTERNS[name];
    if(!pattern) return;

    const shadows = [];
    pattern.forEach((row, y) => {
      [...row].forEach((ch, x) => {
        if(ch === 'X'){
          shadows.push(`${x*scale}px ${y*scale}px 0 0 ${color}`);
        }
      });
    });

    el.style.width = scale + 'px';
    el.style.height = scale + 'px';
    el.style.boxShadow = shadows.join(',');
    el.style.marginRight = (pattern[0].length * scale) + 'px';
    el.style.verticalAlign = 'middle';
  });
}
renderPixelIcons();

// ---- mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =================================================================
// DICCIONARIO DE TRADUCCIONES
// =================================================================
const TRANSLATIONS = {
  es: {
    "nav-about": "Sobre mí",
    "nav-work": "Trabajos",
    "nav-contact": "Contacto",
    "hero-player": "Jugador: Juan Cabrera",
    "hero-title": 'Diseño visual <span class="hl">claro</span> y maquetación web con criterio técnico para entornos B2B.',
    "hero-desc": "Especializado en identidad de marca, material comercial e interfaces digitales. Conecto el criterio gráfico con la lógica de desarrollo frontend para entregar soluciones visuales funcionales, ordenadas y listas para producción.",
    "hero-btn-work": "Ver trabajos",
    "hero-btn-contact": "Contactar",
    "hero-press-start": "CONOCE MI PERFIL",
    "hero-stat-role": "ROL: <hr>Diseñador Multimedia",
    "hero-stat-spec": "ESPECIALIDAD: <hr>UI / Branding B2B",
    "about-eyebrow": "01 · PERFIL",
    "about-title": "Criterio visual, puente técnico con desarrollo y narrativa multimedia.",
    "about-p1": "Cuento con experiencia en <strong>diseño dentro del sector B2B</strong>, donde me he encargado del desarrollo de piezas comerciales, identidad visual, retoque fotográfico de producto y maquetación web en estrecha coordinación con equipos de desarrollo. Mi enfoque no es solo que una pieza luzca bien, sino que resuelva una necesidad clara de comunicación o conversión.",
    "about-p2": "Cuento con bases sólidas de programación frontend y herramientas de maquetación, lo que me permite crear interfaces factibles, optimizar flujos de trabajo y hablar el mismo lenguaje técnico con los desarrolladores. Además, complemento mi perfil con proyectos de locución, guion y creación de contenido digital, aportando una visión integral de comunicación y storytelling.",
    "about-available": "● Disponible para roles a tiempo completo, proyectos freelance y colaboraciones.",
    "skills-title": "MIS HABILIDADES",
    "skill-branding": "Diseño y Branding",
    "skill-web": "UI & Experiencia Web",
    "skill-media": "Producción Multimedia",
    "skill-frontend": "Integración FrontEnd",
    "level-adv": "AVANZADO",
    "level-prof": "PROFICIENTE",
    "level-comp": "ENFOQUE COMPLEMENTARIO",
    "level-tech": "TÉCNICO / ENTORNO DEV",
    "work-eyebrow": "02 · SELECCIÓN DE TRABAJOS",
    "work-title": "Casos de estudio y áreas de trabajo",
    "work-sub": "Una selección de proyectos comerciales, diseño digital y soluciones visuales.",
    "card-flyers-h3": "Flyers & Material Comercial",
    "card-flyers-p": "Diseño publicitario y material promocional B2B enfocado en jerarquía de información y conversión clara.",
    "card-brand-h3": "Identidad Visual & Branding",
    "card-brand-p": "Sistemas visuales integrales: logotipos, paletas tipográficas, manuales de marca y assets digitales.",
    "card-uxui-h3": "Diseño Web & Casos de Estudio",
    "card-uxui-p": "Rediseño de interfaces, experiencia de usuario y arquitectura de información documentada paso a paso.",
    "card-media-h3": "Producción Multimedia & Audio",
    "card-media-p": "Guion, locución y narración digital para canales de difusión, explorando el lado narrativo del contenido.",
    "card-bonus-eyebrow": "PROYECTO PARALELO // CANAL DIGITAL",
    "card-bonus-h3": "Puggito — Creación de contenido y narrativa",
    "card-bonus-p": "En paralelo a mi rol como diseñador, produzco y edito ensayos en video sobre narrativa interactiva y diseño en YouTube. Un espacio donde pongo a prueba guion, edición audiovisual, diseño sonoro y comunicación de ideas complejas.",
    "tag-anim": "Animación",
    "tag-strat": "Estrategia",
    "tag-layout": "Maquetación",
    "tag-dub": "Doblaje",
    "tag-script": "Guion",
    "contact-eyebrow": "03 · CONTACTO",
    "contact-title": "¿Iniciamos un proyecto juntos?",
    "contact-sub": "Conversemos sobre vacantes en tu equipo, necesidades de diseño de marca o nuevas interfaces web.",
    "contact-insert": "Insertar moneda para continuar",
    "contact-desc": "Abierto a oportunidades laborales remotas, híbridas y colaboraciones freelance puntuales.",
    "contact-btn": "Enviar un correo",
    "modal-close": "✕ Cerrar",
    "tab-posts": "Posts",
    "tab-videos": "Reels y Motion Graphics",
    "tab-docs": "Casos (PDF)",
    "tab-gifs": "Firmas Animadas",
    "tab-dub": "Doblaje y YouTube",
    "tab-banners": "Banners Web",
    "btn-prev": "❮ Anterior",
    "btn-next": "Siguiente ❯",
    "pdf-view": "Ver Caso de Estudio ▸",
    "gif-alt": "Firma Animada"
  },
  en: {
    "nav-about": "About me",
    "nav-work": "Work",
    "nav-contact": "Contact",
    "hero-player": "Player: Juan Cabrera",
    "hero-title": 'Clear <span class="hl">visual design</span> and web layout with technical precision for B2B environments.',
    "hero-desc": "Specialized in brand identity, marketing assets, and digital interfaces. I bridge graphic standards with frontend logic to deliver clean, functional, and production-ready visual solutions.",
    "hero-btn-work": "View work",
    "hero-btn-contact": "Get in touch",
    "hero-press-start": "DISCOVER MY PROFILE",
    "hero-stat-role": "ROLE: <hr>Multimedia Designer",
    "hero-stat-spec": "SPECIALTY: <hr>UI / B2B Branding",
    "about-eyebrow": "01 · PROFILE",
    "about-title": "Visual insight, technical bridge to dev teams, and multimedia storytelling.",
    "about-p1": "Experienced in <strong>design within the B2B sector</strong>, handling marketing deliverables, visual identity, product image editing, and web layout in tight sync with development teams. My focus is not only aesthetic quality, but solving clear business communication or conversion needs.",
    "about-p2": "I possess solid foundations in frontend code and web composition tools, allowing me to build feasible interfaces, speed up workflows, and talk technical language directly with developers. Additionally, I produce voiceover, scripting, and digital media projects, delivering a well-rounded storytelling perspective.",
    "about-available": "● Available for full-time roles, freelance projects, and collaborations.",
    "skills-title": "MY SKILLS",
    "skill-branding": "Design & Branding",
    "skill-web": "UI & Web Experience",
    "skill-media": "Multimedia Production",
    "skill-frontend": "FrontEnd Integration",
    "level-adv": "ADVANCED",
    "level-prof": "PROFICIENT",
    "level-comp": "COMPLEMENTARY FOCUS",
    "level-tech": "TECHNICAL / DEV STACK",
    "work-eyebrow": "02 · FEATURED WORK",
    "work-title": "Case studies & practice areas",
    "work-sub": "A selection of commercial projects, digital design, and visual solutions.",
    "card-flyers-h3": "Flyers & Marketing Assets",
    "card-flyers-p": "B2B advertising design and promotional materials focused on clear hierarchy and conversion.",
    "card-brand-h3": "Visual Identity & Branding",
    "card-brand-p": "Comprehensive visual systems: logos, typography scales, brand guides, and digital assets.",
    "card-uxui-h3": "Web Design & Case Studies",
    "card-uxui-p": "Interface redesign, user experience, and documented information architecture step by step.",
    "card-media-h3": "Multimedia Production & Audio",
    "card-media-p": "Scriptwriting, voiceover, and digital narration, exploring storytelling formats.",
    "card-bonus-eyebrow": "SIDE PROJECT // DIGITAL CHANNEL",
    "card-bonus-h3": "Puggito — Content creation & storytelling",
    "card-bonus-p": "Alongside my design role, I produce and edit video essays on interactive storytelling and design on YouTube. A testbed for scriptwriting, audiovisual editing, audio design, and communicating complex ideas.",
    "tag-anim": "Animation",
    "tag-strat": "Strategy",
    "tag-layout": "Layout",
    "tag-dub": "Dubbing",
    "tag-script": "Script",
    "contact-eyebrow": "03 · CONTACT",
    "contact-title": "Ready to build something together?",
    "contact-sub": "Let's discuss full-time roles, brand design projects, or modern web interfaces.",
    "contact-insert": "Insert coin to continue",
    "contact-desc": "Available for remote, hybrid opportunities, and freelance projects.",
    "contact-btn": "Send an email",
    "modal-close": "✕ Close",
    "tab-posts": "Posts",
    "tab-videos": "Reels & Motion Graphics",
    "tab-docs": "Cases (PDF)",
    "tab-gifs": "Animated Signatures",
    "tab-dub": "Dubbing & YouTube",
    "tab-banners": "Web Banners",
    "btn-prev": "❮ Previous",
    "btn-next": "Next ❯",
    "pdf-view": "View Case Study ▸",
    "gif-alt": "Animated Signature"
  }
};

let currentLang = localStorage.getItem('site_lang') || 'es';

// =================================================================
// GALERÍAS
// =================================================================
const GALLERIES = {
  flyers: {
    title: { es: "Flyers & Material Comercial", en: "Flyers & Marketing Assets" },
    desc: {
      es: "Diseño publicitario y material promocional B2B enfocado en jerarquía de información y conversión clara.",
      en: "B2B advertising design and promotional materials focused on clear hierarchy and conversion."
    },
    images: [
      "imagenes/flyer1.webp","imagenes/flyer2.webp","imagenes/flyer3.webp",
      "imagenes/flyer4.webp","imagenes/flyer5.webp","imagenes/flyer6.webp",
      "imagenes/flyer7.webp","imagenes/flyer8.webp","imagenes/flyer9.webp",
      "imagenes/flyer10.webp","imagenes/flyer11.webp","imagenes/flyer12.webp",
      "imagenes/flyer13.webp","imagenes/flyer14.webp","imagenes/flyer15.webp",
      "imagenes/flyer16.webp","imagenes/flyer17.webp","imagenes/flyer18.webp",
      "imagenes/flyer19.webp","imagenes/flyer20.webp","imagenes/flyer21.webp"
    ],
    videos: [
      { url: "https://www.youtube.com/embed/JyQF7zDu4MA", aspect: "horizontal" },
      { url: "https://www.youtube.com/embed/jI7afJeUtas", aspect: "vertical" },
      { url: "https://youtube.com/embed/kqMBXDwehjM?si=RhGjE-Q9wZB7ncqL", aspect: "vertical" },
      { url: "https://youtube.com/embed/whmtmMbQsO4?feature=share", aspect: "vertical" },
      { url: "https://youtube.com/embed/5GEbFYFmay0?feature=share", aspect: "vertical" },
      { url: "https://youtube.com/embed/dxETKgaA4AA?feature=share", aspect: "vertical" },
      { url: "https://youtube.com/embed/Uia83Or08zs?feature=share", aspect: "vertical" }
    ]
  },
  uxui: {
    title: { es: "Diseño Web & Casos de Estudio", en: "Web Design & Case Studies" },
    desc: {
      es: "Rediseño de interfaces, experiencia de usuario y arquitectura de información documentada paso a paso.",
      en: "Interface redesign, user experience, and documented information architecture step by step."
    },
    images: [],
    videos: [],
    docs: [
      { 
        name: { es: "Caso de Estudio: EcuaMia Flowers", en: "Case Study: EcuaMia Flowers" }, 
        url: "casos_de_estudio/Caso de Estudio - EcuaMia Flowers.pdf",
        thumb: "imagenes/thumb_ecuamia.jpeg" 
      }
    ]
  },
  branding: {
    title: { es: "Identidad Visual & Branding", en: "Visual Identity & Branding" },
    desc: {
      es: "Sistemas visuales integrales: logotipos, paletas tipográficas, manuales de marca y assets digitales.",
      en: "Comprehensive visual systems: logos, typography scales, brand guides, and digital assets."
    },
    banners: [
      "branding_imagenes/easter_banner.webp",
      "branding_imagenes/ppf_banner.webp",
      "branding_imagenes/mother_banner.webp",
      "branding_imagenes/spring_banner.webp",
      "branding_imagenes/summer_banner.webp"
    ], 
    videos: [],
    gifs: [
      "firmas_gif/firma_easter_hq.gif",
      "firmas_gif/firma_fall_2026_hq.gif",
      "firmas_gif/firma_navidad_hq.gif",
      "firmas_gif/firma_new_year_2026_hq.gif",
      "firmas_gif/firma_spring_2026_hq.gif",
      "firmas_gif/firma_summer_2026_hq.gif",
      "firmas_gif/firma_easter_2025_hq.gif",
      "firmas_gif/firma_mother_2025_hq.gif",
      "firmas_gif/firma_attar_2026_hq.gif"
    ]
  },
  doblaje: {
    title: { es: "Producción Multimedia & Audio", en: "Multimedia Production & Audio" },
    desc: {
      es: "Guion, locución y narración digital para canales de difusión, explorando el lado narrativo del contenido.",
      en: "Scriptwriting, voiceover, and digital narration, exploring storytelling formats."
    },
    doblaje_videos: [
      {
        title: {
          es: "Práctica de Doblaje: El Increible Castillo del Vagabundo",
          en: "Dubbing Practice: Howl's Moving Castle"
        },
        desc: {
          es: "Interpreté a Howl Jenkins Pendragon. Enfocado en sincronización labial y modulación de tonos suave.",
          en: "Played Howl Jenkins Pendragon. Focused on lip-syncing and soft vocal modulation."
        },
        url: "https://drive.google.com/file/d/17_HR9QjKkaY8n87Vp8aLAPDOyOQ2hItd/preview",
        aspect: "horizontal"
      },
      {
        title: {
          es: "Práctica de Doblaje: El Increible Castillo del Vagabundo (Parte 2)",
          en: "Dubbing Practice: Howl's Moving Castle (Part 2)"
        },
        desc: {
          es: "Segunda escena interpretando a Howl. Trabajo de proyección, manejo de pausas e intención dramática del personaje.",
          en: "Second scene playing Howl. Vocal projection, dramatic pauses, and character intent."
        },
        url: "https://drive.google.com/file/d/1c-FN1ybpl7XIF7ccXqdqvFnxpfAFdpO_/preview",
        aspect: "horizontal"
      },
      {
        title: {
          es: "Toy Story — Práctica Woody",
          en: "Toy Story — Woody Practice"
        },
        desc: {
          es: "Interpreté al comisario Woody. Ejercicio enfocado en energía alta, cambios de ritmo rápidos y matices vocales de frustración y liderazgo.",
          en: "Played Sheriff Woody. Fast-paced delivery, high energy, and expressing leadership with frustration."
        },
        url: "https://drive.google.com/file/d/143_Ap0q05SZLrthyM59ETs9HAYsw3ZRl/preview",
        aspect: "horizontal"
      },
      {
        title: {
          es: "The Legend of Zelda - Relato & Cinemática",
          en: "The Legend of Zelda - Story & Cinematic"
        },
        desc: {
          es: "Locución en off, guion, edición de video e integración de elementos en 3D. Trabajo de ritmo cinematográfico, diseño sonoro envolvente y tono solemne.",
          en: "Voiceover, script, video editing, and 3D asset integration. Cinematic pacing, sound design, and solemn tone."
        },
        url: "https://drive.google.com/file/d/1QnQsAsU0U2AqPzhA3pnsUcnqAgshvHuL/preview",
        aspect: "horizontal"
      }
    ]
  }
};

let currentGalleryKey = null;
let currentTab = 'images';
let currentImageIndex = 0;
let currentCarouselIndex = 0;

const galleryModal = document.getElementById('galleryModal');
const galleryGrid = document.getElementById('galleryGrid');
const galleryTitle = document.getElementById('galleryTitle');
const galleryDesc = document.getElementById('galleryDesc');
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');

function openGallery(key){
  const gallery = GALLERIES[key];
  if(!gallery) return;

  currentGalleryKey = key;
  galleryTitle.textContent = gallery.title[currentLang] || gallery.title.es;
  galleryDesc.textContent = (gallery.desc && gallery.desc[currentLang]) ? gallery.desc[currentLang] : (gallery.desc?.es || "");

  let defaultTab = 'images';
  if (key === 'branding') {
    defaultTab = 'gifs';
  } else if (key === 'doblaje') {
    defaultTab = 'doblaje_videos';
  } else if (gallery.images && gallery.images.length > 0) {
    defaultTab = 'images';
  } else if (gallery.videos && gallery.videos.length > 0) {
    defaultTab = 'videos';
  } else if (gallery.docs && gallery.docs.length > 0) {
    defaultTab = 'docs';
  }

  switchTab(defaultTab);

  galleryModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function switchTab(type){
  currentTab = type;
  const gallery = GALLERIES[currentGalleryKey];
  if(!gallery) return;

  const tabs = {
    gifs: document.getElementById('tabGifs'),
    branding: document.getElementById('tabBranding'),
    banners: document.getElementById('tabBanners'),
    images: document.getElementById('tabImages'),
    videos: document.getElementById('tabVideos'),
    doblaje_videos: document.getElementById('tabDoblaje'),
    docs: document.getElementById('tabDocs')
  };

  for (const [k, btn] of Object.entries(tabs)) {
    if (!btn) continue;
    btn.classList.toggle('active', type === k);
    btn.style.display = (gallery[k] && gallery[k].length > 0) ? 'block' : 'none';
  }

  galleryGrid.innerHTML = "";
  galleryGrid.setAttribute('data-tab', type);
  const fragment = document.createDocumentFragment();

  const prevText = TRANSLATIONS[currentLang]["btn-prev"];
  const nextText = TRANSLATIONS[currentLang]["btn-next"];

  if(type === 'branding' || type === 'banners'){
    currentCarouselIndex = 0;
    const arrayKey = type;
    const items = gallery[arrayKey] || [];
    const carouselWrap = document.createElement('div');
    carouselWrap.className = 'branding-carousel pixel-frame';
    carouselWrap.innerHTML = `
      <div class="carousel-view">
        <img id="carouselImg" src="${items[0]}" alt="${gallery.title[currentLang]}">
      </div>
      <div class="carousel-nav-bar">
        <button type="button" class="btn ghost btn-car" onclick="moveCarousel(-1, '${arrayKey}')">${prevText}</button>
        <span class="carousel-count mono" id="carouselCounter">1 / ${items.length}</span>
        <button type="button" class="btn ghost btn-car" onclick="moveCarousel(1, '${arrayKey}')">${nextText}</button>
      </div>
    `;
    fragment.appendChild(carouselWrap);

  } else if(type === 'images'){
    (gallery.images || []).forEach((src, index) => {
      const btn = document.createElement('button');
      btn.className = 'gallery-thumb';
      btn.type = 'button';
      btn.onclick = () => openLightbox(index);

      const img = document.createElement('img');
      img.src = src;
      img.alt = gallery.title[currentLang];
      img.loading = 'lazy';
      img.decoding = 'async';

      btn.appendChild(img);
      fragment.appendChild(btn);
    });

  } else if(type === 'videos'){
    (gallery.videos || []).forEach((videoData) => {
      const container = document.createElement('div');
      const videoSrc = typeof videoData === 'string' ? videoData : videoData.url;
      const isVertical = typeof videoData === 'object' && videoData.aspect === 'vertical';

      container.className = 'video-card' + (isVertical ? ' vertical' : '');

      const iframe = document.createElement('iframe');
      iframe.src = videoSrc;
      iframe.title = "Video player";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;

      container.appendChild(iframe);
      fragment.appendChild(container);
    });

  } else if(type === 'docs'){
    (gallery.docs || []).forEach((doc) => {
      const card = document.createElement('a');
      card.href = doc.url;
      card.target = "_blank";
      card.className = "doc-card pixel-frame";
      
      const docTitle = doc.name[currentLang] || doc.name.es;
      const viewText = TRANSLATIONS[currentLang]["pdf-view"];

      if (doc.thumb) {
        card.innerHTML = `
          <div class="doc-thumb">
            <img src="${doc.thumb}" alt="${docTitle}">
            <div class="doc-badge">PDF</div>
          </div>
          <div class="doc-info">
            <h4>${docTitle}</h4>
            <span>${viewText}</span>
          </div>
        `;
      } else {
        card.innerHTML = `
          <div class="doc-icon">📄</div>
          <div class="doc-info">
            <h4>${docTitle}</h4>
            <span>${viewText}</span>
          </div>
        `;
      }
      fragment.appendChild(card);
    });

  } else if(type === 'gifs'){
    const gifAlt = TRANSLATIONS[currentLang]["gif-alt"];
    (gallery.gifs || []).forEach((src) => {
      const container = document.createElement('div');
      container.className = 'gif-card pixel-frame';
    
      const img = document.createElement('img');
      img.src = src;
      img.alt = gifAlt;
      img.style.width = "100%";
      img.style.display = "block";
    
      container.appendChild(img);
      fragment.appendChild(container);
    });

  } else if(type === 'doblaje_videos'){
    (gallery.doblaje_videos || []).forEach((item) => {
      const card = document.createElement('div');
      const isVertical = item.aspect === 'vertical';
      card.className = 'doblaje-card pixel-frame' + (isVertical ? ' vertical' : '');

      const itemTitle = item.title[currentLang] || item.title.es;
      const itemDesc = item.desc[currentLang] || item.desc.es;

      card.innerHTML = `
        <div class="doblaje-video-wrap">
          <iframe src="${item.url}" title="${itemTitle}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="doblaje-info">
          <h4>${itemTitle}</h4>
          <p>${itemDesc}</p>
        </div>
      `;

      fragment.appendChild(card);
    });
  }

  galleryGrid.appendChild(fragment);
}

function moveCarousel(dir, arrayKey) {
  const gallery = GALLERIES[currentGalleryKey];
  if(!gallery || !gallery[arrayKey]) return;

  const items = gallery[arrayKey];
  currentCarouselIndex += dir;

  if (currentCarouselIndex >= items.length) {
    currentCarouselIndex = 0;
  } else if (currentCarouselIndex < 0) {
    currentCarouselIndex = items.length - 1;
  }

  const img = document.getElementById('carouselImg');
  const counter = document.getElementById('carouselCounter');

  if(img) img.src = items[currentCarouselIndex];
  if(counter) counter.textContent = `${currentCarouselIndex + 1} / ${items.length}`;
}

function closeGallery(){
  galleryModal.classList.remove('open');
  document.body.classList.remove('modal-open');
  galleryGrid.innerHTML = ""; 
}

function openLightbox(index){
  const gallery = GALLERIES[currentGalleryKey];
  if(!gallery || !gallery.images) return;

  currentImageIndex = index;
  lightboxImg.src = gallery.images[currentImageIndex];
  lightboxModal.classList.add('open');
}

function changeLightboxImage(direction) {
  const gallery = GALLERIES[currentGalleryKey];
  if(!gallery || !gallery.images) return;

  currentImageIndex += direction;
  if (currentImageIndex >= gallery.images.length) currentImageIndex = 0;
  else if (currentImageIndex < 0) currentImageIndex = gallery.images.length - 1;

  lightboxImg.src = gallery.images[currentImageIndex];
}

function closeLightbox(){
  lightboxModal.classList.remove('open');
  lightboxImg.src = "";
}

// =================================================================
// FUNCIÓN PRINCIPAL DE CAMBIO DE IDIOMA
// =================================================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.innerHTML = lang === 'es' 
      ? '<span class="active-lang">ES</span> / <span>EN</span>' 
      : '<span>ES</span> / <span class="active-lang">EN</span>';
  }

  if (galleryModal.classList.contains('open') && currentGalleryKey) {
    const gallery = GALLERIES[currentGalleryKey];
    galleryTitle.textContent = gallery.title[currentLang] || gallery.title.es;
    galleryDesc.textContent = (gallery.desc && gallery.desc[currentLang]) ? gallery.desc[currentLang] : (gallery.desc?.es || "");
    switchTab(currentTab);
  }
}

const langToggleBtn = document.getElementById('langToggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(nextLang);
  });
}

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    if(lightboxModal.classList.contains('open')) closeLightbox();
    else if(galleryModal.classList.contains('open')) closeGallery();
  }
  if(lightboxModal.classList.contains('open')){
    if(e.key === 'ArrowRight') changeLightboxImage(1);
    if(e.key === 'ArrowLeft') changeLightboxImage(-1);
  }
});

// Inicializar idioma en la carga
setLanguage(currentLang);