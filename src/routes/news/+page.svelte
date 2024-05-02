<script>
  import Container from '$lib/Bootstrap/Container.svelte'
  import Row from '$lib/Bootstrap/Row.svelte'
  import Col from '$lib/Bootstrap/Col.svelte'
  import Duplex from '$lib/Duplex.svelte'
  import ButtonLink from '$lib/Button/ButtonLink.svelte'


  export let data

  let bottomNewsItems = data.newsPages.slice(3).map(item => {
    const { headline, image, previewText, publishDate } = item.pageContentCollection.items[0];
    return { headline, image, previewText, publishDate, slug: item.slug };
  });

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
  <Row style="margin-top: 3rem;">
    <Col sm={12} md={6} lg={8} class="latest">
      <div class="main-content">
        <h1>Paul Health News</h1>
        <span class="divider-full" />
        <img src={newsPages[0].image.url} alt={newsPages[0].headline} />
        <p class="date">{data.newsPages[0].pageContentCollection.items[0].publishDate}</p>
        <h7>{newsPages[0].headline}</h7>
        <p class="">{@html newsPages[0].previewText}</p>
        <a href="/news/{newsPages[0].slug}">READ MORE</a>
      </div>
    </Col>
    <Col sm={12} md={6} lg={4} class="latest">
      <Row>
        <h2 class="latestHeader">Latest Stories</h2>
        <span class="divider" style="margin-top:0;"/>
        <p class="date">{data.newsPages[1].pageContentCollection.items[0].publishDate}</p>
        <h7>{newsPages[1].headline}</h7>
        <p class="">{@html newsPages[1].previewText}</p>
        <a href="/news/{newsPages[1].slug}">READ MORE</a>
      </Row>
      <span class="divider-full-left" style="margin-left: -0.75rem"/>
      <Row>
        <p class="date">{data.newsPages[2].pageContentCollection.items[0].publishDate}</p>
        <h7>{newsPages[2].headline}</h7>
        <p class="">{@html newsPages[2].previewText}</p>
        <a href="/news/{newsPages[2].slug}">READ MORE</a>
      </Row>
    </Col>
  </Row>

  <h2 style="padding: 0 .75rem">More News</h2>
  <span class="divider-right" />
  <Row class="justify-content-center">
    <Col sm={12} md={12} lg={12} class="more-news">
      <Row>
        {#each bottomNewsItems as { headline, image, previewText, publishDate, slug }}
          <div class="show col-12 col-md-6 col-lg-3 mb-2">
            <div class="content">
              <img src={image.url} alt={headline} style="width:100%" />
              <p class="date">{formatDate(publishDate)}</p>
              <b><h7>{headline}</h7></b>
              <p class="truncate-4">{@html previewText}</p>
              <a href="/news/{slug}">READ MORE</a>
            </div>
          </div>
        {/each}
        <ButtonLink
          text={'Read More News'}
          path={'/news/all'}
          color={'#FFF'}
          background_color={'#29397a'}
          ariaText="A button that links to the News All page, which displays all news articles on one page"
          ariaLink="/news/all"
        />
      </Row>
    </Col>
  </Row>
</Container>

<section class="news-duplex-wrapper-wide">
  <Duplex data={data.newsFeaturedDuplex[0]}  />
</section>

<style>
  a {
    display: block;
    padding: 0;
    margin: 0 0 1rem 0;
    color: #D93561;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 1;
    border-bottom: 1px solid #D93561;
    cursor: pointer;
    max-width: fit-content;
    font-family: 'PolySans Neutral', Arial, sans-serif;
  }

  a:hover {
    color: #29397a;
    border-bottom: 2px solid #29397a
  }

  p {
    margin: 0 0 0.5rem;
    position: relative;
    color: rgba(0,0,0,.85);
    padding: 0;
  }

  .date {
    font-family: 'PolySans Neutral', Arial, sans-serif;
    font-size: 0.875rem;
    color: #636363;
    margin: 1rem 0 0.75rem;
  }

  h1 {
    font-size: 4.5rem;
    text-align: left;
    font-weight: 500;
    color: #29397a;
    margin-top: -1rem;
    max-height: 60px;
    line-height: 68px;
  }

  h2 {
    font-weight: 400;
    text-align: left;
    margin-bottom: 0.5rem;
    color: #29397a;
    padding: 0;
  }

  h7 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-family: 'PolySans Neutral', Arial, sans-serif;
    font-weight: 500;
    padding: 0;
  }

  .latestHeader { 
    padding-top: 1rem; 
  }

  .divider {
    display: block;
    height: 1px;
    background-color: gray;
    width: calc(100% - 2rem);
    margin: 1rem 0;
  }

  .divider-right {
    display: block;
    height: 1px;
    background-color: gray;
    width: calc(100% - 2rem);
    margin: 1rem;
  }

  .divider-full {
    display: block;
    height: 1px;
    background-color: gray;
    width: 100%;
    margin: 1rem auto 2rem;
  }

  .divider-full-left {
    display: block;
    height: 1px;
    background-color: gray;
    width: 100%;
    margin: 1rem auto 2rem -0.75rem;
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
    .divider {
      margin-left: 0.8rem;
      width: calc(100% - 1.6rem);
    }
    .divider-full {
      margin: 1rem 0 1rem;
    }
    img {
      width: 100%;
      max-height: 340px;
      margin: 0 auto;
    }
    :global(.more-news) {
      margin-bottom: 0rem;
    }
    .latestHeader {
      padding-top: 2rem;
    }
    :global(.latest .row) {
      display: block;
      padding: 0;
      margin: 0;
    }
    .main-content h1 {
      max-height: 40px;
    }
  }

  @media (max-width: 905px) {
    h1 {
      max-height: fit-content;
    }
  }

  @media (max-width: 991px) {
   h1 {
    font-size: 3rem;
   } 
  }
</style>
