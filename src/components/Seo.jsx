import { useEffect } from 'react'

const SITE_NAME = 'Randazzo Designs'
const SITE_URL = 'https://randazzodesignsai.com'
const DEFAULT_IMAGE = `${SITE_URL}/social-share.png`

function setMeta(selector, attribute, value) {
  const element = document.querySelector(selector)

  if (element) {
    element.setAttribute(attribute, value)
  }
}

function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  imageAlt = 'Randazzo Designs — Design. Technology. Imagination.',
}) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    const fullTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`

    document.title = fullTitle

    setMeta('meta[name="description"]', 'content', description)

    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:image"]', 'content', image)
    setMeta('meta[property="og:image:alt"]', 'content', imageAlt)

    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', image)
    setMeta('meta[name="twitter:image:alt"]', 'content', imageAlt)

    const canonical = document.querySelector('link[rel="canonical"]')

    if (canonical) {
      canonical.setAttribute('href', url)
    }
  }, [title, description, path, image, imageAlt])

  return null
}

export default Seo