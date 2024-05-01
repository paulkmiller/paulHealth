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
	<meta property="og:image" content="/pluto_logo.svg">
	<meta property="og:type" content="website">
</svelte:head>

<Container class="custom">
  <Row class="justify-content-center">
    <Col sm={12} md={12} lg={12} class="more-news">
      <Row>
        {#each newsPages as { headline, image, previewText, publishDate, slug }}
          <div class="show col-12 col-md-6 col-lg-3 mb-2">
            <div class="content">
              <img src={image.url} alt={headline} style="width:100%" />
              <p class="date">{publishDate}</p>
              <b><h7>{headline}</h7></b>
              <p class="truncate-4">{@html previewText}</p>
              <a href="/news/{slug}">READ MORE</a>
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

  .date {
    font-family: 'PolySans Neutral', Arial, sans-serif;
    font-size: 0.875rem;
    color: #636363;
    margin: 1rem 0 0.75rem;
  }

  h7 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-family: 'PolySans Neutral', Arial, sans-serif;
    font-weight: 500;
  }

  img {
    aspect-ratio: 3/2;
    object-fit: cover;
  }

  .show {
    display: flex;
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
