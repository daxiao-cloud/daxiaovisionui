import { Tabs, Tab, Form, FormField, Button, TextInput, Grid, Text, Box, Heading } from 'grommet';
import { Configure, Info, Upgrade, Tag } from 'grommet-icons';
import { OldCameraSettings, NewCameraSettings } from './CameraSettings';
import { CameraOta } from './CameraOta';

function CameraName() {
  return (
    <Form>
      <FormField label='摄像机名称'>
        <TextInput />
      </FormField>
      <Button primary type='submit' label='保存' margin='small' />
    </Form>
  );
}

function CameraInfo() {
  return (
    <Grid columns={['auto', 'auto']} gap='small' align='center'>
      <Text>制造商</Text>
      <Text>大晓智能</Text>
      <Text>型号</Text>
      <Text>金乌1号</Text>
      <Text>统一SN</Text>
      <Box width='small'>
        <Text wordBreak='break-all'>daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT</Text>
      </Box>
      <Text>设备SN</Text>
      <Text>SDP37481934</Text>
      <Text>IP地址</Text>
      <Box>
        <Text>192.168.100.127</Text>
        <Text>fe80::64a6:2309:8880:7903</Text>
      </Box>
      <Text>MAC地址</Text>
      <Text>6c:f1:7e:9f:83:a2</Text>
      <Text>版本号</Text>
      <Text>1.0.3.15</Text>
      <Text>已开机</Text>
      <Text>158:12:05</Text>
    </Grid>
  );
}

function NewCameraProperty() {
  return (
    <>
      <Heading>摄像机详情</Heading>
      <Tabs>
        <Tab title='信息' icon={<Info />}>
          <Box margin={{ top: 'small' }}>
            <CameraInfo />
          </Box>
        </Tab>
        <Tab title='名称' icon={<Tag />}>
          <Box margin={{ top: 'small' }}>
            <CameraName />
          </Box>
        </Tab>
        <Tab title='设置' icon={<Configure />}>
          <Box margin={{ top: 'small' }}>
            <NewCameraSettings />
          </Box>
        </Tab>
        <Tab title='升级' icon={<Upgrade />}>
          <Box margin={{ top: 'small' }}>
            <CameraOta />
          </Box>
        </Tab>
      </Tabs>
    </>
  );
}

function OldCameraInfo() {
  return (
    <Grid columns={['auto', 'auto']} gap='small' align='center'>
      <Text>制造商</Text>
      <Text>宇视科技</Text>
      <Text>型号</Text>
      <Text>IPC2A5I-IR6-AUPF40-B-DT</Text>
      <Text>IP地址</Text>
      <Text>192.168.100.127</Text>
    </Grid>
  );
}
function OldCameraProperty() {
  return (
    <>
      <Heading>摄像机详情</Heading>
      <Tabs>
        <Tab title='信息' icon={<Info />}>
          <Box margin={{ top: 'small' }}>
            <OldCameraInfo />
          </Box>
        </Tab>
        <Tab title='设置' icon={<Configure />}>
          <Box margin={{ top: 'small' }}>
            <OldCameraSettings />
          </Box>
        </Tab>
      </Tabs>
    </>
  );
}

export function CameraProperty({ name }) {
  return name.includes('.') ? <OldCameraProperty /> : <NewCameraProperty />;
}
