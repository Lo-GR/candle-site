import { Burger, Group, Image } from '@mantine/core'
import logo from '../../Images/GSlogowhiteLRG.png'
import MainContainer from '../MainContainer'
import { Link, useLocation } from 'react-router-dom'
import { paths } from '../../Helpers/helpers'


type HeaderProps = {
  handleMobileOpen: () => void;
  open: boolean
}

const Header = ({ handleMobileOpen, open }: HeaderProps) => {
  const location = useLocation();

  const items = paths.map((link) => (
    <Link key={link.label} to={link.link}>
      <p
        className={
          location.pathname === link.link
            ? 'text-purple-smoke-400'
            : 'text-white-bg-300'
        }>
        {link.label}
      </p>
    </Link>
  ));

  return (
    <header className='bg-grey-moss-400 sticky'>
      <MainContainer classN=' h-20 lg:justify-between flex justify-around'>
        <Image src={logo} h={"auto"} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={open} color='white' onClick={handleMobileOpen} hiddenFrom="xs" size="md" />
      </MainContainer>
    </header>

  )
}

export default Header