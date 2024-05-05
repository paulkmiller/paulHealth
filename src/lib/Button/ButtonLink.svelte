<script>
    export let path
    export let text
    export let background_color
    export let color = ""
    export let ariaText
    export let ariaLink
    export let delay = 0
    export let aos_delay = 200
    export let aos_anim

    if ( background_color === "" ){
      background_color = "#fff"
    }

    if (color === ""){
      color = "#29397a"
    }

    ariaText = ariaText.toLowerCase();

    // Make ariaLink human readable
    ariaLink = ariaLink.replace(/\//g, ' ').replace(/-/g, ' ').trim();
</script>

  <a 
    href={path} 
    style="--link-color: {color}; --background-color: {background_color};"
    aria-label="A call to action button inviting the user to {ariaText} by visiting the {ariaLink} page."
    data-aos="{aos_anim}"
    data-aos-easing="ease-in-back"
    data-aos-delay="{delay + aos_delay}"
    data-aos-offset="0"
    >
      {text}
  </a>

<style>
  a{
    position: relative;
    display: inline-block;
    padding: 1rem 3rem;
    background: var(--background-color);
    border: none;
    border-radius: 30px;
    font-family: 'PolySans Neutral', Arial, sans-serif;
    color: var(--link-color);
    font-size: 1.1rem;
    line-height: 1.1rem;
    text-align: center;
    text-decoration: none;
    transition: all 0.25s ease-out;
    z-index: 1;
    margin: 1.5rem 0;
    width: fit-content;
    align-self: self-start;
  }

  a:hover{
    cursor: pointer;
    box-shadow: #444444 0.2rem 0.3rem 0.3rem;   
    color: #fff; 
  }

  a::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg,rgba(173,235,239,1) 0%, rgba(41,57,122,1) 30%, rgba(218,47,92,1) 70%, rgba(255,193,38,1) 100%);
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
    border-radius: 30px;
  }

  a:hover::before {
    opacity: 1;
  }
</style>