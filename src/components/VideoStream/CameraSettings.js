import { Box, Form, FormField, Button, RadioButtonGroup, TextInput, Accordion, AccordionPanel, Select } from 'grommet';
import { useState } from 'react';

export function BitrateSetting() {
  const [value, setValue] = useState('变码率');
  const options = ['变码率', '定码率'];
  return (
    <FormField label='码率'>
      <RadioButtonGroup options={options} value={value} onChange={(event) => setValue(event.target.value)} />
      {value === '定码率' && <TextInput placeholder='128 ~ 163840 kbps' />}
    </FormField>
  );
}

export function IpSetting() {
  const [value, setValue] = useState('自动(DHCP)');
  const options = ['自动(DHCP)', '手动'];
  return (
    <>
      <FormField label='IP分配'>
        <Select options={options} value={value} onChange={(event) => setValue(event.target.value)} />
      </FormField>
      {value === '手动' && <>
        <FormField label='IP地址'>
          <TextInput />
        </FormField>
        <FormField label='子网掩码'>
          <TextInput />
        </FormField>
        <FormField label='默认网关'>
          <TextInput />
        </FormField>
        <FormField label='首选DNS'>
          <TextInput />
        </FormField>
        <FormField label='备选DNS'>
          <TextInput />
        </FormField>
      </>}
    </>
  );
}

export function NewCameraSettings() {
  return (
    <Form>
      <Accordion>
        <AccordionPanel label='视频设置'>
          <FormField label='分辨率'>
            <RadioButtonGroup options={['4K(3840x2160)', '1080p(1920x1080)', '720p(1280x720)']} />
          </FormField>
          <FormField label='帧率'>
            <RadioButtonGroup options={['25fps', '30fps', '50fps', '60fps']} />
          </FormField>
          <FormField label='编码'>
            <RadioButtonGroup options={['H.264', 'H.265']} />
          </FormField>
          <BitrateSetting />
        </AccordionPanel>
        <AccordionPanel label='网络设置'>
          <IpSetting />
        </AccordionPanel>
      </Accordion>
      <Button primary type='submit' label='提交' margin='small' />
    </Form>
  );
}

export function OldCameraSettings() {
  return (
    <Form>
      <FormField label='用户名'>
        <TextInput />
      </FormField>
      <FormField label='密码'>
        <TextInput />
      </FormField>
      <Button primary type='submit' label='提交' margin='small' />
    </Form>
  );
}
