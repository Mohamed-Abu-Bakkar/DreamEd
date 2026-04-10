/**
 * DreamEd Footer System
 * Dynamically loads footer with social links, navigation, and floating buttons
 */

(function() {
    'use strict';

    // Expose scroll to top function globally
    window.scrollToTop = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle newsletter subscription
    window.handleNewsletterSubmit = function(event) {
        event.preventDefault();
        const input = event.target.querySelector('input[type="email"]');
        const email = input?.value;
        
        if (email) {
            console.log('Newsletter subscription:', { email, timestamp: new Date().toISOString() });
            
            // Show success
            const container = event.target.parentElement;
            container.innerHTML = `
                <div class="text-center py-4">
                    <span class="material-symbols-outlined text-yellow-500 text-3xl mb-2">check_circle</span>
                    <p class="text-white text-sm font-medium">Thanks for subscribing!</p>
                    <p class="text-slate-400 text-xs">You'll receive updates in your inbox.</p>
                </div>
            `;
        }
    };

    function renderFooter() {
        const footerHTML = `
        <footer class="bg-blue-950 w-full pt-16 pb-8 text-white relative overflow-hidden">
            <!-- Decorative elements -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-blue-800/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-[80px]"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 px-4 md:px-8 max-w-7xl mx-auto mb-16 relative z-10">
                <!-- Brand & Social -->
                <div class="space-y-6">
                    <div class="text-2xl font-bold font-serif text-yellow-500">DreamEd</div>
                    <p class="text-slate-300 text-sm leading-relaxed">
                        A premier educational consultancy dedicated to architecting global careers for the next generation of leaders.
                    </p>
                    <div class="flex gap-3">
                        <a class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-blue-950 transition-all duration-300" href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-blue-950 transition-all duration-300" href="https://instagram.com" target="_blank" aria-label="Instagram">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-blue-950 transition-all duration-300" href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-blue-950 transition-all duration-300" href="https://twitter.com" target="_blank" aria-label="Twitter">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </a>
                    </div>
                    <div class="pt-4 border-t border-white/10">
                        <div class="flex items-center gap-3 text-slate-400 text-sm">
                            <span class="material-symbols-outlined text-yellow-500 text-lg">verified</span>
                            <span>ISO 9001:2015 Certified</span>
                        </div>
                    </div>
                </div>
                
                <!-- Education Links -->
                <div>
                    <h5 class="font-bold mb-6 text-yellow-500 uppercase text-xs tracking-widest">Education</h5>
                    <ul class="space-y-3">
                        <li><a class="text-slate-300 hover:text-yellow-400 hover:translate-x-1 transition-all text-sm inline-flex items-center" href="mbbsabroad.html">
                            <span class="material-symbols-outlined text-xs mr-2">chevron_right</span> MBBS Abroad
                        </a></li>
                        <li><a class="text-slate-300 hover:text-yellow-400 hover:translate-x-1 transition-all text-sm inline-flex items-center" href="career.html">
                            <span class="material-symbols-outlined text-xs mr-2">chevron_right</span> Career Programs
                        </a></li>
                        <li><a class="text-slate-300 hover:text-yellow-400 hover:translate-x-1 transition-all text-sm inline-flex items-center" href="#">
                            <span class="material-symbols-outlined text-xs mr-2">chevron_right</span> Study in Georgia
                        </a></li>
                        <li><a class="text-slate-300 hover:text-yellow-400 hover:translate-x-1 transition-all text-sm inline-flex items-center" href="#">
                            <span class="material-symbols-outlined text-xs mr-2">chevron_right</span> Study in UK
                        </a></li>
                    </ul>
                </div>
                
                <!-- Company Links -->
                <div>
                    <h5 class="font-bold mb-6 text-yellow-500 uppercase text-xs tracking-widest">Company</h5>
                    <ul class="space-y-3">
                        <li><a class="text-slate-300 hover:text-yellow-400 hover:translate-x-1 transition-all text-sm inline-flex items-center" href="#">
                            <span class="material-symbols-outlined text-xs mr-2">chevron_right</span> About Us
                        </a></li>
                        <li><a class="text-slate-300 hover:text-yellow-400 hover:translate-x-1 transition-all text-sm inline-flex items-center" href="contact.html">
                            <span class="material-symbols-outlined text-xs mr-2">chevron_right</span> Contact Us
                        </a></li>
                        <li><a class="text-slate-300 hover:text-yellow-400 hover:translate-x-1 transition-all text-sm inline-flex items-center" href="#">
                            <span class="material-symbols-outlined text-xs mr-2">chevron_right</span> Success Stories
                        </a></li>
                        <li><a class="text-slate-300 hover:text-yellow-400 hover:translate-x-1 transition-all text-sm inline-flex items-center" href="#">
                            <span class="material-symbols-outlined text-xs mr-2">chevron_right</span> Careers
                        </a></li>
                    </ul>
                </div>
                
                <!-- Newsletter -->
                <div class="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h5 class="font-bold mb-3 text-white text-sm">Newsletter</h5>
                    <p class="text-xs text-slate-400 mb-4">Get the latest admission updates directly in your inbox.</p>
                    <form onsubmit="handleNewsletterSubmit(event)" class="flex flex-col gap-3">
                        <input required class="bg-white/10 border border-white/10 rounded-lg text-sm py-3 px-4 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder:text-slate-500 transition-all" placeholder="Your Email" type="email"/>
                        <button type="submit" class="bg-yellow-500 text-blue-950 font-bold py-3 rounded-lg text-sm hover:bg-yellow-400 hover:shadow-lg transition-all">Subscribe</button>
                    </form>
                    <p class="text-[10px] text-slate-500 mt-3">By subscribing, you agree to our Privacy Policy.</p>
                </div>
            </div>
            
            <!-- Bottom Bar -->
            <div class="border-t border-white/10 pt-8 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-slate-400 text-sm">© 2024 DreamEd. All rights reserved.</p>
                <div class="flex gap-6 text-xs text-slate-500">
                    <a href="#" class="hover:text-yellow-400 transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-yellow-400 transition-colors">Terms of Service</a>
                    <a href="#" class="hover:text-yellow-400 transition-colors">Cookie Policy</a>
                </div>
            </div>
        </footer>
        
        <!-- Floating Contact Buttons -->
        <div class="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
            <!-- Scroll to Top -->
            <button id="scroll-to-top" class="w-12 h-12 bg-white text-blue-950 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 hover:text-white transition-all opacity-0 invisible" onclick="scrollToTop()" aria-label="Scroll to top">
                <span class="material-symbols-outlined">keyboard_arrow_up</span>
            </button>
            <!-- WhatsApp -->
            <a class="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-3xl transition-all" href="https://wa.me/1234567890" target="_blank" title="Chat on WhatsApp" aria-label="WhatsApp">
                <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.522-2.961-2.638-.087-.117-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.253-.041.397.303.145.346.491 1.197.535 1.284.044.087.073.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"></path>
                </svg>
            </a>
            <!-- Call -->
            <a class="w-14 h-14 bg-blue-950 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-3xl transition-all" href="tel:+1234567890" title="Call Now" aria-label="Call">
                <span class="material-symbols-outlined text-2xl">call</span>
            </a>
        </div>
        
        <!-- Scroll Event Listener -->
        <script>
            (function() {
                window.addEventListener('scroll', function() {
                    var scrollBtn = document.getElementById('scroll-to-top');
                    if (scrollBtn) {
                        if (window.scrollY > 300) {
                            scrollBtn.classList.remove('opacity-0', 'invisible');
                            scrollBtn.classList.add('opacity-100', 'visible');
                        } else {
                            scrollBtn.classList.add('opacity-0', 'invisible');
                            scrollBtn.classList.remove('opacity-100', 'visible');
                        }
                    }
                });
            })();
        </script>
        `;

        const container = document.getElementById('footer-container');
        if (container) {
            container.innerHTML = footerHTML;
        }
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderFooter);
    } else {
        renderFooter();
    }
})();