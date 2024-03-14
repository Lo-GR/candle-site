import { BackgroundImage, Button } from '@mantine/core'
import React from 'react'
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
    // <div style={{ backgroundImage: "url(./assets/images/GaelicSmokeHero.jpg)" } as React.CSSProperties} className="relative h-[400px] overflow-hidden">
    <BackgroundImage src={image} className="bg-[rgba(139,69,19,.4)] bg-blend-overlay relative overflow-hidden h-[200px] lg:h-[400px]">
      <MainContainer classN=' flex flex-cool justify-center items-center relative h-full lg:justify-start'>
        <div className='bg-[#17331F] p-14 outline outline-2 outline-black outline-offset-8 shadow-lg shadow-inner'>
          <h1 className='my-auto '>
            {h1}
          </h1>
          {cta ? <Button onClick={cta.action}>{cta.buttonText}</Button> : null}
        </div>
      </MainContainer>
    </BackgroundImage>
    /* <img
      className={`absolute top-0 w-screen h-full`}
    /> */

    // </div>
  )
}

export default Hero