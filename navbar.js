function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'home.html';
    return filename.replace('.html', '');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

function openCounselingModal() {
    const modal = document.getElementById('counseling-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeCounselingModal() {
    const modal = document.getElementById('counseling-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function renderNavbar() {
    const currentPage = getCurrentPage();
    
    const navItems = [
        { name: 'Home', href: 'home.html', id: 'home' },
        { name: 'MBBS Abroad', href: 'mbbsabroad.html', id: 'mbbs' },
        { name: 'Career Programs', href: 'career.html', id: 'career' }
    ];

    let navLinks = navItems.map(item => {
        const isActive = (currentPage === item.id) || 
            (item.id === 'home' && (currentPage === '' || currentPage === 'index'));
        const activeClass = isActive 
            ? 'text-blue-900 border-b-2 border-yellow-600' 
            : 'text-blue-900/70';
        return `<a class="font-serif text-lg tracking-tight ${activeClass} hover:text-yellow-600 transition-colors duration-300" href="${item.href}">${item.name}</a>`;
    }).join('');

    const mobileNavLinks = navItems.map(item => {
        const isActive = (currentPage === item.id) || 
            (item.id === 'home' && (currentPage === '' || currentPage === 'index'));
        const activeClass = isActive ? 'text-blue-900' : 'text-blue-900/70';
        return `<a class="font-serif text-lg ${activeClass}" href="${item.href}">${item.name}</a>`;
    }).join('');

    const navbarHTML = `
    <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm shadow-blue-900/5">
        <div class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
            <a href="home.html" class="text-2xl font-black font-serif text-blue-950">DreamEd</a>
            <div class="hidden md:flex items-center gap-8">
                ${navLinks}
            </div>
            <button class="bg-primary text-on-primary px-6 py-2.5 rounded-md font-medium text-sm tracking-wide active:scale-95 transition-all duration-150" style="box-shadow: 0 20px 40px -10px rgba(27, 27, 34, 0.08);" onclick="openCounselingModal()">
                Book Free Counseling
            </button>
            <button class="md:hidden text-primary" onclick="toggleMobileMenu()">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
            <div class="px-8 py-4 flex flex-col gap-4">
                ${mobileNavLinks}
                <button class="bg-primary text-on-primary px-6 py-2.5 rounded-md font-medium text-sm" onclick="openCounselingModal()">Book Free Counseling</button>
            </div>
        </div>
    </nav>
    `;

    // Add modal HTML
    const modalHTML = `
    <div id="counseling-modal" class="fixed inset-0 z-[200] hidden">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="closeCounselingModal()"></div>
        <div class="flex items-center justify-center min-h-screen p-4">
            <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                <button class="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-surface-container-high transition-colors" onclick="closeCounselingModal()">
                    <span class="material-symbols-outlined text-on-surface-variant">close</span>
                </button>
                <div class="p-8">
                    <div class="text-center mb-8">
                        <span class="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full mb-4">FREE CONSULTATION</span>
                        <h2 class="font-headline text-3xl text-primary">Book Your Free Counseling</h2>
                        <p class="text-on-surface-variant mt-2">Tell us about your goals and we'll help you achieve them.</p>
                    </div>
                    <form class="space-y-6">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label class="text-xs font-bold text-primary uppercase tracking-wider">First Name</label>
                                <input class="w-full bg-surface-container-low border-2 border-transparent focus:border-secondary rounded-lg px-4 py-3 transition-all" placeholder="John" type="text"/>
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs font-bold text-primary uppercase tracking-wider">Last Name</label>
                                <input class="w-full bg-surface-container-low border-2 border-transparent focus:border-secondary rounded-lg px-4 py-3 transition-all" placeholder="Doe" type="text"/>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-primary uppercase tracking-wider">Email</label>
                            <input class="w-full bg-surface-container-low border-2 border-transparent focus:border-secondary rounded-lg px-4 py-3 transition-all" placeholder="john@example.com" type="email"/>
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-primary uppercase tracking-wider">Phone</label>
                            <input class="w-full bg-surface-container-low border-2 border-transparent focus:border-secondary rounded-lg px-4 py-3 transition-all" placeholder="+1 234 567 890" type="tel"/>
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-primary uppercase tracking-wider">Interested In</label>
                            <select class="w-full bg-surface-container-low border-2 border-transparent focus:border-secondary rounded-lg px-4 py-3 transition-all">
                                <option>MBBS Abroad</option>
                                <option>Career Programs</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-primary uppercase tracking-wider">Message (Optional)</label>
                            <textarea class="w-full bg-surface-container-low border-2 border-transparent focus:border-secondary rounded-lg px-4 py-3 transition-all" placeholder="Tell us about your goals..." rows="3"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-container transition-all shadow-lg">
                            Submit Request
                        </button>
                        <p class="text-center text-xs text-on-surface-variant">We respect your privacy. Your information is safe with us.</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;

    document.getElementById('navbar-container').innerHTML = navbarHTML + modalHTML;
}

document.addEventListener('DOMContentLoaded', renderNavbar);