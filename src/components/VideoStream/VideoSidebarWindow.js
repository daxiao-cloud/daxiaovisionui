import { Accordion, AccordionPanel, Sidebar, List, Button } from 'grommet';
import { SettingsOption } from 'grommet-icons';
import { CameraCheckBox } from './CameraCheckBox';
import { makeTip } from '../../hoc/makeTip';

const data0 = [
  { label: '客厅' }, 
  { label: '走廊' }, 
  { label: '厨房', disabled: true }];
const data1 = [
  { label: '192.168.100.10' }, 
  { label: '192.168.100.11' }, 
  { label: '192.168.100.12' }];
const data2 = [
  { label: '192.168.200.10' }, 
  { label: '192.168.200.11' }, 
  { label: '192.168.200.12' }];

function CameraList({ isNew, data, onClickCameraSetting }) {
  return (
    <List data={data} border={false} action={(item) => <Button disabled={item.disabled} plain tip={makeTip('设置')} icon={<SettingsOption />} onClick={() => onClickCameraSetting(item.label)} />}>
      {datum => <CameraCheckBox disabled={datum.disabled} isNew={isNew} label={datum.label} />}
    </List>
  );
}

export function VideoSidebarWindow({ onClickCameraSetting }) {
  return (
    <Sidebar width='medium' border='right'>
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