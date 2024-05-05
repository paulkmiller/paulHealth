<script>
	import { onMount } from 'svelte';
	import { Accordion, AccordionItem } from 'svelte-collapsible'
  import ButtonLink from '$lib/Button/ButtonLink.svelte'
  
  export let data
	
	let key = 0;
  
	onMount(() => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    const images = document.querySelectorAll('.right-container img');

    accordionItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        images.forEach((img, imgIndex) => {
          if (imgIndex === index) {
            img.classList.add('active');
          } else {
            img.classList.remove('active');
          }
        });
      });
    });

  });
</script>

<div class="dynamic-duplex container" 
    data-aos="fade-up" 
    data-aos-delay="600" 
    data-aos-duration="700"
  >
  <div class="accordion-container">
    <div class="left-container">
      <Accordion bind:key={key}>
        <AccordionItem key={0} on:toggle={() => key = 0}>
          <div slot='header' class='header'>
            <h2>{data.headline}</h2>
          </div>
          <div slot='body' class='body'>
            <p>{@html data.bodyText}</p>
          </div>
          <img 
            src="{data.image.url}?fm=webp&q=80" 
            alt={data.image.description} 
            class="content {key === 0 ? 'active' : ''}"
          />
        </AccordionItem>
        <AccordionItem key={1} on:toggle={() => key = 1}>
          <div slot='header' class='header'>
            <h2>{data.headline2}</h2>
          </div>
          <div slot='body' class='body'>
            <p>{@html data.bodyText2}</p>
          </div>
          <img 
            src="{data.image2.url}?fm=webp&q=80" 
            alt={data.image2.description} 
            class="{key === 1 ? 'active' : ''}"
          />
        </AccordionItem>
        <AccordionItem key={2} on:toggle={() => key = 2}>
          <div slot='header' class='header'>
            <h2>{data.headline3}</h2>
          </div>
          <div slot='body' class='body'>
            <p>{@html data.bodyText3}</p>
          </div>
          <img 
            src="{data.image3.url}?fm=webp&q=80" 
            alt={data.image3.description} 
            class="{key === 2 ? 'active' : ''}"
          />
        </AccordionItem>
      </Accordion>
    </div>
    <div class="right-container">
      <img 
        src="{data.image.url}?fm=webp&q=80" 
        alt={data.image.description} 
        class="{key === 0 ? 'active' : ''}"
      />
      <img 
        src="{data.image2.url}?fm=webp&q=80" 
        alt={data.image2.description} 
        class="{key === 1 ? 'active' : ''}"
      />
      <img 
        src="{data.image3.url}?fm=webp&q=80" 
        alt={data.image3.description} 
        class="{key === 2 ? 'active' : ''}"
      />
    </div>
  </div>
  <div class="cta">
    <ButtonLink
      text={data.ctaText || 'Learn More'}
      path={data.targetPage ? `${data.targetPage}` : '/contact'}
      color={'#FFF'}
      background_color={'#D93561'}
      ariaText="{data.ctaText}"
      ariaLink="{data.targetPage}"
    />
  </div>
</div>

<style>

:global(.container .accordion){
	width: 100%;
	max-width: 100%
}

.cta,
.cta :global(a) {
  text-align: center;
}

.cta {
  margin-top: 2rem;
}

.accordion-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
	position: relative;
}

.accordion-container img {
	position: absolute;
	right: 0;
	top: 0;

  padding: 2rem;
  height: 100%;
	max-width: calc(50% - 2rem);

	object-fit: contain;
	aspect-ratio: 3/2;

	opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.container .accordion-container :global(.active) {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.left-container {
  display: grid;
  max-width: 800px;
  margin: 0 auto;
}

.right-container {
  padding: 0;
}

.accordion-container :global(h3) {
  font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 2.3rem;
  margin-bottom: 0.25rem;
  align-self: self-end;
}

.accordion-container :global(p) {
  font-family: 'PolySans Slim', Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: 0.25px;
  margin: 0.5rem;
  text-align: left;
  align-self: center;
}

.accordion-container :global(.accordion-item-header) {
  width: 100%;
  margin-bottom: -1.375rem;
}

.accordion-container :global(.accordion-item button *) {
  text-align: left;
}

.accordion-container :global(.header) {
  color: #29397A;
}

.accordion-container :global(.header *) {
  font-size: 4.5rem;
}

.dynamic-duplex {
  padding: 3rem 0;
}

.dynamic-duplex .right-container {
  max-height: 440px;
  margin: 0 auto;
}

:global(.accordion-item img) {
  display: none;
 }

:global(.accordion-item .header) h2:before {
    float: left;
    position: absolute;
    left: -40px;
    top: 55px;
    font: bold 1rem sans-serif;
    text-align: center;
    color: #fff;
    line-height: 2rem;
    width: 2rem;
    height: 2rem;
    background: #29397a;
    -moz-border-radius: 100%;
    border-radius: 100%;
}

:global(.accordion-item:first-child .header h2:before) {
  content: "1";
}

:global(.accordion-item:nth-child(2) .header h2:before) {
  content: "2";
}

:global(.accordion-item:nth-child(3) .header h2:before) {
  content: "3";
}

:global(
  .container .accordion, 
  .container .accordion-item,
  .container .accordion-item-header) {
  border: none;
  box-shadow: none;
  position: relative;
}

:global(.accordion) {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
}

:global(.accordion-item) {
  border-bottom: 1px solid rgb(100, 120, 140);
}

@media only screen and (max-width: 768px) {
  :global(.accordion-item .header) h2:before {
    display: none;
  }
  
  .accordion-container img {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .left-container {
    width: 100%;
    padding: 3rem;
  }
  .left-container {
    margin: 4rem auto;
    text-align: center;
  }

  .left-container :global(h3) {
    font-size: 2rem;
    margin: 1rem auto;
  }

  .left-container :global(p) {
    max-width: 97.5%;
    margin: 0 auto;
  }

  .left-container :global(a) {
    margin: 1rem auto 0 auto;
  }
}

@media only screen and (max-width: 991px) {
  .accordion-container {
    grid-template-columns: 1fr;
  }

  .dynamic-duplex .right-container {
    display: none;
  }

  :global(.accordion-item img) {
    display: block;
  }

  .accordion-container .accordion-item img {
    display: block;
    position: relative !important;
    opacity: 1;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }

  :global(.accordion-item-body) {
    height: auto !important;
  }
}

@media only screen and (max-width: 1250px) {
  .left-container {
    padding: 2rem 1rem;
  }
}

@media only screen and (max-width: 1680px) {
  .left-container {
    max-width: 640px;
    margin: 0 auto;
    padding: 2rem;
  }
}
</style>
