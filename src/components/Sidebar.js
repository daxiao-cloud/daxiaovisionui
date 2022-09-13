import { Box, Anchor } from 'grommet';
import { CirclePlay, DocumentVideo } from 'grommet-icons';
import Link from 'next/link';

export function Sidebar() {
  return (
    <Box width='small' pad='medium' gap='small'>
      <Link href='/'>
        <Anchor icon={<CirclePlay />} label='实时视频流' />
      </Link>
      <Link href='/record'>
        <Anchor icon={<DocumentVideo />} label='录像' />
      </Link>
    </Box>
  );
}