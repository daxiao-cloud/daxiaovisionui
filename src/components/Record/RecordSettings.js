import { Form, Heading, FormField, TextInput, RadioButtonGroup, Button } from 'grommet';

export function RecordSettings() {
  return (
    <Form>
      <Heading>录像设置</Heading>
      <FormField label='录像存放路径'>
        <TextInput placeholder='~/DaxiaoVisionRecord/' />
      </FormField>
      <FormField label='录像切分时间(分钟)'>
        <TextInput placeholder={30} />
      </FormField>
      <FormField label='录像文件扩展名'>
        <RadioButtonGroup options={['.mp4', '.mkv']} value='.mp4' />
      </FormField>
      <Button primary type='submit' label='提交' />
    </Form>
  );
}