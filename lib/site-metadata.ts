import type { Metadata } from 'next'

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mesafsd.com',
)

export const siteName = 'MesaFSD'

export const defaultDescription =
  "San Diego Mesa College's Full-Self Driving Club — building and racing a fully autonomous go-kart with Team Inspiration for the Autonomous Karting Series."

const ogImage = {
  url: '/logo/mesafsd-rounded.png',
  width: 512,
  height: 512,
  alt: 'MesaFSD logo',
}

export const sharedMetadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  keywords: [
    'MesaFSD',
    'San Diego Mesa College',
    'autonomous vehicles',
    'robotics club',
    'engineering',
    'Autonomous Karting Series',
    'community college',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName,
    images: [ogImage],
  },
  twitter: {
    card: 'summary',
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
}

type PageMetadataOptions = {
  title: string
  description: string
  path: `/${string}` | '/'
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const pageTitle = `${title} - ${siteName}`
  const url = path === '/' ? siteUrl.href : new URL(path, siteUrl).href

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
    },
    twitter: {
      title: pageTitle,
      description,
    },
  }
}

export const homeMetadata: Metadata = {
  title: {
    absolute: `${siteName} — Full-Self Driving Club`,
  },
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteName} — Full-Self Driving Club`,
    description: defaultDescription,
    url: siteUrl.href,
  },
  twitter: {
    title: `${siteName} — Full-Self Driving Club`,
    description: defaultDescription,
  },
}
