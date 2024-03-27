<script>
    export let type;
    export let text;
    export let background_color;
    export let color = "";

    if ( background_color === "" ){
      background_color = "#fff"
    }

    if (color === ""){
      color = "#29397a"
    }
</script>

  <button type={type} style="--link-color: {color}; --background-color: {background_color};">
      {text}
  </button>

<style>
  button{
    position: relative;
    display: inline-block;
    width: 100%;
    margin: 1rem auto;
    padding: 1rem 3rem;
    background: var(--background-color);
    border: none;
    border-radius: 30px;
    color: var(--link-color);
    line-height: 18px;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    transition: all 0.25s ease-out;
    z-index: 1;
  }

  button:hover{
    cursor: pointer;
    box-shadow: #444444 0.2rem 0.3rem 0.3rem;   
    color: #fff; 
  }

  button::before {
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

  button:hover::before {
    opacity: 1;
  }
</style>