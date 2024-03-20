import Hero from '../../Components/Hero'
import GaelicSmokeHero from '../../Images/GaelicSmokeHero.jpg'

type Props = {}

export default function Candles({ }: Props) {
  return (
    <div>
      <Hero image={GaelicSmokeHero} h1='Select Your Vibe' />
    </div>
  )
}