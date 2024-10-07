<script>
  let techStack = ["HTML5", "CSS3", "React"];
  let tools = ["Figma", "Git", "GitHub", "Trello", "Webflow"];
</script>

<section id="about" class="container" aria-labelledby="about-title">
  <div class="about__container">
    <h3 class="subtitle">In A Glimpse</h3>
    <p class="description">
      I'm a front-end web developer with a passion for building websites that are not only easy on the eye but also work seamlessly for everyone. I believe the web should be a welcoming place for all - yes, even for your grandma who still uses Internet Explorer (bless her heart). <br><br>
      But here's the thing: The tech industry evolves in a blink of an eye. This why I'm always eager to learn, staying on top of the latest industry trends and best practices. This means your website won't just be great today – it'll be ready for whatever the future of the web throws our way.
      <br><br>
      Otherwise, when I'm not not making the internet a better place one code at a time, I'm indulging in a hot cup of tea (one cup at a time).
    </p>
    <h3 class="subtitle">Techstack</h3>
    <ul class="tech-list" aria-label="Technology stack">
      {#each techStack as tech}
        <li><i class={`fa-brands fa-${tech.toLowerCase()}`} aria-hidden="true"></i> {tech}
        </li>
        {/each}
        <li>
          <i class="fa-brands fa-js" aria-label="JavaScript"></i>
          <span>JavaScript</span>
        </li>
        <li class="svelte" aria-label="Svelte Logo">
          <svg xmlns="http://www.w3.org/2000/svg" aria-label="Svelte" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#inherit"></rect><path fill="#3498db" d="M395 115c-35-51-106-66-157-34l-89 57a103 103 0 00-46 69 108 108 0 0010 69 103 103 0 00-15 39 109 109 0 0019 82c35 51 106 66 157 34l89-57a103 103 0 0046-69 108 108 0 00-10-69 103 103 0 0015-39 109 109 0 00-19-82"></path><path fill="#1d1d1d" d="M230 402a71 71 0 01-77-28 66 66 0 01-11-50 62 62 0 012-8l2-5 5 3a115 115 0 0035 17l3 1v4a20 20 0 003 13 21 21 0 0023 9 20 20 0 006-3l89-57a19 19 0 008-12 20 20 0 00-3-15 21 21 0 00-23-9 20 20 0 00-5 3l-34 21a65 65 0 01-19 8 71 71 0 01-76-28 66 66 0 01-11-50 62 62 0 0128-41l89-57a65 65 0 0118-8 71 71 0 0177 28 66 66 0 0111 50 63 63 0 01-2 8l-2 5-5-3a115 115 0 00-35-17l-3-1v-4a20 20 0 00-3-13 21 21 0 00-23-9 20 20 0 00-6 3l-89 57a19 19 0 00-8 12 20 20 0 003 15 21 21 0 0023 9 20 20 0 005-3l34-21a65 65 0 0119-8 71 71 0 0176 28 66 66 0 0111 50 62 62 0 01-28 41l-89 57a65 65 0 01-18 8"></path></g></svg>
         <span>Svelte</span> 
        </li>
    </ul>
    <h3 class="subtitle">Tools</h3>
    <ul class="tech-list" aria-label="Tools used">
      {#each tools as tool}
        <li><i class={`fa-brands fa-${tool.toLowerCase()}`} aria-hidden="true"></i> {tool}</li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .about__container{
 
    color: var(--text-);
    border-radius: 30px;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;
  }
  
  .subtitle{
    color: var(--secondary);
    text-align: center;
    font-size: 1.2rem;
  }

  .description {
    line-height: 1.6;
    text-align: center;
  }

  .tech-list{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 0;
    justify-content: center;
  }

  .tech-list li{
    display: flex;
    align-items: center;
    gap: .5rem;
    justify-content: center;
  }

  .tech-list i{
    color: var(--primary);
  }

  .svelte{
    display: flex;
  }

  .tech-list svg{
    fill: transparent;
  }

  .tech-list i, .tech-list svg{
    font-size: 1.2rem;
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (min-width: 768px) {

    .about__container {
      padding: 2rem 2.5rem;

    }

    .subtitle {
      font-size: 1.5rem;
    }
  }

  @media (min-width:1024px){
    .description{
      max-width: 70ch;
      font-size: 1.1rem;
    }
  }

</style>