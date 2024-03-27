<script>
  export let entry

  let role
  let background_color
  let color

  $: {
    role = entry.cardStyle == true ? 'leadership' : 'employee'
    background_color = role === 'leadership' ? '#29397a' : '#fff'
    color = role === 'leadership' ? '#fff' : '#000'
  }
</script>

<figure class={role} style="background-color: {background_color}; color: {color}">
  <div class="avatar-wrapper">
    <div class="avatar" style="background-image: url({entry.avatar?.url}?fm=webp&q=80)" />
    <div class="circle" />
  </div>
  <figcaption>
    <h4><strong>{entry.name || 'Plutonaut'}</strong></h4>
    {#if entry.jobTitle}
      <h6>{entry.jobTitle}</h6>
    {/if}
    <p class="bio-text">
      {@html entry.bio}
    </p>
  </figcaption>
</figure>

<style>
  figure {
    padding: 2rem 1.5rem;
    border-radius: 0.6rem;
    text-align: center;
    border-radius: 0.6rem;
    max-width: 22rem;
    height: 100%;
  }

  figure .avatar {
    height: 5.825rem;
    width: 5.825rem;
    margin: 0 auto;
    border-radius: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    z-index: 2;
  }

  figure .circle {
    height: 2.5rem;
    width: 5rem;
    border-radius: 10rem 10rem 0 0;
    z-index: 1;
  }

  figcaption {
    margin-top: -2.5rem;
  }

  h4 {
    margin: 1rem auto;
  }

  h6 {
    font-family: 'PolySans Median';
    font-size: .95rem;
    color: #adebef;
    margin: -0.8rem auto 0 auto;
  }

  figure.employee {
    max-width: 20rem;
  }

  .employee h6 {
    color: #D93561;
  }

  .bio-text {
    margin: 0.5rem auto 0 auto;
  }

  .bio-text :global(p) {
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
    font-size: 0.95rem;
    line-height: 1.125rem;
  }

  .bio-text :global(b) {
    font-family: 'PolySans Median', Arial, Helvetica, sans-serif;
    color: #FF80A8;
  }

  .bio-text :global(p:first-of-type) {
    min-height: 105px;
}

  :global(.bio-cards-section.bioCard-0 .bio-cards-wrapper.leadership) {
    margin-bottom: 4rem;
  }

  :global(.bio-cards-wrapper.leadership figure:nth-child(1)) {
    margin-left: auto;
    margin-right: 0;
  }
  :global(.bio-cards-wrapper.leadership figure:nth-child(2)) {
    margin-left: 0;
    margin-right: auto;
  }

  @media screen and (max-width: 720px) {
    figure {
      max-width: 27rem;
    }
  }

  @media screen and (max-width: 768px) {
    :global(.bio-cards-wrapper.leadership figure.leadership) {
      margin: auto;
    }

    .bio-text :global(p) {
      font-size: 0.9rem;
      margin: 0 auto;
    }
  }
</style>
