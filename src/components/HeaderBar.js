import { Box, Header, Select, Menu, DropButton, Button, Layer, Heading } from 'grommet';
import { Desktop, User, Logout, Qr, Menu as MenuIcon } from 'grommet-icons';
import Link from 'next/link';
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { makeTip } from '../hoc/makeTip';

export function HeaderBar() {
  const [showQRCode, setShowQRCode] = useState(false);
  return (
    <Header background='brand'>
      {showQRCode && <Layer
        position='top'
        onEsc={() => setShowQRCode(false)}
        onClickOutside={() => setShowQRCode(false)}
      >
        <Box width='large' background='white' pad='small'>
          <Heading>使用二维码绑定设备</Heading>
          <Qr size='xxlarge' color='plain' />
        </Box>
      </Layer>}
      <Box direction='row' gap='small' align='center' border='between'>
        <DropButton tip={makeTip('基本功能')} margin='small' icon={<MenuIcon />} dropContent={<Sidebar />} dropProps={{ align: { top: 'bottom', left: 'left' } }} />
        <Link href='/'>
          <Button plain icon={<Desktop />} label='大晓视觉SaaS平台' margin='small' />
        </Link>
      </Box>
      <Select options={['简体中文', 'English']} value='简体中文' />
      <Menu label={<User />} items={[
        {label: '二维码', icon: <Qr />, gap: 'small', onClick: () => setShowQRCode(!showQRCode)},
        {label: '退出登录', icon: <Logout />, gap: 'small'},
      ]} />
    </Header>
  );
}