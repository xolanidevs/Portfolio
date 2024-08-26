<script>


  const projects = [
    {
      title: "Vhutomi Projects",
      category: "CONSTRUCTION",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
      techstack: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      image: "/images/VP.png",
      link: "https://vhutomi-projects.vercel.app/"
    },
    {
      title: "JukulynsFinest",
      category: "MULTI-MEDIA PRODUCTION",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      techstack: ["Photoshop", "Illustrator", "Premier Pro", "After Effects", "Audition"],
      image: "/images/JF.png",
      link: "https://jukulyns-finest.vercel.app/"
    }
  ];
</script>

<section class="container"  aria-labelledby="featured-projects-heading">
  <h2 id="featured-projects-heading">FEATURED</h2>
  <div class="projects-grid">
    {#each projects as project}
      <article class="project-card">
        <img src={project.image} alt={`Preview of ${project.title}`} />
        <h3 class="title">{project.title}</h3>
        <p class="category">{project.category}</p>
        <p class="description">{project.description}</p>
        <div class="techstack" aria-label="Technologies used">
          {#each project.techstack as tech}
            <span class="tech-icon" aria-label={tech}></span>
          {/each}
        </div>
        <a href={project.link} target="_blank" class="cta-button" rel="noopener noreferrer">
            VISIT
        </a>
      </article>
    {/each}
  </div>
</section>

<style>

  #featured-projects-heading{
    color: var(--text);
    margin-bottom: 1rem;
    font-size: 1.7rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background-color: #f0f0f0;
    padding: 1rem;
    border-radius: 8px;
  }

  .project-card img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  .title, .category, .description{
    margin-top: .8REM;
  }

  .title{
    color: var(--text);
  }

  .category {
    font-size: 0.8rem;
    color: var(--secondary);
  }

  .description{
    color: #333;
  }

  .techstack {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  .tech-icon {
    width: 20px;
    height: 20px;
    background-color: #333;
    border-radius: 50%;
  }

  .cta-button {
    display: inline-block;
    background-color: var(--accent);
    color: var(--background);
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 4px;
  }
</style>