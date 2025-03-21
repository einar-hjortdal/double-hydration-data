import { detectIsString } from '@dark-engine/core'
import { freeze } from '@wareme/utils'

import { titles } from '../shared/translations/titles'

export const metaContent = freeze({
  fallback: {
    description: '', // 150ch
    ogType: 'website',
    ogTitle: '',
    image: 'metaImageDefault.jpeg',
    ogDescription: '',
    twitterTitle: '',
    twitterDescription: ''
  },
  home: {
    en: {
      description: 'Since 1965 we have been involved in the manufacturing and design process of luxury hand-knotted rugs, our collection is exposed in Via Lario 11, Milan.',
      ogTitle: titles.home.en,
      ogDescription: 'Since 1965 we have been involved in the manufacturing and design process of luxury hand-knotted rugs, our collection is exposed in Via Lario 11, Milan.',
      twitterTitle: titles.home.en,
      twitterDescription: 'Since 1965 we have been involved in the manufacturing and design process of luxury hand-knotted rugs, our collection is exposed in Via Lario 11, Milan.'
    },
    it: {
      description: 'Dal 1965 partecipiamo alla produzione e al design di tappeti di lusso annodati a mano. La nostra collezione è esposta in Via Lario 11, Milano.',
      ogTitle: titles.home.it,
      ogDescription: 'Dal 1965 partecipiamo alla produzione e al design di tappeti di lusso annodati a mano. La nostra collezione è esposta in Via Lario 11, Milano.',
      twitterTitle: titles.home.it,
      twitterDescription: 'Dal 1965 partecipiamo alla produzione e al design di tappeti di lusso annodati a mano. La nostra collezione è esposta in Via Lario 11, Milano.'
    },
    nl: {
      description: 'Sinds 1965 nemen wij deel aan het productie- en ontwerpproces van luxe, handgeknoopte tapijten. Onze collectie is te bezichtigen in de Via Lario 11, Milaan.',
      ogTitle: titles.home.nl,
      ogDescription: 'Sinds 1965 nemen wij deel aan het productie- en ontwerpproces van luxe, handgeknoopte tapijten. Onze collectie is te bezichtigen in de Via Lario 11, Milaan.',
      twitterTitle: titles.home.nl,
      twitterDescription: 'Sinds 1965 nemen wij deel aan het productie- en ontwerpproces van luxe, handgeknoopte tapijten. Onze collectie is te bezichtigen in de Via Lario 11, Milaan.'
    }
  },
  services: {
    en: {
      description: 'We help customers choose the best rugs for their environments, deliver and ship rugs to their new owners. We are experts of wash and restoration.',
      ogTitle: titles.services.en,
      ogDescription: 'We help customers choose the best rugs for their environments, deliver and ship rugs to their new owners. We are experts of wash and restoration.',
      twitterTitle: titles.services.en,
      twitterDescription: 'We help customers choose the best rugs for their environments, deliver and ship rugs to their new owners. We are experts of wash and restoration.'
    },
    it: {
      description: 'Aiutiamo a scegliere i migliori tappeti per ogni ambiente, li consegniamo e spediamo ai nuovi proprietari, e siamo esperti di lavaggio e restauro.',
      ogTitle: titles.services.it,
      ogDescription: 'Aiutiamo a scegliere i migliori tappeti per ogni ambiente, li consegniamo e spediamo ai nuovi proprietari, e siamo esperti di lavaggio e restauro.',
      twitterTitle: titles.services.it,
      twitterDescription: 'Aiutiamo a scegliere i migliori tappeti per ogni ambiente, li consegniamo e spediamo ai nuovi proprietari, e siamo esperti di lavaggio e restauro.'

    },
    nl: {
      description: 'We helpen bij het kiezen van de beste tapijten voor elke omgeving, we leveren en verzenden de tapijten naar hun nieuwe eigenaren. We zijn experts in wassen en restauratie.',
      ogTitle: titles.services.nl,
      ogDescription: 'We helpen bij het kiezen van de beste tapijten voor elke omgeving, we leveren en verzenden de tapijten naar hun nieuwe eigenaren. We zijn experts in wassen en restauratie.',
      twitterTitle: titles.services.nl,
      twitterDescription: 'We helpen bij het kiezen van de beste tapijten voor elke omgeving, we leveren en verzenden de tapijten naar hun nieuwe eigenaren. We zijn experts in wassen en restauratie.'
    }
  },
  // shop: {
  //   en: {
  //     description: 'Discover current exclusive paintings, available for immediate purchase. Browse through my past works and find inspiration for your own custom piece',
  //     ogTitle: titles.shop.en,
  //     ogDescription: 'Discover current exclusive paintings, available for immediate purchase. Browse through my past works and find inspiration for your own custom piece',
  //     twitterTitle: titles.shop.en,
  //     twitterDescription: 'Discover current exclusive paintings, available for immediate purchase. Browse through my past works and find inspiration for your own custom piece'
  //   },
  //   it: {
  //     description: 'Scopri i dipinti esclusivi attuali, disponibili per l’acquisto immediato. Sfoglia le mie opere passate e trova ispirazione per il tuo pezzo personalizzato.',
  //     ogTitle: titles.shop.it,
  //     ogDescription: 'Scopri i dipinti esclusivi attuali, disponibili per l’acquisto immediato. Sfoglia le mie opere passate e trova ispirazione per il tuo pezzo personalizzato.',
  //     twitterTitle: titles.shop.it,
  //     twitterDescription: 'Scopri i dipinti esclusivi attuali, disponibili per l’acquisto immediato. Sfoglia le mie opere passate e trova ispirazione per il tuo pezzo personalizzato.'

  //   },
  //   nl: {
  //     description: 'Ontdek de huidige exclusieve schilderijen, direct beschikbaar voor aankoop. Blader door mijn eerdere werken en vind inspiratie voor uw eigen op maat gemaakte stuk.',
  //     ogTitle: titles.shop.nl,
  //     ogDescription: 'Ontdek de huidige exclusieve schilderijen, direct beschikbaar voor aankoop. Blader door mijn eerdere werken en vind inspiratie voor uw eigen op maat gemaakte stuk.',
  //     twitterTitle: titles.shop.nl,
  //     twitterDescription: 'Ontdek de huidige exclusieve schilderijen, direct beschikbaar voor aankoop. Blader door mijn eerdere werken en vind inspiratie voor uw eigen op maat gemaakte stuk.'
  //   }
  // },
  contact: {
    en: {
      description: 'Walk in or book an appointment. We are at your service from Tuesday to Saturday in via Lario 11, in the Isola neighborhood of Milan.',
      ogTitle: titles.contact.en,
      ogDescription: 'Walk in or book an appointment. We are at your service from Tuesday to Saturday in via Lario 11, in the Isola neighborhood of Milan.',
      twitterTitle: titles.contact.en,
      twitterDescription: 'Walk in or book an appointment. We are at your service from Tuesday to Saturday in via Lario 11, in the Isola neighborhood of Milan.'
    },
    it: {
      description: 'Visitateci o prenotate un appuntamento. Siamo a vostra disposizione dal martedì al sabato in via Lario 11, nel quartiere Isola di Milano.',
      ogTitle: titles.contact.it,
      ogDescription: 'Visitateci o prenotate un appuntamento. Siamo a vostra disposizione dal martedì al sabato in via Lario 11, nel quartiere Isola di Milano.',
      twitterTitle: titles.contact.it,
      twitterDescription: 'Visitateci o prenotate un appuntamento. Siamo a vostra disposizione dal martedì al sabato in via Lario 11, nel quartiere Isola di Milano.'

    },
    nl: {
      description: 'Bezoek ons of maak een afspraak. Wij staan tot uw dienst van dinsdag tot en met zaterdag in de Via Lario 11, in de wijk Isola in Milaan.',
      ogTitle: titles.contact.nl,
      ogDescription: 'Bezoek ons of maak een afspraak. Wij staan tot uw dienst van dinsdag tot en met zaterdag in de Via Lario 11, in de wijk Isola in Milaan.',
      twitterTitle: titles.contact.nl,
      twitterDescription: 'Bezoek ons of maak een afspraak. Wij staan tot uw dienst van dinsdag tot en met zaterdag in de Via Lario 11, in de wijk Isola in Milaan.'
    }
  }
})

const dynamicPageDescription = freeze({
  en: 'This painting has been made with high quality and lightfast paint. It is signed and comes with a certificate of authenticity.',
  nl: 'Dit schilderij is gemaakt met hoogwaardige en lichtechte verf. Het is gesigneerd en wordt geleverd met een certificaat van echtheid.',
  it: 'Questo dipinto è stato realizzato con colori di alta qualità e resistenti alla luce. È firmato e viene fornito con un certificato di autenticità.'
})

export const getDynamicPageDescription = (language) => {
  const description = dynamicPageDescription[language]
  if (detectIsString(description)) {
    return description
  }
  return null
}
