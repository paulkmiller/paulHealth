<script>
  import { slide } from 'svelte/transition'
  export let entry

  let faqs = [
    { question: entry.question0, answer: entry.answer0?.json.content[0].content[0].value },
    { question: entry.question1, answer: entry.answer1?.json.content[0].content[0].value },
    { question: entry.question2, answer: entry.answer2?.json.content[0].content[0].value },
    { question: entry.question3, answer: entry.answer3?.json.content[0].content[0].value },
    { question: entry.question4, answer: entry.answer4?.json.content[0].content[0].value },
    { question: entry.question5, answer: entry.answer5?.json.content[0].content[0].value },
    { question: entry.question6, answer: entry.answer6?.json.content[0].content[0].value },
    { question: entry.question7, answer: entry.answer7?.json.content[0].content[0].value },
    { question: entry.question8, answer: entry.answer8?.json.content[0].content[0].value },
    { question: entry.question9, answer: entry.answer9?.json.content[0].content[0].value },
  ].filter(faq => faq.question || faq.answer).map(faq => ({ ...faq, isOpen: false })) // filter out FAQs with no question or answer

  const toggle = index => faqs[index].isOpen = !faqs[index].isOpen
</script>

{#each faqs as faq, index (index)}
  <button on:click={() => toggle(index)} aria-expanded={faq.isOpen}>  
    {#if faq.question}
      {faq.question}
    {/if}
    <svg
      style="tran"
      width="20"
      height="20"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
    >
  </button>
  {#if faq.isOpen}
    <div class="answer" transition:slide={{ duration: 500 }}>
      {#if faq.answer}
        {@html faq.answer}
      {/if}
    </div>
  {/if}
{/each}

<style>
  button {
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0;
    background: none;
    display: flex;
    justify-content: space-between;
    color: inherit;
    font-size: 1rem;
    font-family: 'PolySans Neutral', arial, sans-serif;
    cursor: pointer;
    width: 100%;
    margin: 0 auto;
    padding: 1.75em 0 0.5rem;
  }

  .answer {
    padding: 1rem;
    background: #fff;
    color: #000;
    font-size: .95rem;
  }

  .answer :global(ul) {
    background-color: #e6e9de;
    color: #000;
    margin: 0;
    padding: 1rem 2rem;
    border-bottom: 2px solid #fff;
    border-radius: 0.2rem;
    /* box-shadow: inset 0 0 4px rgba(0,0,0,0.8); */
  }

  svg {
    transition: transform 0.2s ease-in;
  }

  [aria-expanded='true'] svg {
    transform: rotate(0.25turn);
  }
</style>
