// propiedades alquiler

const propiedades_alquiler = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripción: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicación: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false,
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripción: 'Este apartamento acogedor está situado en lo alto de la montaña con impresionantes vistas',
        ubicación: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripción: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicación: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripción: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicación: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true,
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripción: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicación: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripción: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicación: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false,
    },
];

const galeriaAlquiler = (id, propiedades_alquiler) => {
    const seccionAlquiler = document.querySelector(id);
    let GAContent = "";

//mostrar solo 3 en alquileres
    for (let i = 0; i < 6; i++) {
        if (i < propiedades_alquiler.length) {
            let propiedad_alquiler = propiedades_alquiler[i];

            GAContent += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img
                        src="${propiedad_alquiler.src}"
                        class="card-img-top"
                        alt="${propiedad_alquiler.nombre}"
                    />
                    <div class="card-body">
                        <h5 class="card-title">${propiedad_alquiler.nombre}</h5>
                        <p class="card-text">${propiedad_alquiler.descripción}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad_alquiler.ubicación}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad_alquiler.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad_alquiler.baños} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad_alquiler.costo}</p>
                        <p>${propiedad_alquiler.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar'}</p>
                        <p>${propiedad_alquiler.pets ? '<p class="text-success"><i class="fas fa-paw"> </i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas'}</p>
                    </div>
                </div>
            </div>`;
        }
    }
    seccionAlquiler.innerHTML = GAContent;
}

galeriaAlquiler("#alquiler", propiedades_alquiler);