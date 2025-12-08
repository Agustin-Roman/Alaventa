// Primero: la lista de productos
const productos = [ 
  {
    id: 1,
    nombre: "Cuchillos",
    descripcion: "Cuchillos de sierra vieja y machte de 4mm",
    precio: 1,
    imagen: "./imgs/cuchillo1.jpg"
  },
  {
    id: 2,
    nombre: "Amoladora Piezas",
    descripcion: "El motor funciona el resto no tanto (Gamma)",
    precio: 10000,
    imagen: "./imgs/amoladora.jpg"
  },
  {
    id: 3,
    nombre: "Cucharita",
    descripcion: "Precio negociable",
    precio: 99,
    imagen: "./imgs/cucharita.jpg"
  },
  {
    id: 4,
    nombre: "Botellita",
    descripcion: "Como una botella normal pero más chiquita",
    precio: 1000,
    imagen: "./imgs/botellita.jpg"
  },
  {
    id: 5,
    nombre: "Ovo",
    descripcion: "?",
    precio: 18,
    imagen: "./imgs/ovo.jpg"
  }
];

// Segundo: funciones de zoom
function zoomImagen(src) {
  const overlay = document.getElementById("img-zoom-overlay");
  const zoomed = document.getElementById("zoomed-img");

  zoomed.src = src;
  overlay.style.display = "flex";
}

document.getElementById("img-zoom-overlay").onclick = () => {
  document.getElementById("img-zoom-overlay").style.display = "none";
};

// Tercero: renderizado
const contenedor = document.getElementById('productContainer');

if (!productos || productos.length === 0) {
    contenedor.innerHTML = `<p class="text-center col-12 fs-3 text-muted">No hay productos disponibles.</p>`;
} else {
    productos.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col';

        col.innerHTML = `
            <div class="card h-100">
                <img src="${p.imagen || 'https://via.placeholder.com/400x300/161b22/8b949e?text=Sin+Imagen'}" 
                      class="card-img-top" 
                      alt="${p.nombre}" 
                      onclick="zoomImagen(this.src)">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text flex-grow-1">${p.descripcion || 'Sin descripción'}</p>
                    <p class="price mt-auto">$ ${Number(p.precio).toLocaleString('es-AR', {minimumFractionDigits: 2})}</p>
                </div>
            </div>
        `;
        contenedor.appendChild(col);
    });
}
