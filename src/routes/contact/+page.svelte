<script>
  import { onMount, afterUpdate } from 'svelte'; 
  import Hero from '$lib/Hero.svelte'
  import Button from '$lib/Button/Button.svelte'
  import Container from '$lib/Bootstrap/Container.svelte'
  import Row from '$lib/Bootstrap/Row.svelte'
  import Col from '$lib/Bootstrap/Col.svelte'
  import SEOMetaData from '$lib/SEOMetaData.svelte'
  import ButtonLink from '$lib/Button/ButtonLink.svelte'
  import TextWithLineBreaks from '$lib/TextWithLineBreaks.svelte'
  import CarouselDefault from '$lib/Carousel/CarouselDefault.svelte'

  let name = ''
  let email = ''
  let who = ''
  let company = ''
  let message = ''
  let formMessage = ''
  let isError = false

  let images = [];

  onMount(() => {
    let images = [
    {
      url: 'https://images.ctfassets.net/qhzqj9nbcut3/6xqhDbe6eNZtw72EM8aTJq/03ed8b20ada01cd3b471632e760553da/1624503325212.jpeg?fm=webp&q=80',
      description: 'Image 1',
    },
    {
      url: 'https://images.ctfassets.net/qhzqj9nbcut3/gulVfmDM5kqDvoyokkxUc/58945cc0e726d73c50c4e007f1315f73/ericperakslis.png?fm=webp&q=80',
      description: 'Image 2',
    },
    {
      url: 'https://images.ctfassets.net/qhzqj9nbcut3/7MChMvhkWDqS1h4s95sPN8/56d0a3bf88d005d350bd21dc0b87a64c/plutoSteve.jpeg?fm=webp&q=80',
      description: 'Image 3',
    },
    {
      url: 'https://images.ctfassets.net/qhzqj9nbcut3/3MPdd2EMExjErb9IwYhmYB/7c22aeed09a3b8f6a8109092ed6645c5/IMG_0880.jpg?fm=webp&q=80',
      description: 'Image 4',
    },
    {
      url: 'https://images.ctfassets.net/qhzqj9nbcut3/cOZldwWIoXLBu3To38cDT/ef76ab38ab8643f0d02bf52dd9ef7520/plutoRakesh.png?fm=webp&q=80',
      description: 'Image 5',
    },
    {
      url: 'https://images.ctfassets.net/qhzqj9nbcut3/75pyneu6JW070E7XExt0Eg/43c57a28351cce6470c843239d8e02cc/plutoRon.png?fm=webp&q=80',
      description: 'Image 6',
    },
  ]
  })

  // Google Play Console 405 Error Fix
  export async function GET() {
    return new Response(null, { status: 200 });
  }

  async function submitForm(event) {
    event.preventDefault()

    var forms = document.getElementsByClassName('needs-validation')
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener(
        'submit',
        function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        },
        false
      )
    })

    let object = {
      name: name,
      email: email,
      who: who,
      company: company,
      message: message,
    }

    const response = await fetch(event.target.action, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(object),
    })

    if (response.ok) {
      name = ''
      email = ''
      who = ''
      company = ''
      message = ''
      formMessage = 'Thank you! Your form has been successfully submitted.'
      isError = false

      alert('Thanks! We love hearing from you!')
    } else {
      formMessage = 'Oops! Something went wrong. Please try again later.'
      isError = true
    }
  }


  export let data
</script>

<!-- <SEOMetaData {data} /> -->

<Hero data={data.heroBanners[0]} />

<Container>
  <Row class="justify-content-center align-items-center justify-items-center pt-5 pb-5">
    <Col csm={12} md={6}>
      <h1 style="width: fit-content; display: inline-block;">Feel free to say hi.</h1>
      <p 
        style="position: absolute; width: fit-content; display: inline-block; color: red; transform: rotate(15deg);"
        data-aos="fade-in"
        data-aos-delay="500">
        Hi! <span class="wave">👋</span>
      </p>
    </Col>
    <Col csm={12} md={6}>
      <!-- {#if formMessage}
        <p class={isError ? 'error' : 'success'}>{formMessage}</p>
      {/if} -->
      <form action="/contact" on:submit|preventDefault={submitForm} method="POST" id="contactForm">
        <div class="form-group">
          <label for="paulInputPassword1">Name</label>
          <input
            type="text"
            class="form-control"
            id="paulInputPassword1"
            placeholder="Enter your name..."
            bind:value={name}
            name="name"
            required
          />
        </div>
        <div class="form-group">
          <label for="paulInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="paulInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email address..."
            bind:value={email}
            name="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="paulFormControlSelect1">Who are you?</label>
          <select
            class="form-control"
            id="paulFormControlSelect1"
            bind:value={who}
            name="who"
            required
          >
            <option disabled="" selected="" data-component-field="field" value="">Select...</option>
            <option data-component-field="option" value="Clinician">Clinician</option>
            <option
              data-component-field="option"
              value="Patient in need of 
            
            ">Patient in need of help</option
            >
            <option data-component-field="option" value="Research Stakeholder"
              >Research Stakeholder</option
            >
            <option data-component-field="option" value="Health Innovator">Health Innovator</option>
            <option data-component-field="option" value="I need Access to Patient App"
              >I need Access to Patient App</option
            >
          </select>
        </div>
        <div class="form-group">
          <label for="paulInputPassword1">Your Company</label>
          <input
            type="text"
            class="form-control"
            id="paulInputPassword1"
            placeholder="Enter your company name..."
            bind:value={company}
            name="company"
          />
        </div>
        <div class="form-group">
          <label for="paulFormControlTextarea1">How can we help?</label>
          <textarea
            class="form-control"
            id="paulFormControlTextarea1"
            rows="3"
            placeholder="Enter your message..."
            bind:value={message}
            name="message"
            required
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="paulCheck1" required />
          <label class="form-check-label" for="paulCheck1"
            >I ALLOW THIS WEBSITE TO STORE MY SUBMISSION SO THEY CAN RESPOND TO MY INQUIRY.</label
          >
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>
        <Button type={'submit'} text={'Submit'} color={'#FFF'} background_color={'#29397a'} />
      </form>
    </Col>
  </Row>
</Container>

<div class="duplex normal-container container">
  <div
    class="duplex-container normal-image {data.duplexes[0].containerLayout ? '' : 'row-reverse'}"
  >
    <div class="left-container">
      <img src="https://images.ctfassets.net/edlwcd8ay884/2BvKT5oEH7IXor9AofvNSs/1f76cba456f15d61751dc779b10d71ea/IMG_20230309_194249_818.jpg" alt="">
      <!-- <CarouselDefault /> -->
    </div>
    <div class="right-container">
      {#if data.duplexes[0].tagline}
        <p class="tagline">{data.duplexes[0].tagline}</p>
      {/if}
      {#if data.duplexes[0].headline}
        <h3><TextWithLineBreaks inputText={data.duplexes[0].headline} /></h3>
      {/if}
      {#if data.duplexes[0].bodyText}
        <p>{@html data.duplexes[0].bodyText}</p>
      {/if}
      {#if data.duplexes[0].ctaText != null}
        <ButtonLink
          text={data.duplexes[0].ctaText || 'Learn More'}
          path={data.duplexes[0].targetPage ? `${data.duplexes[0].targetPage}` : '/contact'}
          color={'#FFF'}
          background_color={'#D93561'}
          ariaText={data.duplexes[0].ctaText}
          ariaLink={data.duplexes[0].targetPage}
        />
      {/if}
    </div>
  </div>
</div>

<style>
  .wave {
    animation-name: wave-animation; 
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  @keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
  }

  h1 {
    font-weight: 400;
    text-align: left;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 900;
    color: #29387a;
  }

  .form-group label {
    font-weight: 800;
  }

  .form-control {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #000;
    margin-bottom: 1rem;
  }



  .tagline {
    font-family: 'PolySans Median', Arial, Helvetica, sans-serif;
    color: #d93561;
    text-transform: uppercase;
  }

  .duplex-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .right-container {
    display: grid;
    margin: 0 auto 0 6rem;
    padding: 4rem 0;
  }

  .left-container {
    padding: 0;
  }

  .row-reverse,
  .row-reverse .right-container {
    transform: scaleX(-1);
  }

  .row-reverse .right-container {
    grid-template-rows: 1fr auto;
    padding: 4rem;
    align-self: center;
  }

  .row-reverse.small-image .right-container * {
    text-align: right;
    align-self: self-end;
    margin-left: auto;
  }

  .duplex-container :global(h3.big) {
    font-size: 4.5rem;
    color: #29397a;
    margin-bottom: 2rem;
  }

  .duplex-container :global(h3) {
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 4rem;
    margin-bottom: 0.25rem;
    align-self: self-end;
  }

  .duplex-container :global(h3.small) {
    font-family: 'PolySans Neutral', Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 0.25rem;
    align-self: self-end;
  }

  .duplex-container :global(p) {
    font-family: 'PolySans Slim', Arial, Helvetica, sans-serif;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.25px;
    margin: 1rem 0;
    text-align: left;
    align-self: center;
  }

  .duplex-container :global(ol:first-of-type > li > p:not(ol li ol li p)) {
    font-family: 'PolySans Slim', Arial, Helvetica, sans-serif;
    font-size: 4.5rem;
  }

  .duplex-container :global(p b) {
    font-family: 'PolySans Median', Arial, Helvetica, sans-serif;
  }

  .duplex-container :global(ul li p) {
    margin: 0.5rem 0;
  }

  .duplex-container :global(h5 b) {
    color: #d93561;
  }

  .normal-image {
    padding: 3rem 0;
  }

  .normal-image .left-container {
    /* max-height: 440px; */
    max-width: 420px;
    margin: 0 auto;
  }

  .duplex-container :global(ol) {
    list-style: none;
    counter-reset: numList;
  }

  .duplex-container :global(ol li) {
    /* margin-right: 44px; */
    position: relative;
  }

  .duplex-container :global(ol:first-child > li::before) {
    counter-increment: numList;
    content: counter(numList);

    float: left;
    position: absolute;
    left: -50px;
    top: 0.5rem;

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

  .duplex :global(.sc-carousel__arrow-container ){
    display: none;
  }

  .duplex :global(.sc-carousel__pages-container img) {
    width: 100%;
    height: 100%;
  }

  .duplex :global(.sc-carousel-dots__container) {
    display: none !important;
  }

  @media only screen and (max-width: 768px) {
    

    .duplex-container :global(p) {
      text-align: center;
      align-self: normal;
    }

    .row-reverse.small-image .right-container * {
      text-align: center;
      align-self: auto;
      margin: 1rem auto;
    }

    .row-reverse .right-container,
    .right-container {
      width: 100%;
      padding: 3rem;
    }
    .right-container {
      margin: 4rem auto;
      text-align: center;
    }

    .right-container :global(h3) {
      font-size: 3.5rem;
      margin: 1rem auto;
    }

    .right-container :global(p) {
      max-width: 97.5%;
      margin: 0.5rem auto;
    }

    .right-container :global(a) {
      margin: 2rem auto;
    }
  }

  @media only screen and (max-width: 991px) {
    .duplex-container {
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (max-width: 1250px) {
    .right-container {
      padding: 2rem 1rem;
    }
  }

  @media only screen and (max-width: 1680px) {
    .right-container {
      /* max-width: 640px; */
      margin: 0 auto;
      padding: 2rem;
    }
  }
</style>
