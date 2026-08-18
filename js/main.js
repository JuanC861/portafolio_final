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
    title: "Flyers & Maquetación",
    desc: "Selecciona una imagen para verla en grande.",
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
      "imagenes/flyer20.webp"
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
    title: "UX/UI & Casos de Estudio",
    desc: "Explora mis procesos de diseño y soluciones de experiencia de usuario.",
    images: [],
    videos: [],
    docs: [
      { 
        name: "Caso de Estudio: EcuaMia Flowers", 
        url: "casos_de_estudio/Caso de Estudio - EcuaMia Flowers.pdf",
        thumb: "imagenes/thumb_ecuamia.jpeg" 
      },
      { 
        name: "Rediseño E-commerce Florex", 
        url: "casos_de_estudio/rediseño-florex.pdf",
        thumb: "imagenes/portada-florex.webp"
      }
    ]
  },
  branding: {
    title: "Branding e Identidad",
    desc: "Diseño de marcas y firmas animadas.",
    images: ["imagenes/logo1.webp", "imagenes/logo2.webp"], 
    videos: [],
    gifs: [
      "imagenes/firma1.gif",
      "imagenes/firma2.gif"
    ]
  }
};
let currentGalleryKey = null;
let currentTab = 'images';
let currentImageIndex = 0;

function openGallery(key){
  const gallery = GALLERIES[key];
  if(!gallery) return;

  currentGalleryKey = key;
  galleryTitle.textContent = gallery.title;
  galleryDesc.textContent = gallery.desc || "";

  // Determinar qué pestaña abrir por defecto basado en lo que tiene la galería
  let defaultTab = 'images';
  if (gallery.images && gallery.images.length > 0) {
    defaultTab = 'images';
  } else if (gallery.videos && gallery.videos.length > 0) {
    defaultTab = 'videos';
  } else if (gallery.docs && gallery.docs.length > 0) {
    defaultTab = 'docs';
  } else if (gallery.gifs && gallery.gifs.length > 0) {
    defaultTab = 'gifs';
  }

  switchTab(defaultTab);

  galleryModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function switchTab(type){
  currentTab = type;
  const gallery = GALLERIES[currentGalleryKey];
  if(!gallery) return;

  // Actualizar botones de pestaña
  document.getElementById('tabImages').classList.toggle('active', type === 'images');
  document.getElementById('tabVideos').classList.toggle('active', type === 'videos');
  document.getElementById('tabDocs').classList.toggle('active', type === 'docs');
  document.getElementById('tabGifs').classList.toggle('active', type === 'gifs');

  // Mostrar/Ocultar botones según disponibilidad de contenido en esta galería
  document.getElementById('tabImages').style.display = (gallery.images && gallery.images.length) ? 'block' : 'none';
  document.getElementById('tabVideos').style.display = (gallery.videos && gallery.videos.length) ? 'block' : 'none';
  document.getElementById('tabDocs').style.display = (gallery.docs && gallery.docs.length) ? 'block' : 'none';
  document.getElementById('tabGifs').style.display = (gallery.gifs && gallery.gifs.length) ? 'block' : 'none';

  galleryGrid.innerHTML = "";
  galleryGrid.setAttribute('data-tab', type);
  const fragment = document.createDocumentFragment();

  if(type === 'images'){
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
  }

  galleryGrid.appendChild(fragment);
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