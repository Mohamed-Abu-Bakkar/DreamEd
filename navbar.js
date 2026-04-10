/**
 * DreamEd Navbar System
 * Dynamically loads navbar and modal across all pages
 */

(function() {
    'use strict';

    // Get current page from URL
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        // Handle both index.html and empty path (root)
        const page = filename.replace('.html', '') || 'index';
        
        // Map pages to their IDs for active state
        const pageMap = {
            'index': 'home',
            'mbbsabroad': 'mbbs',
            'career': 'career',
            'contact': 'contact'
        };
        
        return pageMap[page] || page;
    }

    // Toggle mobile menu
    window.toggleMobileMenu = function() {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
            menu.classList.toggle('hidden');
        }
    };

    // Open counseling modal
    window.openCounselingModal = function() {
        const modal = document.getElementById('counseling-modal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    };

    // Close counseling modal
    window.closeCounselingModal = function() {
        const modal = document.getElementById('counseling-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    };

    // Handle form submission
    window.handleCounselingSubmit = function(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        
        // Log form data to console
        const data = {
            firstName: formData.get('firstName') || form.querySelector('input[placeholder="John"]')?.value,
            lastName: formData.get('lastName') || form.querySelector('input[placeholder="Doe"]')?.value,
            email: formData.get('email') || form.querySelector('input[type="email"]')?.value,
            phone: formData.get('phone') || form.querySelector('input[type="tel"]')?.value,
            interestedIn: formData.get('interestedIn') || form.querySelector('select')?.value,
            message: formData.get('message') || form.querySelector('textarea')?.value,
            submittedAt: new Date().toISOString()
        };
        
        console.log('=== Form Submission ===', data);
        
        // Show success message
        const formContainer = form.parentElement;
        formContainer.innerHTML = `
            <div class="text-center py-8">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
                </div>
                <h3 class="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                <p class="text-on-surface-variant mb-4">Your consultation request has been submitted successfully.</p>
                <p class="text-sm text-on-surface-variant">Our team will contact you within 24 hours.</p>
                <button type="button" onclick="closeCounselingModal()" class="mt-6 bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-container transition-colors">
                    Close
                </button>
            </div>
        `;
    };

    // Render navbar
    function renderNavbar() {
        const currentPage = getCurrentPage();
        
        // Add page transition styles
        const transitionStyles = `
            <style>
                /* Page load animation */
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                /* Animated underline for nav */
                @keyframes widthGrow {
                    from { width: 0; }
                    to { width: 100%; }
                }
                .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
                .animate-slide-left { animation: slideInLeft 0.5s ease-out forwards; }
                .animate-slide-right { animation: slideInRight 0.5s ease-out forwards; }
                .animate-scale-in { animation: scaleIn 0.4s ease-out forwards; }
                .animate-width { animation: widthGrow 0.3s ease-out forwards; }
                
                /* Stagger children animations */
                .stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
                .stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
                .stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
                .stagger-children > *:nth-child(4) { animation-delay: 0.4s; }
                .stagger-children > *:nth-child(5) { animation-delay: 0.5s; }
                
                /* Navbar animation on load */
                #navbar-container nav { animation: fadeInUp 0.4s ease-out; }
                
                /* Smooth scroll */
                html { scroll-behavior: smooth; }
                
                /* Button hover animations */
                .btn-animate:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
                .btn-animate:active { transform: translateY(0); }
                
                /* Smooth image loading - no blink */
                img { transition: opacity 0.3s ease-out; }
                img.loaded { opacity: 1; }
                
                /* Image hover zoom effect */
                .img-zoom-container { overflow: hidden; }
                .img-zoom-container img { transition: transform 0.5s ease; }
                .img-zoom-container img:hover { transform: scale(1.05); }
                
                /* Section reveal animation */
                .reveal { opacity: 0; transform: translateY(30px); transition: all 0.6s ease-out; }
                .reveal.visible { opacity: 1; transform: translateY(0); }
                
                /* Floating animation */
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float { animation: float 3s ease-in-out infinite; }
            </style>
        `;
        
        // Inject styles
        document.head.insertAdjacentHTML('beforeend', transitionStyles);
        
        // Nav items - home links to index.html
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        
        // Nav items - home links to index.html
        const navItems = [
            { name: 'Home', href: 'index.html', id: 'home' },
            { name: 'MBBS Abroad', href: 'mbbsabroad.html', id: 'mbbs' },
            { name: 'Career Programs', href: 'career.html', id: 'career' }
        ];

        // Generate desktop nav links with animation
        let navLinks = navItems.map(item => {
            const isActive = currentPage === item.id;
            const activeClass = isActive 
                ? 'text-blue-900 border-b-2 border-yellow-600' 
                : 'text-blue-900/70 hover:text-yellow-600 hover:-translate-y-0.5';
            return `<a class="font-serif text-lg tracking-tight ${activeClass} transition-all duration-300 relative btn-animate" href="${item.href}">
                ${item.name}
                ${isActive ? '<span class="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-600"></span>' : ''}
            </a>`;
        }).join('');

        // Generate mobile nav links with animation
        const mobileNavLinks = navItems.map(item => {
            const isActive = currentPage === item.id;
            const activeClass = isActive ? 'text-blue-900 font-semibold bg-yellow-50' : 'text-blue-900/70';
            return `<a class="font-serif text-lg ${activeClass} px-3 py-2 rounded-lg transition-all duration-200 hover:bg-yellow-50 hover:translate-x-1" href="${item.href}">${item.name}</a>`;
        }).join('');

        const navbarHTML = `
        <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm shadow-blue-900/5">
            <div class="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
                <a href="index.html" class="text-2xl font-black font-serif text-blue-950">DreamEd</a>
                <div class="hidden md:flex items-center gap-8">
                    ${navLinks}
                </div>
                <button class="bg-primary text-white px-4 md:px-6 py-2 rounded-md font-medium text-sm tracking-wide active:scale-95 transition-all duration-150" style="box-shadow: 0 20px 40px -10px rgba(27, 27, 34, 0.08);" onclick="openCounselingModal()">
                    Book Free Counseling
                </button>
                <button class="md:hidden text-primary p-2" onclick="toggleMobileMenu()" aria-label="Toggle menu">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>
            <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
                <div class="px-4 py-4 flex flex-col gap-4">
                    ${mobileNavLinks}
                    <button class="bg-primary text-white px-6 py-2.5 rounded-md font-medium text-sm" onclick="openCounselingModal()">Book Free Counseling</button>
                </div>
            </div>
        </nav>
        `;

        // Modal HTML
        const modalHTML = `
        <div id="counseling-modal" class="fixed inset-0 z-[200] hidden" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="closeCounselingModal()"></div>
            <div class="flex items-center justify-center min-h-screen p-4">
                <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                    <button class="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors" onclick="closeCounselingModal()" aria-label="Close modal">
                        <span class="material-symbols-outlined text-gray-600">close</span>
                    </button>
                    <div class="p-8">
                        <div class="text-center mb-8">
                            <span class="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full mb-4">FREE CONSULTATION</span>
                            <h2 id="modal-title" class="text-3xl font-bold text-blue-950">Book Your Free Counseling</h2>
                            <p class="text-gray-600 mt-2">Tell us about your goals and we'll help you achieve them.</p>
                        </div>
                        <form onsubmit="handleCounselingSubmit(event)" class="space-y-5">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-xs font-bold text-blue-950 uppercase tracking-wider">First Name *</label>
                                    <input required name="firstName" class="w-full bg-gray-50 border-2 border-transparent focus:border-yellow-500 rounded-lg px-4 py-3 transition-all" placeholder="John" type="text"/>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-xs font-bold text-blue-950 uppercase tracking-wider">Last Name *</label>
                                    <input required name="lastName" class="w-full bg-gray-50 border-2 border-transparent focus:border-yellow-500 rounded-lg px-4 py-3 transition-all" placeholder="Doe" type="text"/>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs font-bold text-blue-950 uppercase tracking-wider">Email *</label>
                                <input required name="email" class="w-full bg-gray-50 border-2 border-transparent focus:border-yellow-500 rounded-lg px-4 py-3 transition-all" placeholder="john@example.com" type="email"/>
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs font-bold text-blue-950 uppercase tracking-wider">Phone *</label>
                                <input required name="phone" class="w-full bg-gray-50 border-2 border-transparent focus:border-yellow-500 rounded-lg px-4 py-3 transition-all" placeholder="+1 234 567 890" type="tel"/>
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs font-bold text-blue-950 uppercase tracking-wider">Interested In *</label>
                                <select required name="interestedIn" class="w-full bg-gray-50 border-2 border-transparent focus:border-yellow-500 rounded-lg px-4 py-3 transition-all">
                                    <option value="">Select a program</option>
                                    <option value="MBBS Abroad">MBBS Abroad</option>
                                    <option value="Career Programs">Career Programs</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs font-bold text-blue-950 uppercase tracking-wider">Message (Optional)</label>
                                <textarea name="message" class="w-full bg-gray-50 border-2 border-transparent focus:border-yellow-500 rounded-lg px-4 py-3 transition-all" placeholder="Tell us about your goals..." rows="3"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-blue-950 text-white py-4 rounded-xl font-bold hover:bg-blue-900 transition-all shadow-lg">
                                Submit Request
                            </button>
                            <p class="text-center text-xs text-gray-500">We respect your privacy. Your information is safe with us.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Inject navbar and modal
        const container = document.getElementById('navbar-container');
        if (container) {
            container.innerHTML = navbarHTML + modalHTML;
        }
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderNavbar);
    } else {
        renderNavbar();
    }
})();