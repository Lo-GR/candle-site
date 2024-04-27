import { BackgroundImage, Button } from '@mantine/core'
import MainContainer from '../MainContainer'

type HeroProps = {
  h1: string
  image: string
  cta?: {
    buttonText: string
    action: () => void
  }
}

const Hero = ({ h1, image, cta }: HeroProps) => {

  return (
    <BackgroundImage src={image} className="bg-[rgba(139,69,19,.4)] bg-blend-overlay relative overflow-hidden h-[400px] lg:h-[800px]">
      <MainContainer classN=' flex flex-cool justify-center items-center relative h-full lg:justify-start'>
        <div className='bg-green-moss-400 transition-all text-center p-6 outline outline-2 outline-black outline-offset-8 shadow-inner lg:p-14 '>
          <h1 className='my-auto'>
            {h1}
          </h1>
          {cta ? <Button onClick={cta.action}>{cta.buttonText}</Button> : null}
        </div>
      </MainContainer>
    </BackgroundImage>
  )
}

export default Hero