/**
 * Hamdi Rebhi - Personal Portfolio
 * Vanilla JavaScript: Smooth Scrolling, Clipboard Manager, Theme Toggle & ScrollSpy
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Smooth Scrolling for Navigation Links with Header Offset
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const header = document.getElementById('site-header');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');

      if (targetId === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 72;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight + 5;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 2. Active Section Scrollspy
  const sections = document.querySelectorAll('section[id]');
  const navMenuItems = document.querySelectorAll('.nav-link');

  const updateActiveNavLink = () => {
    const scrollY = window.pageYOffset;
    const headerHeight = header ? header.offsetHeight : 72;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - headerHeight - 60;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navMenuItems.forEach((item) => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // 3. Theme Toggle (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  const applyTheme = (theme) => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  };

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // 4. Clipboard Manager: Copy Email with Toast Feedback & Button State
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  };

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = 'hamdi.rebhi@gewinner.com';
      try {
        await navigator.clipboard.writeText(email);
        
        // Update button text temporarily
        const btnText = copyBtn.querySelector('.copy-btn-text') || copyBtn;
        const originalText = btnText.textContent;
        btnText.textContent = 'Copied!';
        copyBtn.classList.add('copied');

        showToast('Email copied to clipboard: ' + email);

        setTimeout(() => {
          btnText.textContent = originalText;
          copyBtn.classList.remove('copied');
        }, 2200);

      } catch (err) {
        // Fallback for older browser environments
        const tempInput = document.createElement('textarea');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('Email copied to clipboard: ' + email);
      }
    });
  }

});
