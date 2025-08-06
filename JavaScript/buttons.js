// Modern JavaScript for Transformative Actions - Buttons //

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Filter functionality
    const filterButtons = {
        '.filter': () => {
            document.documentElement.style.setProperty('filter', 'none');
            document.documentElement.style.setProperty('background', 'linear-gradient(90deg, #4f3c59 0%, #e7e7e7e7 50%, #4f3c59 100%)');
        },
        '.filter2': () => {
            document.documentElement.style.setProperty('filter', 'sepia(0.8)');
            document.documentElement.style.setProperty('background', 'linear-gradient(90deg, #3e3d26 0%, #f0e68c 50%, #3e3d26 100%)');
        },
        '.filter3': () => {
            document.documentElement.style.setProperty('filter', 'grayscale(0.8)');
            document.documentElement.style.setProperty('background', 'linear-gradient(90deg, #404040 0%, #d3d3d3 50%, #404040 100%)');
        }
    };

    // Language functionality
    const languageButtons = {
        '.eng': () => {
            showAlert("You're already using this language.");
        },
        '.morelang': () => {
            showAlert("To view this page in other languages, simply activate the Google Translate extension in your browser.");
        }
    };

    // Theme functionality
    const themeButtons = {
        '.theme': () => {
            showAlert("You're already using this theme.");
        }
    };

    // Modern alert function with better styling
    function showAlert(message) {
        // Create a modern alert overlay
        const alertOverlay = document.createElement('div');
        alertOverlay.className = 'modern-alert-overlay';
        alertOverlay.innerHTML = `
            <div class="modern-alert">
                <p>${message}</p>
                <button class="alert-close-btn">OK</button>
            </div>
        `;
        
        // Add CSS for the alert if not already present
        if (!document.querySelector('#modern-alert-styles')) {
            const alertStyles = document.createElement('style');
            alertStyles.id = 'modern-alert-styles';
            alertStyles.textContent = `
                .modern-alert-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                }
                
                .modern-alert {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                    max-width: 90%;
                    width: 400px;
                    text-align: center;
                    animation: slideIn 0.3s ease;
                }
                
                .modern-alert p {
                    margin: 0 0 1.5rem 0;
                    font-size: 1.1rem;
                    line-height: 1.5;
                    color: #333;
                }
                
                .alert-close-btn {
                    background: purple;
                    color: white;
                    border: none;
                    padding: 0.75rem 2rem;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .alert-close-btn:hover {
                    background: #6a0066;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(128, 0, 128, 0.3);
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideIn {
                    from { 
                        opacity: 0;
                        transform: scale(0.8) translateY(-50px);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
            `;
            document.head.appendChild(alertStyles);
        }
        
        document.body.appendChild(alertOverlay);
        
        // Close alert functionality
        const closeBtn = alertOverlay.querySelector('.alert-close-btn');
        const closeAlert = () => {
            alertOverlay.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                if (alertOverlay.parentNode) {
                    alertOverlay.parentNode.removeChild(alertOverlay);
                }
            }, 300);
        };
        
        closeBtn.addEventListener('click', closeAlert);
        alertOverlay.addEventListener('click', (e) => {
            if (e.target === alertOverlay) closeAlert();
        });
        
        // Close with Escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeAlert();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }

    // Add event listeners for all buttons
    function addEventListeners(buttonMap) {
        Object.entries(buttonMap).forEach(([selector, handler]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.addEventListener('click', handler);
            }
        });
    }

    // Initialize all event listeners
    addEventListeners(filterButtons);
    addEventListeners(languageButtons);
    addEventListeners(themeButtons);

    // Smooth scrolling for topic badges to their sections
    const topicBadges = document.querySelectorAll('.topic-badge');
    topicBadges.forEach(badge => {
        badge.addEventListener('click', () => {
            const topicName = badge.textContent.toLowerCase();
            let sectionClass;
            
            switch(topicName) {
                case 'sustainability':
                    sectionClass = '.sustainability';
                    break;
                case 'education':
                    sectionClass = '.education';
                    break;
                case 'collectivity':
                    sectionClass = '.collectivity';
                    break;
                case 'technology':
                    sectionClass = '.technology';
                    break;
            }
            
            if (sectionClass) {
                const section = document.querySelector(sectionClass);
                if (section) {
                    section.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Enhanced dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');
        
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.dropdown-content').style.display = 'none';
                    otherDropdown.querySelector('.dropbtn').setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current dropdown
            const isOpen = content.style.display === 'block';
            content.style.display = isOpen ? 'none' : 'block';
            button.setAttribute('aria-expanded', !isOpen);
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            content.style.display = 'none';
            button.setAttribute('aria-expanded', 'false');
        });
        
        // Keyboard navigation
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger loading
                img.style.opacity = '1';
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        imageObserver.observe(img);
    });

    // Add a scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Back to top');
    
    // Add styles for scroll-to-top button
    const scrollBtnStyles = document.createElement('style');
    scrollBtnStyles.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: purple;
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(128, 0, 128, 0.3);
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            background: #6a0066;
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(128, 0, 128, 0.4);
        }
    `;
    document.head.appendChild(scrollBtnStyles);
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll-to-top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});