<!-- <script>
let name = '';
let phone = '';
let email = '';
let message = '';
let formSubmitted = false;

function handleSubmit() {
  // Handle form submission logic here
  console.log('Form submitted', { name, phone, email, message });
  formSubmitted = true;
}
</script>

<svelte:head>
  <title>Contact Me | Xolani Mthembu</title>
  <meta name="description" content="Get in touch with us. Send us an email, give us a call, or reach out on Instagram.">
</svelte:head>

<section class="container" aria-label="Contact Information and Form">
  <div class="contact-info">
    <h1 class="sr-only">Contact Me</h1>
    <div class="contact-method">
      <i class="fas fa-envelope" aria-hidden="true"></i>
      <div>
        <h2>Email</h2>
        <a href="mailto:xmthembu412@gmail.com" aria-describedby="email-description">xmthembu412@gmail.com</a>
      </div>
    </div>
    <div class="contact-method">
      <i class="fas fa-phone" aria-hidden="true"></i>
      <div>
        <h2>Phone</h2>
        <a href="tel:+27817109252" aria-describedby="phone-description">+27 81 710 9252</a>
      </div>
    </div>
    <div class="contact-method">
      <i class="fab fa-instagram" aria-hidden="true"></i>
      <div>
        <h2>Instagram</h2>
        <a href="https://www.instagram.com/_xolanimthembu" target="_blank" rel="noopener noreferrer" aria-describedby="instagram-description">@_xolanimthembu</a>
      </div>
    </div>
  </div>
  <div class="contact-form">
    {#if formSubmitted}
      <p class="success-message" role="alert">Thank you for your message. We'll get back to you soon!</p>
    {:else}
      <form on:submit|preventDefault={handleSubmit} novalidate>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name <span aria-label="required">*</span></label>
            <input id="name" type="text" bind:value={name} placeholder="Your name" required aria-required="true">
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input id="phone" type="tel" bind:value={phone} placeholder="xxx-xxx-xxxx" aria-describedby="phone-format">
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email <span aria-label="required">*</span></label>
          <input id="email" type="email" bind:value={email} placeholder="you@company.com" required aria-required="true">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" bind:value={message} placeholder="Type your message ..." rows="5"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    {/if}
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    background-color: var(--text);
    color: var(--text-secondary);
    padding: 2rem;
    border-radius: 20px;
    margin-bottom: 7rem;
  }

  .contact-info {
    margin-bottom: 2rem;
  }

  .contact-method {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }

  .contact-method i {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    color: var(--accent);
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: normal;
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.8rem;
  }

  a {
    color: var(--accent);
    text-decoration: none;
  }

  .contact-form {
    background-color: var(--background);
    border-radius: 15px;
    padding: 2rem;
  }

  .form-row {
    display: flex;
    gap: 1rem;
  }

  .form-group {
    margin-bottom: 1rem;
    flex: 1;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text);
    font-size: 0.8rem;
  }

  input, textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--text);
    background-color: transparent;
    border-radius: 5px;
  }

  textarea {
    height: 100px;
    resize: vertical;
  }

  button {
    background-color: var(--primary);
    color: #ffffff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    float: right;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .success-message {
    background-color: #4CAF50;
    color: white;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
  }

  @media (min-width: 768px) {
    section {
      flex-direction: row;
      justify-content: space-between;
    }

    .contact-info {
      width: 40%;
      margin-bottom: 0;
    }

    .contact-form {
      width: 55%;
    }
  }
</style> -->

<script>
  const contactDetails = [
    {name:"+27 81 710 9252", icon:"phone", fa:"solid", href:"tel:+27817109252", ariaLabel:"Call us at +27 81 710 9252"},
    {name:"xmthembu@gmail.com", icon:"envelope", fa:"solid", href:"mailto:xmthembu412@gmail.com", ariaLabel:"Email us at xmthembu412@gmail.com"},
    {name:"WhatsApp", icon:"whatsapp", fa:"brands", href:"https://wa.me/27817109252", ariaLabel:"Contact us on WhatsApp", rel:"noopener noreferrer"},
    {name:"Instagram", icon:"instagram", fa:"brands", href:"https://www.instagram.com/_xolanimthembu/", ariaLabel:"Follow us on Instagram", rel:"noopener noreferrer"}
  ]
  </script>
  
  <section class="container">
    <h1>Get In Touch</h1>
    <div class="wrapper">
      {#each contactDetails as contact }
        <a 
          href="{contact.href}" 
          class="contact-button" 
          aria-label="{contact.ariaLabel}"
          rel="{contact.rel || ''}"
        >
          <i class="fa-{contact.fa} fa-{contact.icon}" aria-hidden="true"></i>
          <span>{contact.name}</span>
        </a>
      {/each}
    </div>
  </section>

    <style>
      h1{
        color: var(--text);
        margin-bottom: 2rem;
        font-size: 1.7rem;
      }

      .wrapper {
        display: flex;
        /* flex-direction: column; */
        justify-content: space-between;
    
      }
    
      .contact-button {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border: 1px solid var(--secondary);
        color: var(--primary);
        text-decoration: none;
        border-radius: 25px;
        font-size: 18px;
        transition: background-color 0.3s ease, padding-right .3s ease;
      }
    
      .contact-button:hover,
      .contact-button:focus {
        background-color: rgba(255, 255, 255, 0.3);
        padding-right: 40px;
        outline: none;
      }
    
      .contact-button:focus {
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
      }
    
      .contact-button :global(i) {
        margin-right: 10px;
        width: 20px;
        height: 20px;
      }

      @media (max-width:768px){
        h1{
          font-size: 1.5rem;
        }

        .wrapper{
          flex-direction: column;
          gap: 2rem;
        }
      }
    </style>