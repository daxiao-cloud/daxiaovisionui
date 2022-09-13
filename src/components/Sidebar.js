import { Box, Anchor, Accordion, AccordionPanel } from 'grommet';
import { CirclePlay, DocumentVideo, Configure } from 'grommet-icons';
import Link from 'next/link';

export function Sidebar() {
  return (
    <Box pad='small'>
      <Accordion>
        <AccordionPanel label='实时视频流'>
          <Box pad='small'>
            <Link href='/'>
              <Anchor icon={<CirclePlay />} label='实时视频流' />
            </Link>
          </Box>
        </AccordionPanel>
        <AccordionPanel label='录像'>
          <Box pad='small' gap='small'>
            <Link href='/record'>
              <Anchor icon={<DocumentVideo />} label='录像回放' />
            </Link>
            <Link href='/recordsettings'>
              <Anchor icon={<Configure />} label='录像设置' />
            </Link>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  );
}