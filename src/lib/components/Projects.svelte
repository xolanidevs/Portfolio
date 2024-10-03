<script>

  const projects = [
    {
      title: "Vhutomi Projects",
      category: "CONSTRUCTION",
      description: "Vhutomi Projects PTY LTD is a full-service construction company that goes beyond traditional building. They service all aspects of construction while offering specialized expertise in epoxy flooring and logistics solutions. ",
      techstack: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      image: "/images/VP.png",
      link: "https://vhutomi-projects.vercel.app/"
    },
    {
      title: "JukulynsFinest",
      category: "MULTI-MEDIA PRODUCTION",
      description: "Jukulyn's Finest was initially formed as a content creation group. They are now expanding their services to multimedia production, specializing in full event production and media production.",
      techstack: ["Photoshop", "Illustrator", "Premier Pro", "After Effects", "Audition"],
      image: "/images/JF.png",
      link: "https://jukulyns-finest.vercel.app/"
    }
  ];

</script>

<section id="projects" class="container"  aria-labelledby="featured-projects-heading">
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
          <i class="fa fa-globe" aria-hidden="true"></i>
           Visit the site 
        </a>
      </article>
    {/each}
  </div>
</section>

<style>

section {
  overflow: hidden;
  /* padding: 1rem; */}

#featured-projects-heading {
  color: var(--secondary);
  margin-bottom: 1rem;
  font-size: 1.5rem; 
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr; 
  gap: 1rem; 
}

.project-card {
  background-color: var(--text);
  padding: 1rem;
  border-radius: 8px;
}

.project-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.title, .category, .description {
  margin-top: 0.5rem; 
}

.title {
  color: var(--background);
}

.category {
  font-size: 0.8rem;
  color: var(--secondary);
}

.description {
  color: var(--text-secondary);
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

/* Tablet and Larger Screens */
@media (min-width: 600px){
  #featured-projects-heading {
    font-size: 1.7rem; 
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    gap: 2rem;
  }

  .title, .category, .description {
    margin-top: 0.8rem; 
  }
}


@media (min-width: 1024px) {
  #featured-projects-heading {
    font-size: 2rem; 
  }

}

</style>