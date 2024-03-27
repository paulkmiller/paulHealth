<script>
  import { browser } from '$app/environment';

  let email = ''

  async function submitForm(event) {
    event.preventDefault()

    if (browser) {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        email = ''
        alert('Thanks for subscribing!')
      } else {
        alert('Oops! Something went wrong. Please try again later.')
      }
    }
  }
</script>

<form on:submit|preventDefault={submitForm}>
  <label for="exampleInputEmail1">Email address:</label>
  <input type="email" class="form-control" bind:value={email} required />
  <button type="submit">Subscribe</button>
</form>

<style>
  .form-control {
    max-width: 800px;
    border: 2px solid #6e6f70;
  }

  button { 
    position: relative;
    display: inline-block;
    padding: 1rem 3rem;
    background: #29397a;
    border: none;
    border-radius: 10px;
    color: #fff;
    line-height: 1.1rem;
    font-size: 1.1rem;
    text-align: center;
    text-decoration: none;
    transition: all 0.25s ease-out;
    z-index: 1;
    margin: .75rem 0 0;
    width: fit-content;
  }
</style>
