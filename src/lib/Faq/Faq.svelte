<script>
  import FaqItem from './FaqItem.svelte'
  import ButtonLink from '$lib/Button/ButtonLink.svelte'

  export let data
</script>

<div class="faq-wrapper">
  <div>
    <h2>Frequently Asked Questions</h2>

    {#each data as entry}
      <FaqItem {entry} />
    {/each}
  </div>
  <!-- <div class="button-wrapper">
    <ButtonLink path={'#'} text={'View All FAQs'} background_color={'#fff'} color={'#29397a'} />
  </div> -->
</div>

<style>
  .faq-wrapper {
    padding: 6rem 0 3rem 0;
    background-color: #29397a;
    color: #fff;
    text-align: left;
  }

  .faq-wrapper div {
    width: 50%;
    margin: 0 auto;
  }

  /* .faq-wrapper .button-wrapper {
    margin-top: 4rem;
  } */

  h2 {
    font-weight: 400;
    text-align: left;
  }

  @media (max-width: 1300px) {
    .faq-wrapper div {
      width: 65%;
    }
  }

  @media (max-width: 1024px) {
    .faq-wrapper div {
      width: 80%;
    }
    /* .faq-wrapper .button-wrapper {
      text-align: center;
    } */
  }

  @media(max-width: 768px) {
    h2{
      text-align: center;
    }
  }
</style>
