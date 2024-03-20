import Hero from '../../Components/Hero'
import GaelicSmokeHero from '../../Images/GaelicSmokeHero.jpg'

type Props = {}

export default function About({ }: Props) {
  return (
    <div>
      <Hero image={GaelicSmokeHero} h1='Gaelic Smoke Candles' />
    </div>
  )
}