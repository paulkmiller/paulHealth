<script>
  import Container from '$lib/Bootstrap/Container.svelte'
  import Row from '$lib/Bootstrap/Row.svelte'
  import Col from '$lib/Bootstrap/Col.svelte'
  import ButtonLink from '$lib/Button/ButtonLink.svelte'

  export let data

  function formatDate(dateString) {
    let date = new Date(dateString)
    let options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  data.newsPages.sort(
    (a, b) =>
      new Date(b.pageContentCollection.items[0].publishDate) -
      new Date(a.pageContentCollection.items[0].publishDate)
  )

  let newsPages = data.newsPages.map(page => {
    const { headline, image, previewText, publishDate } = page.pageContentCollection.items[0];
    return { headline, image, previewText, publishDate, slug: page.slug };
  });
</script>

<svelte:head>
  <title>Paul Health: News</title>
	<meta name="description" content="Find out what's on our radar here at Paul Health.">
	<meta property="og:title" content="Paul Health: News">
	<meta property="og:description" content="Find out what's on our radar here- at Paul Health.">
	<meta property="og:image" content="/paul_logo.svg">
	<meta property="og:type" content="website">
</svelte:head>

<Container class="custom">
  <Row class="justify-content-center">
    <Col sm={12} md={12} lg={12} class="more-news">
      <Row>
        {#each newsPages as { headline, image, previewText, publishDate, slug }}
        <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="card">
            <img src={image.url} class="card-img-top" alt={headline} />
            <div class="card-body">
              <h5 class="card-title">{headline}</h5>
              <p class="card-text">{@html previewText}</p>
              <p class="card-text"><small class="text-muted">{formatDate(publishDate)}</small></p>
              <a href="/news/{slug}" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        
        {/each}
      </Row>
      <ButtonLink
        text={'Back'}
        path={'/news'}
        color={'#FFF'}
        background_color={'#29397a'}
        ariaText="A button that returns the user to the News page"
        ariaLink="/news"
      />
    </Col>
  </Row>
</Container>

<style>
  a {
    display: block;
    margin: 0 0 1rem 0;
    color: #D93561;
    text-transform: uppercase;
    cursor: pointer;
  }

  a:hover {
    color: #29397a;
    text-decoration: underline;
  }

  p {
    margin: 0 0 0.5rem;
    position: relative;
    color: rgba(0,0,0,.85)
  }

  img {
    aspect-ratio: 3/2;
    object-fit: cover;
  }

  :global(.custom.container) {
    max-width: 1440px;
  }

  :global(.latest),
  :global(.more-news) {
    padding: 0 1.5rem;
  }

  :global(.more-news) {
    margin-bottom: 6rem;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      max-height: 340px;
      margin: 0 auto;
    }
    :global(.more-news) {
      margin-bottom: 0rem;
    }
  }
</style>
