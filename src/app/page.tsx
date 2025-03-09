import { Metadata } from 'next'
import { getMinhaPagina } from '@/services/prismicData/getMinhaPagina'
import SectionTexts from '@/components/Sections/SectionTexts'
// import { SectionInstagram } from '@/components/Sections/SectionInstagram'

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      images: [
        {
          url: 'https://' + process.env.VERCEL_URL + '/seo.png',
        },
      ],
    },
  }
}

export default async function Home() {
  const data = await getMinhaPagina()

  return (
    <main>
      {/* {banners && <SwiperHero banners={banners.data} />} */}
      <div>
        {/* <SectionFaq /> */}
        <SectionTexts data={data} />
        {/* <SectionInstagram /> */}
      </div>
    </main>
  )
}
