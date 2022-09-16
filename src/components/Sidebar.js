import { Box, Anchor, Accordion, AccordionPanel } from 'grommet';
import { CirclePlay, DocumentVideo, Configure } from 'grommet-icons';
import Link from 'next/link';

export function Sidebar() {
  return (
    <Box pad='small' width='medium'>
      <Accordion>
        <AccordionPanel label='摄像机'>
          <Box pad='small' gap='small'>
            <Link href='/'>
              <Anchor icon={<CirclePlay />} label='实时视频流' />
            </Link>
          </Box>
        </AccordionPanel>
        <AccordionPanel label='录像'>
          <Box pad='small' gap='small'>
            <Link href='/recordmanagement'>
              <Anchor icon={<DocumentVideo />} label='录像管理' />
            </Link>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  );
}