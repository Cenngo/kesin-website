import Image from 'next/image'
import giftImage from '../public/gift.png'
import glassImage from '../public/glass.png'
import gameboyImage from '../public/gameboy.png'
import dartImage from '../public/dart.png'
import ExploreButton from '@/components/explore-button'
import AppStoreBtn from '@/components/app-store-button'
import PlayStoreBtn from '@/components/play-store-button'
import Card from '@/components/card'
import FeaturesCard from '@/components/features-card'
import PeepsCard from '@/components/peeps-card'
import peepsOneImage from '../public/peeps_1.png'
import peepsTwoImage from '../public/peeps_2.png'
import peepsThreeImage from '../public/peeps_3.png'

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-betweeen bg-white">
      <section className="bg-landing-pattern bg-opacity-10 p-12 h-screen flex flex-col justify-center gap-4">
        <div className="mb-3">
            <Image src={giftImage} alt='gift'/>
            <h1 className="capitalize text-4xl text-center my-5">Yeni Nesil Çekiliş Platformu</h1>
            <h3 className="text-xl font-bold text-center">KESiN platformuyla çekilişlere katılmak artık çok daha kolay!</h3>
        </div>
        <div className="flex justify-center mb-3">
            <ExploreButton href="/app" className="mx-auto">Keşfet</ExploreButton>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center w-10/12 mx-auto">
            <AppStoreBtn/>
            <PlayStoreBtn/>
        </div>
      </section>
      <section className="py-6 flex flex-col justify-between h-screen">
        <h4 className="text-2xl font-bold text-center my-5 text-highlight">KESiN’le çekilişlere katılmak hem kolay hem de ücretsiz</h4>
        <ul className="gap-5 flex flex-col mx-2 justify-center">
            <li>
                <FeaturesCard image={glassImage} title="Çekilişler Tek Yerde">
                    Ana ekrandaki “Çekilişler” butonu sayesinde, tüm çekilişleri rahatlıkla görebilirsin
                </FeaturesCard>
            </li>
            <li>
                <FeaturesCard image={gameboyImage} title="Çekilişlere Katılmak">
                    Reklam izleyerek veya farklı görevleri tamamlayarak, çekilişlere ücretsiz bir şekilde katılabilirsin
                </FeaturesCard>
            </li>
            <li>
                <FeaturesCard image={dartImage} title="Sonuçları Takip Etmek Çok Kolay">
                    Bu sayede sonuçları gönül rahatlığıyla öğrenebilirsin
                </FeaturesCard>
            </li>
        </ul>
      </section>
      <section className="bg-landing-pattern py-6 h-screen flex">
        <ul className="flex flex-col gap-5 mx-2 justify-center">
            <li>
                <PeepsCard image={peepsOneImage} title="Biz Kimiz?">
                    Biz Türkiye’de yapılan çekilişlerin gerçekliğini, şeffaflığını ve güvenilirliğini sağlamak için çalışan bir grup insanız. Yapmak istediğimiz çekiliş   şeffaf, güvenilir ve katılımının kolay olmasını sağlamak, katılınan çekilişin sonucunu kolay öğrenebilmek, kimin kazandığını takip edebilmek,canlı yayınlar ile çekilişleri görünür kılmak.
                </PeepsCard>
            </li>
            <li>
                <PeepsCard image={peepsTwoImage} title="Peki Bu Mümkün mü?">
                    Tabii ki de mümkün! Bunu ücretsiz olarak başarabilmek için kurduğumuz bu platformda, çekiliş yapmak isteyen firmalarla görüşüp, onların çekilişlerini üstlenip, sizlerle paylaşıyoruz.
                </PeepsCard>
            </li>
            <li>
                <PeepsCard image={peepsThreeImage} title="Bu Arada Katılmak Ücretsiz!">
                    Daha önce söylemiş olabiliriz ama tekrar söylemek istiyoruz ki
                </PeepsCard>
            </li>
        </ul>
      </section>
    </main>
  )
}
