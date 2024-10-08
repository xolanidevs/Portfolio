<script>
  let email = '';
  let message = '';

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      message = data.message;
      if (response.ok) email = '';
    } catch (error) {
      message = 'An error occurred. Please try again.';
    }
  }
</script>

<section id="newsletter" class="container">
  <form on:submit={handleSubmit}>
    <div class="text">
      <h2>Subscribe to my newsletters</h2>
      <p>As an aspiring tech entrepreneur with a passion for thought expression through writing, I love sharing my insights on topics that captivate me such as technology, business, investment, and the deeper essence of living.</p>
    </div>
    <div class="middle">
      <input 
      type="email" 
      bind:value={email} 
      placeholder="Enter your email" 
      required
      />
      <button type="submit">Subscribe</button>
      {#if message}
      <p>{message}</p>
      {/if}
    </div>
    </form>
</section>

<style>

  section{
    margin-top: 5rem;
  }

  h2{
    color: var(--primary);
    margin-bottom: 1rem;
  }

  p{
    color: var(--text);
  }

  h2, p{
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .middle{
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input{
    background: none;
    border: 1px solid var(--secondary);
    padding: 1rem 2rem;
    outline: none;
  }

  button{
    background: var(--primary);
    padding: 1rem 2rem;
    color: var(--background);
  }

  @media (min-width:1024px){
    form{
      display: inline;
      position: relative;
    }

    input, button{
      padding: 1rem 2rem;
    }
    
    .text{
      display: block;
    }

    .middle{
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 1rem;
      margin: 2rem auto;
      border: 1px solid transparent;
      max-width: max-content;
      /* padding: 1rem 2rem; */
      align-items: center;

    }

    h2{
      font-size: 2rem;
      margin-bottom:1rem ;
    }

    p{
      max-width: 70ch;
      margin: 0 auto;
      font-size: 1.2rem;
    }
  }



</style>