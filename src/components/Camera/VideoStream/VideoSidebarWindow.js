import { Box, Accordion, AccordionPanel, Sidebar, List, Button } from 'grommet';
import { SettingsOption } from 'grommet-icons';
import { CameraCheckBox } from './CameraCheckBox';

const data = ['客厅', '走廊', '厨房'];

export function VideoSidebarWindow({ onClickCameraSetting }) {
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
          <List data={data} action={() => <Button plain icon={<SettingsOption />} onClick={onClickCameraSetting} />}>
            {datum => <CameraCheckBox label={datum} />}
          </List>
        </Box>
      </Accordion>
    </Sidebar>
  );
}