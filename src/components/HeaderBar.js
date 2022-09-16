import { Box, Header, Select, Menu, DropButton, Button } from 'grommet';
import { Desktop, User, Logout, Menu as MenuIcon } from 'grommet-icons';
import Link from 'next/link';
import { Sidebar } from './Sidebar';

export function HeaderBar() {
  return (
    <Header background='brand'>
      <Box direction='row' gap='small' align='center' border='between'>
        <DropButton margin='small' icon={<MenuIcon />} dropContent={<Sidebar />} dropProps={{ align: { top: 'bottom', left: 'left' } }} />
        <Link href='/'>
          <Button plain icon={<Desktop />} label='大晓视觉SaaS平台' margin='small' />
        </Link>
      </Box>
      <Select options={['简体中文', 'English']} value='简体中文' />
      <Menu label={<User />} items={[ {label: '退出登录', icon: <Logout />, gap: 'small'} ]} />
    </Header>
  );
}