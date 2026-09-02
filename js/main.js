// ---- pixel icon patterns (8x8 grid, X = filled) ----
const PATTERNS = {
  heart: [
    ".XX..XX.",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    ".XXXXXX.",
    "..XXXX..",
    "...XX...",
    "........"
  ],
  controller: [
    "..XXXX..",
    ".XXXXXX.",
    "XXXXXXXX",
    "XXXXXXXX",
    "XXXXXXXX",
    ".XXXXXX.",
    "..X..X..",
    "..X..X.."
  ],
  paintbrush: [
    ".......X",
    "......XX",
    ".....XX.",
    "....XX..",
    "...XX...",
    "..XX....",
    ".XX.....",
    "XX......"
  ],
  monitor: [
    "XXXXXXXX",
    "X......X",
    "X.XXXX.X",
    "X.X..X.X",
    "X.XXXX.X",
    "X......X",
    "XXXXXXXX",
    "..XXXX.."
  ],
  camera: [
    ".XXXXXX.",
    "XXXXXXXX",
    "X.XXXX.X",
    "X.XXXX.X",
    "X.XXXX.X",
    "XXXXXXXX",
    "........",
    "........"
  ],
  mail: [
    "XXXXXXXX",
    "X......X",
    "X.X..X.X",
    "X..XX..X",
    "X......X",
    "X......X",
    "XXXXXXXX",
    "........"
  ],
  star: [
    "...XX...",
    "...XX...",
    "XXXXXXXX",
    ".XXXXXX.",
    "..XXXX..",
    ".XXXXXX.",
    "XX....XX",
    "........"
  ],
  dog: [
    "XX....XX",
    "XXX..XXX",
    "XXXXXXXX",
    "X.X..X.X",
    "XXXXXXXX",
    "X.XXXX.X",
    "XX....XX",
    ".XXXXXX."
  ],
  code: [
    "...X...X",
    "..X...X.",
    ".X...X..",
    "X.....X.",
    ".X...X..",
    "..X...X.",
    "...X...X",
    "........"
  ]
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
// GALERÍAS
// =================================================================
const GALLERIES = {
  flyers: {
    title: "Flyers & Material Comercial",
    desc: "Diseño publicitario y material promocional B2B enfocado en jerarquía de información y conversión clara.",
    images: [
      "imagenes/flyer1.webp",
      "imagenes/flyer2.webp",
      "imagenes/flyer3.webp",
      "imagenes/flyer4.webp",
      "imagenes/flyer5.webp",
      "imagenes/flyer6.webp",
      "imagenes/flyer7.webp",
      "imagenes/flyer8.webp",
      "imagenes/flyer9.webp",
      "imagenes/flyer10.webp",
      "imagenes/flyer11.webp",
      "imagenes/flyer12.webp",
      "imagenes/flyer13.webp",
      "imagenes/flyer14.webp",
      "imagenes/flyer15.webp",
      "imagenes/flyer16.webp",
      "imagenes/flyer17.webp",
      "imagenes/flyer18.webp",
      "imagenes/flyer19.webp",
      "imagenes/flyer20.webp",
      "imagenes/flyer21.webp"
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
    title: "Diseño Web & Casos de Estudio",
    desc: "Rediseño de interfaces, experiencia de usuario y arquitectura de información documentada paso a paso.",
    images: [],
    videos: [],
    docs: [
      { 
        name: "Caso de Estudio: EcuaMia Flowers", 
        url: "casos_de_estudio/Caso de Estudio - EcuaMia Flowers.pdf",
        thumb: "imagenes/thumb_ecuamia.jpeg" 
      }
    ]
  },
  branding: {
    title: "Identidad Visual & Branding",
    desc: "Sistemas visuales integrales: logotipos, paletas tipográficas, manuales de marca y assets digitales.",
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
    title: "Producción Multimedia & Audio",
    desc: "Guion, locución y narración digital para canales de difusión, explorando el lado narrativo del contenido.",
    doblaje_videos: [
      {
        title: "Práctica de Doblaje: El Increible Castillo del Vagabundo",
        desc: "Interpreté a Howl Jenkins Pendragon. Enfocado en sincronización labial y modulación de tonos suave.",
        url: "https://drive.google.com/file/d/17_HR9QjKkaY8n87Vp8aLAPDOyOQ2hItd/preview",
        aspect: "horizontal"
      },
      {
        title: "Práctica de Doblaje: El Increible Castillo del Vagabundo (Parte 2)",
        desc: "Segunda escena interpretando a Howl. Trabajo de proyección, manejo de pausas e intención dramática del personaje.",
        url: "https://drive.google.com/file/d/1c-FN1ybpl7XIF7ccXqdqvFnxpfAFdpO_/preview",
        aspect: "horizontal"
      },
      {
        title: "Toy Story — Práctica Woody",
        desc: "Interpreté al comisario Woody. Ejercicio enfocado en energía alta, cambios de ritmo rápidos y matices vocales de frustración y liderazgo.",
        url: "https://drive.google.com/file/d/143_Ap0q05SZLrthyM59ETs9HAYsw3ZRl/preview",
        aspect: "horizontal"
      },
      {
        title: "The Legend of Zelda - Relato & Cinemática",
        desc: "Locución en off, guion, edición de video e integración de elementos en 3D. Trabajo de ritmo cinematográfico, diseño sonoro envolvente y tono solemne.",
        url: "https://drive.google.com/file/d/1QnQsAsU0U2AqPzhA3pnsUcnqAgshvHuL/preview",
        aspect: "horizontal"
      }
    ]
  }
};
let currentGalleryKey = null;
let currentTab = 'images';
let currentImageIndex = 0;

// Variable para la posición del carrusel de branding
let currentCarouselIndex = 0;

function openGallery(key){
  const gallery = GALLERIES[key];
  if(!gallery) return;

  currentGalleryKey = key;
  galleryTitle.textContent = gallery.title;
  galleryDesc.textContent = gallery.desc || "";

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

  // Lista de todos los botones de pestaña
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

  // 1. Pestaña BRANDING (Carrusel)
  if(type === 'branding'){
    currentCarouselIndex = 0;
    const carouselWrap = document.createElement('div');
    carouselWrap.className = 'branding-carousel pixel-frame';
    carouselWrap.innerHTML = `
      <div class="carousel-view">
        <img id="carouselImg" src="${gallery.branding[0]}" alt="${gallery.title}">
      </div>
      <div class="carousel-nav-bar">
        <button type="button" class="btn ghost btn-car" onclick="moveCarousel(-1, 'branding')">❮ Anterior</button>
        <span class="carousel-count mono" id="carouselCounter">1 / ${gallery.branding.length}</span>
        <button type="button" class="btn ghost btn-car" onclick="moveCarousel(1, 'branding')">Siguiente ❯</button>
      </div>
    `;
    fragment.appendChild(carouselWrap);

  // 2. Pestaña BANNERS WEB (Carrusel panorámico)
  } else if(type === 'banners'){
    currentCarouselIndex = 0;
    const carouselWrap = document.createElement('div');
    carouselWrap.className = 'branding-carousel pixel-frame';
    carouselWrap.innerHTML = `
      <div class="carousel-view">
        <img id="carouselImg" src="${gallery.banners[0]}" alt="${gallery.title}">
      </div>
      <div class="carousel-nav-bar">
        <button type="button" class="btn ghost btn-car" onclick="moveCarousel(-1, 'banners')">❮ Anterior</button>
        <span class="carousel-count mono" id="carouselCounter">1 / ${gallery.banners.length}</span>
        <button type="button" class="btn ghost btn-car" onclick="moveCarousel(1, 'banners')">Siguiente ❯</button>
      </div>
    `;
    fragment.appendChild(carouselWrap);

  // 3. Pestaña IMÁGENES (Galería normal para Flyers)
  } else if(type === 'images'){
    (gallery.images || []).forEach((src, index) => {
      const btn = document.createElement('button');
      btn.className = 'gallery-thumb';
      btn.type = 'button';
      btn.onclick = () => openLightbox(index);

      const img = document.createElement('img');
      img.src = src;
      img.alt = gallery.title;
      img.loading = 'lazy';
      img.decoding = 'async';

      btn.appendChild(img);
      fragment.appendChild(btn);
    });

  // 4. Pestaña VÍDEOS
  } else if(type === 'videos'){
    (gallery.videos || []).forEach((videoData) => {
      const container = document.createElement('div');
      const videoSrc = typeof videoData === 'string' ? videoData : videoData.url;
      const isVertical = typeof videoData === 'object' && videoData.aspect === 'vertical';

      container.className = 'video-card' + (isVertical ? ' vertical' : '');

      const iframe = document.createElement('iframe');
      iframe.src = videoSrc;
      iframe.title = "Reproductor de YouTube";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;

      container.appendChild(iframe);
      fragment.appendChild(container);
    });

  // 5. Pestaña DOCUMENTOS (PDF)
  } else if(type === 'docs'){
    (gallery.docs || []).forEach((doc) => {
      const card = document.createElement('a');
      card.href = doc.url;
      card.target = "_blank";
      card.className = "doc-card pixel-frame";
      
      if (doc.thumb) {
        card.innerHTML = `
          <div class="doc-thumb">
            <img src="${doc.thumb}" alt="${doc.name}">
            <div class="doc-badge">PDF</div>
          </div>
          <div class="doc-info">
            <h4>${doc.name}</h4>
            <span>Ver Caso de Estudio ▸</span>
          </div>
        `;
      } else {
        card.innerHTML = `
          <div class="doc-icon">📄</div>
          <div class="doc-info">
            <h4>${doc.name}</h4>
            <span>Abrir PDF</span>
          </div>
        `;
      }
      fragment.appendChild(card);
    });

  // 6. Pestaña FIRMAS (GIF)
  } else if(type === 'gifs'){
    (gallery.gifs || []).forEach((src) => {
      const container = document.createElement('div');
      container.className = 'gif-card pixel-frame';
    
      const img = document.createElement('img');
      img.src = src;
      img.alt = "Firma Animada";
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

      card.innerHTML = `
        <div class="doblaje-video-wrap">
          <iframe src="${item.url}" title="${item.title || 'Video'}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="doblaje-info">
          <h4>${item.title || 'Práctica de Voz'}</h4>
          <p>${item.desc || ''}</p>
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
  // Limpia el Grid para detener la reproducción de audios/vídeos de fondo al cerrar
  galleryGrid.innerHTML = ""; 
}

const galleryModal = document.getElementById('galleryModal');
const galleryGrid = document.getElementById('galleryGrid');
const galleryTitle = document.getElementById('galleryTitle');
const galleryDesc = document.getElementById('galleryDesc');
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(index){
  const gallery = GALLERIES[currentGalleryKey];
  if(!gallery || !gallery.images) return;

  currentImageIndex = index;
  const src = gallery.images[currentImageIndex];
  
  lightboxImg.src = ""; 
  lightboxImg.decoding = "async";
  lightboxImg.src = src;
  lightboxModal.classList.add('open');
}

function changeLightboxImage(direction) {
  const gallery = GALLERIES[currentGalleryKey];
  if(!gallery || !gallery.images) return;

  currentImageIndex += direction;

  // Hacer que sea infinito (vuelva al inicio o al final)
  if (currentImageIndex >= gallery.images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = gallery.images.length - 1;
  }

  const src = gallery.images[currentImageIndex];
  lightboxImg.src = src;
}

function closeLightbox(){
  lightboxModal.classList.remove('open');
  lightboxImg.src = "";
}



document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    if(lightboxModal.classList.contains('open')){
      closeLightbox();
    } else if(galleryModal.classList.contains('open')){
      closeGallery();
    }
  }
  
  // Navegación con teclado
  if(lightboxModal.classList.contains('open')){
    if(e.key === 'ArrowRight') changeLightboxImage(1);
    if(e.key === 'ArrowLeft') changeLightboxImage(-1);
  }
});