import { Box, Form, Heading, FormField, TextInput, RadioButtonGroup } from 'grommet';

export function CameraSettings() {
  return (
    <Box direction='row' gap='xxsmall' pad='small' fill>
      <Form>
        <Heading>摄像机设置</Heading>
        <FormField label='分辨率'>
          <RadioButtonGroup options={['4K', '1080p', '720p']} />
        </FormField>
        <FormField label='帧率'>
          <RadioButtonGroup options={['25fps', '30fps', '50fps', '60fps']} />
        </FormField>
        <FormField label='编码'>
          <RadioButtonGroup options={['H.264', 'H.265']} />
        </FormField>
        <FormField label='IP地址'>
          <RadioButtonGroup options={['自动', '手动']} />
        </FormField>
      </Form>
    </Box>
  );
}