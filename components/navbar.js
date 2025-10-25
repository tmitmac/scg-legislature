class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: #1e3a8a;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .logo-container {
          display: flex;
          align-items: center;
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          margin-right: 0.5rem;
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
          transition: opacity 0.2s;
          display: flex;
          align-items: center;
        }
        a:hover {
          opacity: 0.8;
        }
        .nav-icon {
          margin-right: 0.5rem;
          width: 1rem;
          height: 1rem;
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            padding: 1rem;
          }
          ul {
            margin-top: 1rem;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      </style>
      <nav>
        <div class="logo-container">
          <a href="index.html" class="logo">
            <i data-feather="book-open" class="logo-icon"></i>
            Square Country Legislation
          </a>
        </div>
        <ul>
          <li><a href="index.html"><i data-feather="home" class="nav-icon"></i> Home</a></li>
          <li><a href="recent.html"><i data-feather="file-text" class="nav-icon"></i> Recent</a></li>
          <li><a href="archive.html"><i data-feather="archive" class="nav-icon"></i> Archive</a></li>
          <li><a href="about.html"><i data-feather="info" class="nav-icon"></i> About</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
