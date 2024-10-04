<script>
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://x.com/_XolaniMthembu', ariaLabel: 'Contact me on Twitter' },
    { name: 'Linkedin', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/', ariaLabel: 'Contact me on my LinkedIn page' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/_xolanimthembu', ariaLabel: 'Check out my Instagram' }
  ];

  // const navItems = [
  //   { name: 'Home', url: '/' },
  //   { name: 'About', url: 'about' },
  //   { name: 'Projects', url: 'ptojects' },
  // ];
</script>

<footer role="contentinfo">
  <div class="footer-content">
    <div class="footer-section">
      <p>
        <span>&copy; {currentYear} Xolani Mthembu.</span>
        <span>All rights reserved.</span>
      </p>
    </div>
    
    <!-- <div class="footer-section">
      <nav aria-label="Footer Navigation">
        <ul>
          {#each navItems as item}
            <li><a href={item.url}>{item.name}</a></li>
          {/each}
        </ul>
      </nav>
    </div> -->
    
    <div class="footer-section">
      <h2 class="visually-hidden">Social Media Links</h2>
      <ul class="social-links" aria-label="Social Media Links">
        {#each socialLinks as link}
          <li>
            <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
              <span class="visually-hidden">{link.name}</span>
              <i class={link.icon} aria-hidden="true"></i>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</footer>

<style>
  footer {
    color:var(--text);
    padding: 2rem 1rem;
    border-top: 1px dotted var(--text) ;
    margin-top: 2rem;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-section {
    margin-bottom: 1rem;
    text-align: center;
  }

  nav ul,
  .social-links {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  nav ul li {
    display: inline;
    margin: 0 0.5rem;
  }

  .social-links li {
    display: inline-block;
    margin: 0 0.5rem;
  }

  a {
    color: var(--text);
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  .social-links a {
    font-size: 1.5rem;
  }
  
  .social-links li{
    transition: transform .3s;

  }

  .social-links li:hover{
    transform: translateY(-3px);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (min-width: 768px) {
    .footer-content {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .footer-section {
      margin-bottom: 0;
      text-align: left;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
    }
  }
</style>