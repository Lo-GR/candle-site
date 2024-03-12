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
    <BackgroundImage src={image} className="relative h-[400px] overflow-hidden">
      <MainContainer classN='flex flex-cool items-center relative h-full'>
        <h1 className='text-xl my-auto text-white'>
          {h1}
        </h1>
        {cta ? <Button onClick={cta.action}>{cta.buttonText}</Button> : null}
      </MainContainer>
    </BackgroundImage>
    /* <img
      className={`absolute top-0 w-screen h-full`}
    /> */

    // </div>
  )
}

export default Hero