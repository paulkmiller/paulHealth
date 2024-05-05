<script>
  import Duplex from '$lib/Duplex.svelte'
  import ButtonLink from '$lib/Button/ButtonLink.svelte'
  import SEOMetaData from '$lib/SEOMetaData.svelte'

  export let data 

  let image = data.article.articleImage.url
  let caption = data.article.articleImage.description
  
  let headline = data.article.pageContentCollection.items[0].headline
  let author = data.article.pageContentCollection.items[0].author.name
  let avatar = data.article.pageContentCollection.items[0].author.avatar.url
  let lastEdited = data.article.pageContentCollection.items[0].sys.publishedAt
  let published = data.article.pageContentCollection.items[0].publishDate
  let article = data.article.pageContentCollection.items[0].bodyText

  let newsFeatured = data.newsFeaturedDuplex && data.newsFeaturedDuplex.length > 0 ? data.newsFeaturedDuplex[0] : data.defaultFeatured[0];
  let defaultFeatured = data.defaultFeatured[0]
  
  // Assuming the ComponentDuplex items are stored in the duplexes array
  let duplexData = data.duplexes[0]

  $: renderData = newsFeatured && newsFeatured.pageContentCollection && newsFeatured.pageContentCollection.items[0].headline === headline ? newsFeatured : duplexData;
  function formatDate(dateString) {
    let date = new Date(dateString)
    let options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }
</script>

{#if data.seoData.title}
  <!-- <SEOMetaData {data} /> -->
{/if}

<article>
  <header>
    <figure>
      <img src={image} alt="" />
      <figcaption>{caption}</figcaption>
    </figure>
    <div class="author-container">
      <h1>{headline}</h1>
      <div class="author-wrapper">
        <div class="author">
          <img src={avatar} alt="" />
          <p>by {author}</p>
        </div>
        <div class="timestamp">
          <span>Updated <span class="updated-date">{formatDate(lastEdited)}</span> <span style="color: #d4d4d4">|</span> Published</span>
          <span>{published}</span>
        </div>
      </div>
    </div>
  </header>
  <div class="article-body">
    {@html article}
    <ButtonLink
      text={'More News'}
      path={"/news"}
      color={'#FFF'}
      background_color={'#29397a'}
      ariaText="more news"
      ariaLink="news"
    />
  </div>
</article>

<section class="news-duplex-wrapper-wide news-duplex-wrapper">
  <Duplex data={renderData || newsFeatured} />
</section>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  figcaption {
    font-size: .875rem;
    font-family: Franklin, arial, sans-serif;
    line-height: 1.25;
    padding: 0.75rem 2rem;
    color: #666666;
    text-align: center;
  }

  header .author-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 100%;
  }

  header .author-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  header div h1 {
    font-family: 'PolySans Slim', Arial, sans-serif;
    width: clamp(80%, 100%, 800px);
    margin: 1rem auto;
    padding: 0 2rem;
    line-height: 1.1em;
    font-size: 4rem;
  }

  .author img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
  }

  .article-body {
    width: clamp(60%, 100%, 940px);
    margin: 2rem auto;
    padding: 2rem;
  }

  .timestamp {
    text-align: center;
    grid-template-columns: 1fr 1fr;
  }

  .timestamp span {
    font-size: .875rem;
    font-family: Franklin,arial,sans-serif;
    line-height: 1.25;
    padding: 0;
    color: #666666;
  }

  :global(.article-body p) {
    font-size: 1.25rem;
    line-height: 1.6em;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 3/2;
  }

  :global(.article-body img) {
    max-height: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    header {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }

    figure {
      margin-bottom: 4rem;
    }
    
    figcaption {
      height: auto;
    }
    .article-body {
      margin: 1rem auto;
    }
  }

  @media (max-width: 1024px){
    header div h1 {
      font-size: 3rem;
    }
  }
  
</style>
