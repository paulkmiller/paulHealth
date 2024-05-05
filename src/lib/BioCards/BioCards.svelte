<script>
  import BioCardsItem from './BioCardsItem.svelte'

  export let data
  export let index = 0

  let leadership = []
  let employees = []
  let numOfBlocks = 0
  
  let headerImage = data.headerImage?.url
  let headerImageAlt = data.headerImage?.description
  let headline = data.headline || ''
  let headlineCopy = data.headlineCopy || ''
  let subline = data.subline || ''

  $: {
    let bio_cards_data = data.bioCardsDataCollection.items
    leadership = bio_cards_data.filter(person => person.cardStyle == true)
    employees = bio_cards_data.filter(person => person.cardStyle == false)
    numOfBlocks = leadership.length
  }
</script>
<div class="bio-cards-section bioCard-{index} divider {numOfBlocks >= 3 ? 'more-than-three' : ''}" style="--columns: {numOfBlocks}">
  
  <slot />

  <div class="header-container">
    {#if headerImage}
      <img class="header-image" src="{headerImage}?fm=webp&q=80" alt="{headerImageAlt}"/>
    {/if}
    {#if headline}
      <h2 class="headline">{headline}</h2>
    {/if}
    {#if headlineCopy}
      <p class="headlineCopy">{headlineCopy}</p>
    {/if}
    {#if subline}
      <h5 class="subline">{subline}</h5>
    {/if}
  </div>

  {#if leadership}
    <div class="leadership">
      {#each leadership as person, index (person.name)}
          <BioCardsItem entry={person} />
      {/each}
    </div>
  {/if}

  <div class="employees">
    {#each employees as person, index (person.name)}
    <span data-aos="fade-up" data-aos-delay="{index * 200}">
      <BioCardsItem entry={person} />
    </span>

    {/each}
  </div>

</div>


<style>
  .divider::before {
    content: '';
    display: block;
    height: 1px;
    background-color: #e8e8e8;
    width: 80%;
    margin: 6rem auto;
  }

  .bio-cards-section .header-image{
    height: 6rem;
    width: 6rem;
    margin: 1.5rem auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .header-container {
    text-align: center;
    max-width: 30rem;
    margin: 6rem auto 4rem;
  }

  .header-container h2 {
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
    font-size: 4.5rem;
    font-weight: 400;
  }

  .header-container .subline {
    font-size: 2.25rem;
  }

  .leadership {
    width: clamp(80%,100%,800px);
    margin: 0 auto;
  }

  .leadership,
  .employees {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 2rem;
  }

  .employees {
    grid-gap: 0;
    margin: 3rem auto 6rem;
    max-width: 1300px;
  }

  .leadership :global(.leadership) {
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .headlineCopy {
    font-size: 1.125rem;
  }

  :global(.bio-cards-section[style*="--columns: 3;"] .bio-cards-wrapper.leadership figure:nth-child(1)) {
    margin: auto;
  }

  :global(.bio-cards-section[style*="--columns: 3;"] .bio-cards-wrapper.leadership figure:nth-child(2)) {
    margin: auto;
  }

  :global(.bio-cards-section.more-than-three .bio-cards-wrapper.leadership figure:nth-child(1)),
  :global(.bio-cards-section.more-than-three .bio-cards-wrapper.leadership figure:nth-child(2)) {
      margin: auto;
  }

  @media (max-width: 768px) {
    .divider::after,
    .divider::before {
      margin: 2rem auto;
    }
  }

  @media (max-width: 650px) {
    .divider::after {
      margin: 1rem auto;
    }
  }
</style>
