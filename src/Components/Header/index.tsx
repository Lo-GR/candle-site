import React, { useState } from 'react'
import { Burger, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MantineLogo } from '@mantinex/mantine-logo'
import MainContainer from '../MainContainer'


type Props = {}



const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

const Header = (props: Props) => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      // className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header>
      <MainContainer>
        <MantineLogo size={28} />

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </MainContainer>
    </header>

  )
}

export default Header