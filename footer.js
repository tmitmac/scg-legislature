class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e293b;
          color: white;
          padding: 2rem;
          text-align: center;
          margin-top: auto;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .footer-section h3 {
          font-weight: 600;
          margin-bottom: 1rem;
          color: #93c5fd;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        .footer-section a {
          color: #e5e7eb;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-section a:hover {
          color: #3b82f6;
        }
        .copyright {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #334155;
          color: #9ca3af;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Legislation</h3>
            <ul>
              <li><a href="/recent.html">Recent Laws</a></li>
              <li><a href="/archive.html">Legislative Archive</a></li>
              <li><a href="#">Constitution</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Government</h3>
            <ul>
              <li><a href="#">Executive Branch</a></li>
              <li><a href="#">Legislative Branch</a></li>
              <li><a href="#">Judicial Branch</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">How Laws Are Made</a></li>
              <li><a href="#">Legislative Calendar</a></li>
              <li><a href="#">Contact Officials</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="/about.html">About SquareDocs</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Square Country Government. All rights reserved.
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);