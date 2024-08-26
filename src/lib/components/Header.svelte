<script>
  /**
	 * @type {boolean}
	 */
  let isMenuOpen;

  // /Burger menu
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    const mobileMenu = document.querySelector('.mobile-menu');
    if (isMenuOpen) {
      // @ts-ignore
      mobileMenu.classList.add('open');
    } else {
      // @ts-ignore
      mobileMenu.classList.remove('open');
    }
}


  // Nav-links
  let navItems = [
    { href: "#about", text: "ABOUT" },
    { href: "#projects", text: "PROJECTS" },
    { href: "#contact", text: "CONTACT" }
  ];
</script>

<header>
  <nav aria-label="Main navigation">
    <div class="logo">
      <a href="/">
        <h1>XOLANI MTHEMBU</h1>
      </a>
    </div>

    <!-- Desktop menu -->

    <ul class="nav-menu desktop-menu">
      {#each navItems as item}
        <li><a href={item.href}>{item.text}</a></li>
      {/each}
    </ul>

    <div class="header-icons">
      <a href="mailto:your.email@businesswithxolani.com" aria-label="Email me">
        <i class="fa-solid fa-envelope" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
      </a>
    </div>
    
    <!-- Mobile menu -->
    <div class="mobile-menu-container">
      <button class="menu-toggle" on:click={toggleMenu} aria-label="Menu">
        <i class={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </button>
      <ul class="mobile-menu" class:open={isMenuOpen}>
        {#each navItems as item}    
          <li class="mobile-link"><a href={item.href}>{item.text}</a></li>
        {/each}
      </ul>
    </div>
  </nav>
</header>

<style>
  header{
    width: 80%;
    height: 13vh;
    padding: 1rem 2rem;
    border-radius: 20px;
    position: fixed;
    margin-top: 2rem;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
  }

  header, .mobile-menu{
    background-color: rgba(29, 29, 29, .8);
    backdrop-filter: blur(10px);
    color: #E7E9ED;
  }

  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    position: relative;
  }

  .logo{
    font-size: .3rem;
    order: 2;
  }

  .header-icons{
    order: 3;
  }

  .header-icons i{
    font-size: .7rem;
    padding-left: .1rem;
  }

  a{
    color: #D9D9D9;
  }

  li a{
    transition: color .3s;
  }

  li a:hover{
    color: var(--accent);
  }

  .mobile-menu {
    display: none;
    list-style: none;
    padding: 0;
  }

  .mobile-menu.open,  .mobile-menu-container {
    display: block;
  }



  .menu-toggle {
    font-size: .8rem;
    cursor: pointer;
  }

  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
  }

  .mobile-menu li {
    padding: 10px 20px;
  }

  .mobile-menu li:last-child {
    border-bottom: none;
  }

  .nav-menu{
    display: none;
  }

  @media (min-width:425px){
    .logo{
      font-size: .5rem;
    }

    .menu-toggle {
      font-size: 1rem;
    }
  }

  @media (min-width:768px){

    .logo{
      font-size: .8rem;
    }

    .header-icons i{
      padding-left: .7rem;
    }

    .header-icons i, .menu-toggle i{
      font-size: 1.2rem;
    }
  }

  @media (min-width:780px) {
    .mobile-menu-container {
      display: none;
    }
    
    .desktop-menu{
      display: flex;
      justify-content: space-between;
      padding: 0;
    }

    .logo{
      order: 0;
    }
    
    .logo h1, .desktop-menu li{
      font-size: .8rem;
    }

    .desktop-menu li{
      padding-left: 1rem;
      font-weight: 400;
    }
  }

  @media (min-width:1024){
    .logo{
      font-size: .5;
    }
  }

  @media (min-width:2560px){
    .logo{
      font-size: 1rem;
    }

    .desktop-menu li{
      font-size: 1.5rem;
      padding-left: 2rem;
    }

    i{
      font-size: 2rem;
      padding-left: 1rem;
    }
  }

</style>