import { Box, Form, Heading, FormField, TextInput, RadioButtonGroup } from 'grommet';

export function RecordSettings() {
  return (
    <Box direction='row' gap='xxsmall' margin='small' fill>
      <Form>
        <Heading>录像设置</Heading>
        <FormField label='录像存放路径'>
          <TextInput placeholder='~/DaxiaoVisionRecord/' />
        </FormField>
        <FormField label='录像文件编码'>
          <RadioButtonGroup options={['H.264', 'VP8', 'VP9']} />
        </FormField>
      </Form>
    </Box>
  );
}