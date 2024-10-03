<script>
  export let title = "Vhutomi Projects";

</script>

<section class="container" aria-labelledby="upcoming-heading">
  <h2 id="upcoming-projects-heading">Upcoming Projects</h2>
  <div class="video-container">
    <video autoplay muted loop aria-label="Promotional video for {title}">
      <source src="/videos/Ibutho.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

</section>

<style>
  /* Mobile-first styles */

  section {
    overflow: hidden;
  }

  #upcoming-projects-heading{
    font-size: 1.7rem;
    color: var(--secondary);
    margin-bottom: 1rem;
  }

  .video-container {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    background-color: var(--text);
    padding: 1rem;
  }

  video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  /* Tablet and larger screens */
  @media (min-width: 600px) {
    section {
      flex-direction: row;
    }

    .video-container {
      flex: 2;
    }

  }

  @media (min-width:1024px){
    #upcoming-projects-heading{
      font-size: 2.2rem;
    }

    .video-container{
      padding: 2rem 3rem;
    }
  }
</style>
