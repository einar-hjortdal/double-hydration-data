import { detectIsNull, detectIsUndefined } from '@dark-engine/core'

import { metaContent } from './metaContent'
import it from '../shared/translations/messages/it'
import en from '../shared/translations/messages/en'
import nl from '../shared/translations/messages/nl'
import { detectIsEmptyString } from '@wareme/utils'

export const pathnameHasMeta = (pathname) => {
  if (pathname === '/') {
    return 'home'
  }

  const metaKey = pathname.substring(pathname.lastIndexOf('/') + 1)
  if (metaContent[metaKey]) {
    return metaKey
  }
  return null
}

// getRugSlug returns the rug slug if the basePathname is for a rug.
export const getRugSlug = (basePathname) => {
  if (basePathname === '/') {
    return null
  }

  // `/shop/cate` -> `['', 'shop', 'cate']`
  const splitBasePathname = basePathname.split('/')
  if (splitBasePathname.length !== 3 || splitBasePathname[1] !== 'shop') {
    return null
  }

  return splitBasePathname[2]
}

// routeHasMeta returns the key of the meta object if the route has meta data. Returns null otherwise.
export const routeHasMeta = (routePath, parentPath) => {
  if (detectIsEmptyString(routePath) && parentPath === '/') {
    return 'home'
  }

  if (detectIsEmptyString(routePath)) {
    return routeHasMeta(parentPath)
  }

  if (detectIsUndefined(metaContent[routePath])) {
    return null
  }

  return routePath
}

export const getMeta = (metaKey, language, name) => {
  const fallback = metaContent.fallback[name]
  if (detectIsNull(metaKey)) {
    return fallback
  }

  const seoObject = metaContent[metaKey]
  const inLanguage = seoObject[language]
  if (detectIsUndefined(inLanguage)) {
    return fallback
  }

  const match = inLanguage[name]
  if (detectIsUndefined(match)) {
    return fallback
  }
  return match
}

export const getMessagesSync = (lang) => {
  if (lang === 'it') {
    return it
  }
  if (lang === 'nl') {
    return nl
  }

  // fallback language
  return en
}
