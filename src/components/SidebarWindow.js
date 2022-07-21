import { Box, Accordion, AccordionPanel, Sidebar } from 'grommet';
import { CameraCheckBox } from './CameraCheckBox';

export function SidebarWindow() {
  return (
    <Sidebar width='medium'>
      <Accordion>
        <AccordionPanel label='IPC Proxy 1'>
          <Box margin='small' gap='xsmall'>
            <CameraCheckBox key={0} checked label='192.168.100.10' />
            <CameraCheckBox key={1} label='192.168.100.11' />
            <CameraCheckBox key={2} label='192.168.100.12' />
          </Box>
        </AccordionPanel>
        <AccordionPanel label='IPC Proxy 2'>
          <Box margin='small' gap='xsmall'>
            <CameraCheckBox key={0} checked label='192.168.200.10' />
            <CameraCheckBox key={1} label='192.168.200.11' />
            <CameraCheckBox key={2} label='192.168.200.12' />
          </Box>
        </AccordionPanel>
        <Box margin='small' gap='xsmall'>
          <CameraCheckBox key={0} label='客厅' />
          <CameraCheckBox key={1} label='走廊' />
          <CameraCheckBox key={2} label='厨房' />
        </Box>
      </Accordion>
    </Sidebar>
  );
}