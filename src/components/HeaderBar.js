import { Box, Header, Select, Menu, Text } from 'grommet';
import { Monitor, User, Logout } from 'grommet-icons';

export function HeaderBar() {
  return (
    <Header background='brand' pad='small'>
      <Box direction='row' gap='small' align='center'>
        <Monitor size='large' />
        <Text size='large'>大晓视觉SaaS平台</Text>
      </Box>
      <Select options={['简体中文', 'English']} value='简体中文' />
      <Menu label={<User />} items={[ {label: '退出登录', icon: <Logout />, gap: 'small'} ]} />
    </Header>
  );
}