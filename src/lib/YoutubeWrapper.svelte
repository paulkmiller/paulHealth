<script>
  import Youtube from 'svelte-youtube-embed';
  import FaPlayCircle from 'svelte-icons/fa/FaPlayCircle.svelte';

  let playOverlay = '/playIconBackground.png'; 

  export let data
</script>

<section class="youtube-wrapper .sb-section">
  <div
    alt=""
    style="background-image: url({data.youTubeImage.url}?fm=webp&q=80);"
    class="background"
  />
  <div class="container">
    <div class="row">
      <div class="content-container">
        <div class="copy">
          <div>
            <p>{data.contentTitle}</p>
            <h3>{data.contentSubtitle}</h3>
          </div>
        </div>
        <div class="youtube">
          <span class="play_overlay" style="background-image: url({playOverlay});"></span>

          <Youtube id="{data.youTubeId}">
            <button class="play_icon" aria-label="A button play a YouTube video."><FaPlayCircle /></button>
          </Youtube>
        </div>

      </div>
    </div>
  </div>
</section>

<style>
  .youtube-wrapper {
    align-items: center;
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: auto;
    padding: 20px;
  }

  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: center;
    background-size: cover;
  }

  .container {
    display: flex;
    flex: 100%;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    position: relative;
    z-index: 200;
    height: 100%;
  }

  p {
    font-family: 'PolySans Median', Arial, sans-serif;
    font-size: 1.25rem;
    color: #D93561;
    margin: 1rem 0;
  }

  h3 {
    font-family: 'PolySans Neutral', Arial, sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
  }

  .content-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-right: auto;
    margin-left: 0;
    text-align: left;
    justify-content: flex-start;
  }

  .copy {
    width: 100%;
  }

  .copy > div {
    max-width: 23rem;
    margin: 0 auto;
  }

  .youtube {
    position: relative;
    height: 100%;
    width: 100%;
}

  .youtube :global(iframe) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  }


  .youtube-wrapper {
    width: 100%;
    flex: 0 0 50%;
  }

  .row {
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    padding: 80px 0;
  }

  :global(.b__overlay, .v__title, .you__tube img) {
    opacity: 0;
  }

  :global(.play-button) {
    height: 7em;
    width: 7em;
  }

  .play_overlay {
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  .play_icon {
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: rgba(255,255,255,0.5);
    transition: all .1s ease-in-out;
    cursor: pointer;
  }

  .youtube:hover .play_icon {
    color: #fff;
  }

  @media (max-width:768px){
    .content-container {
      display: block;
      text-align: center;
    }
    p {
      opacity: 0;
    }
  }
</style>