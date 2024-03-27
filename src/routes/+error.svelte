<script>
  import ButtonLink from '$lib/Button/ButtonLink.svelte'

  console.log(
    '%cShoutout to %cSaleh Riaz%c for their lovely SVGs & design: %chttps://www.salehriaz.com/',
    'font-size: 16px; color: white;',
    'font-size: 16px; color: red; font-weight: bold;',
    'font-size: 16px; color: white;',
    'font-size: 16px; color: green; text-decoration: underline;'
  )
</script>

<div class="space">
  <div class="stars">
    <div class="content">
      <div class="error">
        <div class="error__title">404</div>
        <div class="error__subtitle">Hmmm...</div>
        <div class="error__description">It looks like one of the developers fell asleep</div>
        <span class="space__button">
          <ButtonLink
            text={'Report An Error-oid ☄️'}
            path={'/contact'}
            color={'#FFF'}
            background_color={'#D93561'}
            ariaText="A button that links to the contact page"
            ariaLink="/contact"
          />
        </span>
      </div>
    </div>
    <div class="objects">
      <img class="object_rocket" src="/rocket.svg" width="50px" alt="A red rocket."/>
      <div class="earth-moon">
        <img class="object_earth" src="/earth.svg" width="100px" alt="A blue Earth."/>
        <img class="object_moon" src="/moon.svg" width="80px" alt="A grey moon."/>
      </div>
      <div class="box_astronaut">
        <img
          class="object_astronaut"
          src="/astronaut.svg"
          width="70px"
          alt="A lost astronaut."
        />
      </div>
    </div>
    <div class="glowing_stars">
      <div class="star" />
      <div class="star" />
      <div class="star" />
      <div class="star" />
      <div class="star" />
    </div>
  </div>
</div>

<style>
  @-moz-keyframes rocket-movement {
    100% {
      -moz-transform: translate(1200px, -600px);
    }
  }
  @-webkit-keyframes rocket-movement {
    100% {
      -webkit-transform: translate(1200px, -600px);
    }
  }
  @keyframes rocket-movement {
    100% {
      transform: translate(1200px, -600px);
    }
  }
  @-moz-keyframes spin-earth {
    100% {
      -moz-transform: rotate(-360deg);
      transition: transform 20s;
    }
  }
  @-webkit-keyframes spin-earth {
    100% {
      -webkit-transform: rotate(-360deg);
      transition: transform 20s;
    }
  }
  @keyframes spin-earth {
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
      transition: transform 20s;
    }
  }

  @-moz-keyframes move-astronaut {
    100% {
      -moz-transform: translate(-160px, -160px);
    }
  }
  @-webkit-keyframes move-astronaut {
    100% {
      -webkit-transform: translate(-160px, -160px);
    }
  }
  @keyframes move-astronaut {
    100% {
      -webkit-transform: translate(-160px, -160px);
      transform: translate(-160px, -160px);
    }
  }
  @-moz-keyframes rotate-astronaut {
    100% {
      -moz-transform: rotate(-720deg);
    }
  }
  @-webkit-keyframes rotate-astronaut {
    100% {
      -webkit-transform: rotate(-720deg);
    }
  }
  @keyframes rotate-astronaut {
    100% {
      -webkit-transform: rotate(-720deg);
      transform: rotate(-720deg);
    }
  }

  @-moz-keyframes glow-star {
    40% {
      -moz-opacity: 0.3;
    }
    90%,
    100% {
      -moz-opacity: 1;
      -moz-transform: scale(1.2);
    }
  }
  @-webkit-keyframes glow-star {
    40% {
      -webkit-opacity: 0.3;
    }
    90%,
    100% {
      -webkit-opacity: 1;
      -webkit-transform: scale(1.2);
    }
  }
  @keyframes glow-star {
    40% {
      -webkit-opacity: 0.3;
      opacity: 0.3;
    }
    90%,
    100% {
      -webkit-opacity: 1;
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      border-radius: 999999px;
    }
  }

  .error {
    height: 100%;
    width: 100%;
    z-index: 2;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'PolySans Slim', Arial, Helvetica, sans-serif;
    color: #fff;
  }

  .error__title {
    font-size: 10em;
  }

  .error__subtitle {
    font-size: 2em;
  }

  .space {
    display: flex;
    position: relative;
    height: calc(100vh - 21.9rem);
    min-height: 500px;
    background: radial-gradient(circle at center bottom, #70376f, #3d2f62);
    align-items: center;
    justify-content: center;
  }

  .content {
    height: 100%;
    width: 100%;
    text-align: center;
  }

  .objects img {
    z-index: 90;
    pointer-events: none;
  }

  .space__button {
    margin-top: 2rem;
  }

  .object_rocket {
    z-index: 95;
    position: absolute;
    transform: translateX(-50px);
    top: 75%;
    pointer-events: none;
    animation: rocket-movement 100s linear infinite both running;
  }

  .object_earth {
    position: absolute;
    top: 20%;
    left: 15%;
    z-index: 90;
  }

  .object_moon {
    position: absolute;
    top: 12%;
    left: 25%;
  }

  .object_astronaut {
    animation: rotate-astronaut 200s infinite linear both alternate;
  }

  .box_astronaut {
    position: absolute;
    top: 60%;
    right: 20%;
    will-change: transform;
    animation: move-astronaut 50s infinite linear both alternate;
  }

  .stars {
    height: 100%;
    width: 100%;
    background: url(/overlay_stars.svg);
    background-repeat: repeat;
    background-size: contain;
    background-position: left top;
  }

  .glowing_stars .star {
    position: absolute;
    border-radius: 100%;
    background-color: #fff;
    width: 3px;
    height: 3px;
    opacity: 0.3;
    will-change: opacity;
  }

  .glowing_stars .star:nth-child(1) {
    top: 80%;
    left: 25%;
    animation: glow-star 2s infinite ease-in-out alternate 1s;
  }
  .glowing_stars .star:nth-child(2) {
    top: 20%;
    left: 40%;
    animation: glow-star 2s infinite ease-in-out alternate 3s;
  }
  .glowing_stars .star:nth-child(3) {
    top: 25%;
    left: 25%;
    animation: glow-star 2s infinite ease-in-out alternate 5s;
  }
  .glowing_stars .star:nth-child(4) {
    top: 75%;
    left: 80%;
    animation: glow-star 2s infinite ease-in-out alternate 7s;
  }
  .glowing_stars .star:nth-child(5) {
    top: 90%;
    left: 50%;
    animation: glow-star 2s infinite ease-in-out alternate 9s;
  }

  @media only screen and (max-width: 768px) {
    .box_astronaut {
      top: 70%;
    }

    .space {
      height: calc(100vh - 39.4rem);
    }

    .error {
      backdrop-filter: brightness(70%);
    }
  }
</style>
