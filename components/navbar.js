class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        nav {
          background: #1e3a8a;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
          position: relative;
        }

        .logo {
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
        }

        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0;
        }

        a:hover {
          opacity: 0.85;
        }

        /* ICONS */
        .icon {
          width: 1rem;
          height: 1rem;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          ul {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #1e3a8a;
            flex-direction: column;
            gap: 0;
            padding: 0.5rem 0;
            display: none;
          }

          ul.open {
            display: flex;
          }

          li a {
            padding: 0.75rem 1.25rem;
          }

          li a:active {
            background: rgba(255,255,255,0.08);
          }
        }
      </style>

      <nav>
        <a href="index.html" class="logo">
          <i data-feather="book-open"></i>
          Square Country Legislation
        </a>

        <button class="menu-toggle" aria-label="Toggle menu">
          <i data-feather="menu"></i>
        </button>

        <ul>
          <li><a href="index.html"><i data-feather="home" class="icon"></i>Home</a></li>
          <li><a href="recent.html"><i data-feather="file-text" class="icon"></i>Recent</a></li>
          <li><a href="archive.html"><i data-feather="archive" class="icon"></i>Archive</a></li>
          <li><a href="about.html"><i data-feather="info" class="icon"></i>About</a></li>
        </ul>
      </nav>
    `;

    const toggle = this.shadowRoot.querySelector('.menu-toggle');
    const menu = this.shadowRoot.querySelector('ul');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    // Render feather icons inside shadow DOM
    if (window.feather) {
      feather.replace({ root: this.shadowRoot });
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);
