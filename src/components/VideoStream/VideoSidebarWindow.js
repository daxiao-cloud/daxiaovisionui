import { Accordion, AccordionPanel, Sidebar, List, Button, Tip } from 'grommet';
import { SettingsOption } from 'grommet-icons';
import { CameraCheckBox } from './CameraCheckBox';

const data0 = ['客厅', '走廊', '厨房'];
const data1 = ['192.168.100.10', '192.168.100.11', '192.168.100.12'];
const data2 = ['192.168.200.10', '192.168.200.11', '192.168.200.12'];

function CameraList({ isNew, data, onClickCameraSetting }) {
  return (
    <List data={data} border={false} action={(item) => <Tip content='设置' dropProps={{ align: { left: 'right' } }}><Button plain icon={<SettingsOption />} onClick={() => onClickCameraSetting(item)} /></Tip>}>
      {datum => <CameraCheckBox isNew={isNew} label={datum} />}
    </List>
  );
}

export function VideoSidebarWindow({ onClickCameraSetting }) {
  return (
    <Sidebar width='medium'>
      <Accordion>
        <AccordionPanel label='IPC Proxy 1'>
          <CameraList data={data1} onClickCameraSetting={onClickCameraSetting} />
        </AccordionPanel>
        <AccordionPanel label='IPC Proxy 2'>
          <CameraList data={data2} onClickCameraSetting={onClickCameraSetting} />
        </AccordionPanel>
        <CameraList isNew data={data0} onClickCameraSetting={onClickCameraSetting} />
      </Accordion>
    </Sidebar>
  );
}