import { component, detectIsString } from '@dark-engine/core'
import { detectIsEmptyString, freeze } from '@wareme/utils'

import { config } from '../../shared/config'

const getSocial = (socialUsername, socialBaseUrl) => {
  if (detectIsString(socialUsername) && !detectIsEmptyString(socialUsername)) {
    return `${socialBaseUrl}${socialUsername}`
  }
}

const socials = freeze([
  {
    username: config.instagramUsername,
    baseUrl: 'https://instagram.com/'
  },
  {
    username: config.facebookUsername,
    baseUrl: 'https://facebook.com/'
  },
  {
    username: config.twitterUsername,
    baseUrl: 'https://twitter.com/'
  }
])

const getSameAs = () => {
  const res = []
  // process socials
  for (let i = 0, len = socials.length; i < len; i++) {
    const { username, baseUrl } = socials[i]
    const socialLink = getSocial(username, baseUrl)
    if (detectIsString(socialLink)) {
      res.push(socialLink)
    }
  }
  return res
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: config.addressStreet,
  addressLocality: config.addressCity,
  postalCode: config.addressZip,
  addressCountry: config.addressCountry
  // geo: {latitude: , longitude: }
}

const getContactLinkedData = (description) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    currenciesAccepted: 'Euro',
    openingHours: [
      'Tu-Sa 09:00-12:00',
      'Tu-Sa 15:00-19:00'
    ],
    paymentAccepted: [
      'Debit Card',
      'Cash',
      'Credit Card'
    ],
    inLanguage: 'en',
    // acceptedPaymentMethod: [{}],
    address: postalAddress,
    areaServed: [
      {
        '@type': 'Continent',
        name: 'Europe'
      }
    ],
    // award
    // brand
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: config.contactPhone,
      email: config.contactEmail
    },
    // correctionsPolicy
    // department
    email: config.contactEmail,
    // employee
    // ethicsPolicy
    // event
    foundingDate: '2025-01-01',
    foundingLocation: {
      '@type': 'Place',
      name: 'Amersfoort',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Amersfoort',
        addressCountry: 'Netherlands'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.15704836127124,
        longitude: 5.390802969740859
      }
    },
    // funder
    // funding
    // globalLocationNumber
    // hasCertification
    // hasCredential
    // hasMerchantReturnPolicy
    // hasOfferCatalog
    // hasPOS:
    isicv4: [ // https://siccode.com/
    ],
    // iso6523Code
    // keywords: ['']
    legalName: config.legalName,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '12:00',
        closes: '1:00'
      }
    ],
    description,
    sameAs: getSameAs()
  }
}

const LinkedData = component(() => {
  const data = getContactLinkedData()
  return <script type='application/ld+json' __danger={JSON.stringify(data)} />
})

export default LinkedData
