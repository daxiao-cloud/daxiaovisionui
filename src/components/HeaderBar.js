import { Box, Header, Select, Menu, Text, DropButton, Button } from 'grommet';
import { Monitor, User, Logout, Menu as MenuIcon } from 'grommet-icons';
import { Sidebar } from './Sidebar';

export function HeaderBar() {
  return (
    <Header background='brand'>
      <Box direction='row' gap='small' align='center' border='between'>
        <DropButton margin='small' icon={<MenuIcon />} dropContent={<Sidebar />} dropProps={{ align: { top: 'bottom', left: 'left' } }} />
        <Button plain icon={<Monitor />} label='大晓视觉SaaS平台' margin='small' />
      </Box>
      <Select options={['简体中文', 'English']} value='简体中文' />
      <Menu label={<User />} items={[ {label: '退出登录', icon: <Logout />, gap: 'small'} ]} />
    </Header>
  );
}