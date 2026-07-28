
    // Lógica para el menú móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Nota: la lógica del modal de donación, el modal de WhatsApp y las pestañas
    // vive en el <script> propio de cada página (index.html, involucrate.html),
    // porque sus IDs/clases no son uniformes entre páginas. Aquí solo va lo
    // verdaderamente común a todo el sitio: menú móvil y carrusel.

    // Lógica para el Carrusel de Perspectiva (CORREGIDA Y MEJORADA CON LOOP)
    const carouselContainer = document.querySelector('.perspective-carousel-container');
    if (carouselContainer) {
        const items = Array.from(carouselContainer.querySelectorAll('.carousel-item'));
        const dotsContainer = document.getElementById('carousel-dots');
        const prevButton = document.getElementById('carousel-prev');
        const nextButton = document.getElementById('carousel-next');

        if (items.length > 0) {
            let currentIndex = 0;
            
            if(dotsContainer) {
                dotsContainer.innerHTML = ''; 
                items.forEach((_, index) => {
                    const dot = document.createElement('button');
                    dot.classList.add('carousel-dot');
                    dot.setAttribute('aria-label', `Ir a la noticia ${index + 1}`);
                    dot.addEventListener('click', () => {
                        currentIndex = index;
                        updateCarousel();
                    });
                    dotsContainer.appendChild(dot);
                });
            }

            const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];

            function updateCarousel() {
                items.forEach((item, index) => {
                    item.classList.remove('active', 'prev', 'next', 'hidden-prev', 'hidden-next');
                    
                    const prevIndex = (currentIndex - 1 + items.length) % items.length;
                    const nextIndex = (currentIndex + 1) % items.length;
                    
                    if (index === currentIndex) {
                        item.classList.add('active');
                    } else if (index === prevIndex) {
                        item.classList.add('prev');
                    } else if (index === nextIndex) {
                        item.classList.add('next');
                    } else {
                        // Lógica para ocultar las demás tarjetas
                        item.classList.add('hidden-next');
                    }
                });

                if(dots.length > 0) {
                    dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
                }
            }

            if(nextButton) {
                nextButton.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % items.length; // Lógica de loop
                    updateCarousel();
                });
            }

            if(prevButton) {
                prevButton.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + items.length) % items.length; // Lógica de loop
                    updateCarousel();
                });
            }
            
            updateCarousel(); // Inicia el carrusel
            
        }
    }





