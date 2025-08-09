// Funcionalidades básicas da landing page
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
    
    // Header com scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = 'flex';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
        
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scroll para links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulário de contato (se existir)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar a lógica para enviar o formulário
            alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
        });
    }
    
    // Lazy loading para imagens (opcional)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Preloader (se existir)
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        });
    }
    
    // Contador de números (se existir)
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const suffix = counter.getAttribute('data-suffix') || '';
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.floor(current) + suffix;
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + suffix;
                            counter.classList.add('animate');
                        }
                    };
                    
                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        });
        
        counters.forEach(counter => counterObserver.observe(counter));
    }
    
    // Tooltips (se existir)
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.position = 'absolute';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.zIndex = '10000';
            
            this.tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.tooltip) {
                this.tooltip.remove();
                this.tooltip = null;
            }
        });
    });
    
    // Modal (se existir)
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.querySelector(modalId);
            if (modal) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
        
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Accordion (se existir)
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        
        if (header && content) {
            header.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Fechar todos os outros itens
                accordionItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherContent = otherItem.querySelector('.accordion-content');
                    if (otherContent) {
                        otherContent.style.maxHeight = '0';
                    }
                });
                
                // Abrir/fechar o item atual
                if (!isActive) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        }
    });
    
    // Tabs (se existir)
    const tabTriggers = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remover classe ativa de todos os triggers
            tabTriggers.forEach(t => t.classList.remove('active'));
            // Adicionar classe ativa ao trigger atual
            this.classList.add('active');
            
            // Esconder todos os conteúdos
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Mostrar o conteúdo da tab selecionada
            const targetContent = document.querySelector(tabId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });
    
    // Galeria de imagens (se existir)
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'gallery-modal';
            modal.innerHTML = `
                <div class="gallery-modal-content">
                    <img src="${this.src}" alt="${this.alt}">
                    <button class="gallery-modal-close">&times;</button>
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            modal.addEventListener('click', function(e) {
                if (e.target === this || e.target.classList.contains('gallery-modal-close')) {
                    this.remove();
                    document.body.style.overflow = 'auto';
                }
            });
        });
    });
    
    // Validação de formulários
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
        
        form.addEventListener('submit', function(e) {
            let isValid = true;
            
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Validações básicas
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Email inválido';
            }
        }
        
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Telefone inválido';
            }
        }
        
        if (field.hasAttribute('minlength')) {
            const minLength = parseInt(field.getAttribute('minlength'));
            if (value.length < minLength) {
                isValid = false;
                errorMessage = `Mínimo de ${minLength} caracteres`;
            }
        }
        
        // Aplicar estado de erro
        if (!isValid) {
            field.classList.add('error');
            showFieldError(field, errorMessage);
        } else {
            field.classList.remove('error');
            hideFieldError(field);
        }
        
        return isValid;
    }
    
    function showFieldError(field, message) {
        let errorElement = field.parentNode.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }
    
    function hideFieldError(field) {
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    // Back to top com scroll suave
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Filtros de conteúdo (se existir)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Atualizar botões ativos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar itens
            filterItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Search functionality (se existir)
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            
            // Aqui você pode implementar a lógica de busca
            // Por enquanto, apenas mostra/esconde os resultados
            searchResults.style.display = 'block';
        });
        
        // Fechar resultados ao clicar fora
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
    
    // Cookie consent (se existir)
    const cookieBanner = document.querySelector('.cookie-banner');
    if (cookieBanner) {
        const acceptBtn = cookieBanner.querySelector('.cookie-accept');
        const declineBtn = cookieBanner.querySelector('.cookie-decline');
        
        if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
                localStorage.setItem('cookiesAccepted', 'true');
                cookieBanner.style.display = 'none';
            });
        }
        
        if (declineBtn) {
            declineBtn.addEventListener('click', function() {
                localStorage.setItem('cookiesAccepted', 'false');
                cookieBanner.style.display = 'none';
            });
        }
        
        // Verificar se já foi aceito
        if (localStorage.getItem('cookiesAccepted') === 'true') {
            cookieBanner.style.display = 'none';
        }
    }
    
    // Newsletter signup (se existir)
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                // Aqui você pode implementar a lógica de inscrição
                alert('Inscrição realizada com sucesso!');
                this.reset();
            }
        });
    }
    
    // Social media sharing (se existir)
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            const url = window.location.href;
            const title = document.title;
            
            let shareUrl = '';
            
            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
    
    // Print functionality (se existir)
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
    
    // Copy to clipboard (se existir)
    const copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy') || this.textContent;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showCopySuccess(this);
                });
            } else {
                // Fallback para navegadores mais antigos
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showCopySuccess(this);
            }
        });
    });
    
    function showCopySuccess(button) {
        const originalText = button.textContent;
        button.textContent = 'Copiado!';
        button.style.backgroundColor = '#51cf66';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC para fechar modais
        if (e.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal[style*="display: flex"]');
            openModals.forEach(modal => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
        
        // Enter para ativar botões focados
        if (e.key === 'Enter') {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.classList.contains('btn')) {
                focusedElement.click();
            }
        }
    });
    
    // Performance optimization: Debounce para eventos de scroll
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Aplicar debounce ao scroll
    const debouncedScrollHandler = debounce(function() {
        // Aqui você pode adicionar lógica que precisa ser executada no scroll
        // mas com performance otimizada
    }, 100);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // Resize handler otimizado
    const debouncedResizeHandler = debounce(function() {
        // Aqui você pode adicionar lógica que precisa ser executada no resize
        // mas com performance otimizada
    }, 250);
    
    window.addEventListener('resize', debouncedResizeHandler);
    
    // Cleanup function para remover event listeners quando necessário
    function cleanup() {
        // Remover event listeners específicos se necessário
        window.removeEventListener('scroll', debouncedScrollHandler);
        window.removeEventListener('resize', debouncedResizeHandler);
    }
    
    // Expor cleanup para uso externo se necessário
    window.cleanupEventListeners = cleanup;
});
