<script>
  import FaFacebookF from 'svelte-icons/fa/FaFacebookF.svelte'
  import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
  import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte'

  let logoLight = '/pluto_logo.svg';
</script>

<footer class="footer">
  <div class="left-section">
    <div class="column">
      <div class="logo_wrapper">
        <a href="/" aria-label="Pluto Health logo that works as a link back to the home page.">
          <div class="logo" style="background-image: url({logoLight})"/>
        </a>
      </div>
      <p>WE'RE DEDICATED TO IMPROVING CARE. <br>
      Everything we do orbits around patients.​</p>
      <small>
        <span>600 Park Offices Drive, Suite 300 Durham, NC 27709</span>
        <br>
        <span>© 2021 Pluto Health, Inc. All rights reserved.</span></small>
    </div>
  </div>
  <div class="right-section">
    <div class="column">
      <a href="/how-it-works" aria-label="Link to Pluto Health's how it works page.">How it works</a>
      <a href="/services/patients" aria-label="Link to Pluto Health's patients page.">Patients</a>
      <a href="/services/clinicians" aria-label="Link to Pluto Health's clinicians page.">Clinicians</a>
      <a href="/services/researchers" aria-label="Link to Pluto Health's researchers page.">Researchers</a>
    </div>
    <!-- <div class="column">
      <a href="/news" aria-label="Link to Pluto Health's news page.">News</a>
      <a href="/contact" aria-label="Link to Pluto Health's contact page.">Contact</a>
      <a href="/about" aria-label="Link to Pluto Health's about page.">About</a>
    </div> -->
    <div class="column">
      <a href="/contact" aria-label="Link to Pluto Health's contact page.">Contact</a>
      <a href="https://plutohealth.zendesk.com/hc/en-us" aria-label="Link to Pluto Health's help center.">Help Center</a>
      <a href="/legal" aria-label="Link to Pluto Health's privacy and terms of use page.">Privacy & <br> Terms of Use</a>
    </div>
    <div class="social-media-container">
      <a href="https://twitter.com" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Link to Pluto Health's Twitter">
        <FaTwitter />
      </a>
      <a href="https://facebook.com" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Link to Pluto Health's Facebook">
        <FaFacebookF />
      </a>
      <a href="https://linkedin.com" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Link to Pluto Health's LinkedIn">
        <FaLinkedinIn />
      </a>
    </div>
  </div>
</footer>

<style>
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 4rem;
    background-color: #29397a;
    color: #fff;
  }
  small {
    font-size: 14px;
    margin-top: 4rem;
    text-transform: none;
  }
  .left-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 500px;
    padding-right: 2rem;
    order: 1;
  }
  .left-section p {
    font-family: 'PolySans Neutral', Arial, sans-serif;
  }
  .right-section {
    display: flex;
    justify-content: space-between;
    position: relative;
    order: 2;
  }
  .column {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
  }
  .column a {
    font-family: 'PolySans Neutral', Arial, sans-serif;
    font-weight: 400;
    text-decoration: none;
    margin-bottom: 0.5rem;
    color: #fff;
  }
  .column a:hover {
    text-decoration: underline;
  }
  .social-icon {
    color: #fff;
  }
  .logo {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 3em;
    width: 5rem;
  }
  .social-media-container {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-top: 1rem;
    margin-bottom: 8px;
    margin-right: 5px;
  }

  .social-icon {
    text-decoration: none;
    max-height: 20px;
    max-width: 30px;
  }

  .social-icon:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 1000px) {
    .footer {
      padding: 4rem 2rem;
    }
  }
  @media screen and (max-width: 767px) {
    .footer {
      flex-direction: column-reverse;
      padding: 3rem 2rem;
      text-align: center;
    }
    .left-section {
      max-width: 100%;
    }
    .left-section p {
      margin: 3rem 0;
    }
    .right-section {
      flex-direction: column;
      align-items: flex-start;
    }
    .column {
      margin-bottom: 1rem;
      width: 100%;
    }
    .social-media-container {
      visibility: hidden;
    }
    small {
      margin-top: 0;
    }
    .logo {
      margin-left: calc(50% - 20px);
      margin-right: calc(-50%);
    }
  }
</style>
