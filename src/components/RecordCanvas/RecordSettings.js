import { Box, Form, Heading, FormField, TextInput, RadioButtonGroup } from 'grommet';

export function RecordSettings() {
  return (
    <Box direction='row' gap='xxsmall' pad='small' fill>
      <Form>
        <Heading>录像设置</Heading>
        <FormField label='录像存放路径'>
          <TextInput placeholder='~/DaxiaoVisionRecord/' />
        </FormField>
        <FormField label='录像切分时间(分钟)'>
          <TextInput placeholder={30} />
        </FormField>
        <FormField label='录像文件编码'>
          <RadioButtonGroup options={['H.264', 'VP8', 'VP9']} />
        </FormField>
        <FormField label='录像文件扩展名'>
          <RadioButtonGroup options={['.mp4', '.mkv']} />
        </FormField>
      </Form>
    </Box>
  );
}