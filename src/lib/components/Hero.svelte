<script>
  let icons = [
    { class: "fab fa-js icon js", label: "JavaScript" },
    { class: "fa fa-laptop-code icon", label: "Coding" },
    { class: "fab fa-github icon github", label: "GitHub" },
    { class: "fab fa-vscode icon vs-code", label: "VS Code" },
    { class: "fab fa-html5 icon html", label: "HTML5" },
    { class: "fab fa-css3-alt icon css", label: "CSS3" },
    { class: "fa-brands fa-react icon react", label: "React" }
  ];
</script>

<head>
  <meta name="description" content="Xolani Mthembu: Front-End Web Developer & UX Designer based in Gauteng. Crafting engaging, user-friendly web experiences with cutting-edge technology.">
</head>

<section class="container" aria-labelledby="hero-heading">
  <div class="icon-circle" >
    {#each icons as icon}
      <i class={icon.class} ></i>
    {/each}
  </div>
  <div class="hero-content">
    <div class="hero-text">
      <h1 id="hero-heading">
        Hey there, <br> I'm Xolani Mthembu. <br> A <strong>Front-End</strong> Web Developer & A <strong>UX Designer</strong> based in Gauteng.
      </h1>
    </div>
    <div class="cta">
      <a href="mailto:your.bizwithxolani@gmail.com.com" aria-label="Email me">
        <i class="fa-solid fa-envelope" aria-hidden="true"></i>
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="https://github.com/xolanidevs" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
        <i class="fab fa-github" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</section>

<style>
  section{
    /* height: 100vh; */
    display: flex;
    margin-top: calc(9rem + 3rem);
    position: relative;
  }
    
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;
  }
  
  .hero-text{
    max-width: 70ch;
  }
  
  #hero-heading {
    font-size: 1.8rem;
    color: var(--text);
  }

  .cta {
    display: block;
    margin-right: auto;
    gap: .5rem;
    min-width: fit-content;
    padding: .2rem 1rem;
    border-radius: 10px;
    /* border: none;
    background: var(--primary); */
    border: 1px solid var(--primary);
    background: none;
    overflow: hidden; 
    font-size: 1em;
    transition: border 0.3s ease, background .3s ease;
  }

  /* .cta:hover{
    border: 1px solid var(--primary);
    background: none;
  } */

  .cta i {
    position: relative;
    z-index: 1; 
    /* color: #E7E9ED; */
    color: var(--primary);
    padding-right: 1rem;
    transition: transform .3s;
  }

  .cta i:hover{
    transform: translateY(-3px);
  }
    
  .icon-circle {
    position: absolute;
    right: 0%;
    transform: translate(-50%);
    width: 200px; 
    height: 200px; 
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: -2;
    /* background-color: rgb(8, 62, 150,.3); */
  }
  
  .icon {
    position: absolute;
    font-size: 25px; 
    color:rgb(23, 92, 204,.5); 
    z-index: -2;
    filter: blur(1px);
  }

  .icon.js { 
    transform: rotate(0deg) translateX(80px) rotate(0deg); 
  }

  .icon.github { 
    transform: rotate(72deg) translateX(80px) rotate(-72deg); 
  }

  .icon.react { 
    transform: rotate(144deg) translateX(80px) rotate(-144deg); 
  }

  .icon.html { 
    transform: rotate(216deg) translateX(80px) rotate(-216deg); 
  }

  .icon.css { 
    transform: rotate(288deg) translateX(80px) rotate(-288deg); 
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .icon-circle {
    animation: spin 10s linear infinite; 
  }


  @media(min-width:425px){
    section{
      margin-top: 12rem;
    }

    .hero-content {
      gap: 2rem;
  }

  #hero-heading {
    font-size: 1.9rem;
  }

}  

@media (min-width:640px) and (max-width:767px) {
  .hero-content {
    gap: 2rem;
  }

  #hero-heading {
    font-size: 2rem;
  }

  .cta {
    padding: .3rem 1.5rem;
  }
}  

@media (min-width:768px){

  section{
    margin-top: 10rem;
  }

  .hero-content {
    gap: 2.5rem;
  }

  #hero-heading {
    font-size: 3rem;
  }

  .cta {
    padding: .8rem 2rem;
  }

  .cta i{
    font-size: 1.4rem;
    padding-left: 1.2rem;
  }

  .icon {
    font-size: 35px;
  }

  .icon-circle{
    top: 10%;;
  }
} 

@media (min-width:1440px){

  
  section{
    margin-top: 11rem;
  }

  .hero-content {
    gap: 2.5rem;
  }

  #hero-heading {
    font-size: 4rem;
  }

  .cta {
    padding: .7rem 1.5rem;
  }

  .cta i{
    font-size: 1.3rem;
    padding-left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .icon {
    font-size: 40px;
  }

}



</style>