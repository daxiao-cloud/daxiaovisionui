import {
  Tabs,
  Tab,
  Form,
  FormField,
  Button,
  TextInput,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "grommet";
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

const LeftCell = ({ children }) => (
  <TableCell
    plain={true}
    style={{
      width: "80px",
    }}
  >
    {children}
  </TableCell>
);

function CameraInfo() {
  return (
    <Table style={{ width: "100%", tableLayout: "fixed" }}>
      <TableBody>
        <TableRow>
          <LeftCell>制造商</LeftCell>
          <TableCell>大晓智能</TableCell>
        </TableRow>
        <TableRow>
          <LeftCell>型号</LeftCell>
          <TableCell>金乌1号</TableCell>
        </TableRow>
        <TableRow>
          <LeftCell>统一SN</LeftCell>
          <TableCell
            style={{
              display: "block",
              width: "100%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT
          </TableCell>
        </TableRow>
        <TableRow>
          <LeftCell>设备SN</LeftCell>
          <TableCell>SDP37481934</TableCell>
        </TableRow>
        <TableRow>
          <LeftCell>IPv4地址</LeftCell>
          <TableCell>192.168.100.127</TableCell>
        </TableRow>
        <TableRow>
          <LeftCell>IPv6地址</LeftCell>
          <TableCell>fe80::64a6:2309:8880:7903</TableCell>
        </TableRow>
        <TableRow>
          <LeftCell>MAC地址</LeftCell>
          <TableCell>6c:f1:7e:9f:83:a2</TableCell>
        </TableRow>
        <TableRow>
          <LeftCell>版本号</LeftCell>
          <TableCell>1.0.3.15</TableCell>
        </TableRow>
        <TableRow>
          <LeftCell>已开机</LeftCell>
          <TableCell>158:12:05</TableCell>
        </TableRow>
      </TableBody>
    </Table>
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
    <Table style={{ width: "100%", tableLayout: "fixed" }}>
      <TableBody>
        <TableRow>
          <LeftCell>制造商</LeftCell>
          <TableCell>宇视科技</TableCell>
        </TableRow>
        <TableRow>
          <LeftCell>型号</LeftCell>
          <TableCell>IPC2A5I-IR6-AUPF40-B-DT</TableCell>
        </TableRow>
      </TableBody>
    </Table>
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
