import { Tabs, Tab, Form, FormField, Button, TextInput, Grid, Text, Box } from "grommet";
import { OldCameraSettings, NewCameraSettings } from "./CameraSettings";

function CameraName() {
  return (
    <Form>
      <FormField label="摄像机名称">
        <TextInput />
      </FormField>
      <Button primary type="submit" label="提交" margin="small" />
    </Form>
  );
}

function CameraInfo() {
  return (
    <Grid columns={['auto', 'auto']} gap='small'>
      <Text>制造商</Text>
      <Text>大晓智能</Text>
      <Text>型号</Text>
      <Text>金乌1号</Text>
      <Text>统一SN</Text>
      <Text truncate='tip'>daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT</Text>
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

function NewCameraProperty({ name }) {
  return (
    <Tabs>
      <Tab title="信息">
        <CameraInfo />
      </Tab>
      <Tab title="名称">
        <CameraName />
      </Tab>
      <Tab title="设置">
        <NewCameraSettings name={name} />
      </Tab>
    </Tabs>
  );
}

function OldCameraInfo() {
  return (
    <Grid columns={['auto', 'auto']} gap='small'>
      <Text>制造商</Text>
      <Text>宇视科技</Text>
      <Text>型号</Text>
      <Text>IPC2A5I-IR6-AUPF40-B-DT</Text>
    </Grid>
  );
}
function OldCameraProperty({ name }) {
  return (
    <Tabs>
      <Tab title="信息">
        <OldCameraInfo />
      </Tab>
      <Tab title="设置">
        <OldCameraSettings name={name} />
      </Tab>
    </Tabs>
  );
}

export function CameraProperty({ name }) {
  return (name.includes('.') ? <OldCameraProperty /> : <NewCameraProperty />);
}
