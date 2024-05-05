<script context="module">
  export function load({ data }) {
    if (data.isAuthenticated) {
      return {
        status: 302,
        redirect: '/home'
      };
    }
  }
</script>

<script>
  import { onMount } from 'svelte';
  import { fetch } from '$app/environment';
  import { goto } from '$app/navigation';

  export let isAuthenticated;

  let password = '';
  let showModal = !isAuthenticated;
  const correctPassword = 'password';

  onMount(() => {
    if (import.meta.env.SSR) {
      showModal = false;
    }
  });

  async function validatePassword() {
    if (password === correctPassword) {
      showModal = false;
      await fetch('/api/set-password-cookie', { method: 'POST' });
      goto('/home');
    } else {
      alert('Incorrect password, please try again.'); 
      password = '';
    }
  }
</script>

{#if showModal}
  <div class="modal show" style="display: block;">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Enter Password to Proceed</h5>
          <button type="button" class="btn btn-close" aria-label="Close" on:click={() => showModal = false}>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body">
          <input type="password" class="form-control" bind:value={password} placeholder="Enter password">
        </div>
        <div class="modal-footer" >
          <button type="button" class="btn btn-primary" on:click={validatePassword}>Submit</button>
        </div>
      </div>
    </div>
  </div>
  <style>
    .navbar, .footer {
      display: none !important;
    }
  </style>
{/if}

<style>
  .modal {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  .modal-footer {
    border-top: 0px;
  }
</style>
