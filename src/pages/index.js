import { Grommet, Box, Header, Select, Menu, Text, Tabs, Tab, Accordion, AccordionPanel } from 'grommet';
import { grommet } from 'grommet/themes';
import { Monitor, User, Logout } from 'grommet-icons';
import { VideoPlayer } from '../components/VideoPlayer';
import { CameraCheckBox } from '../components/CameraCheckBox';

function HomePage() {
  return (
    <Grommet full theme={grommet}>
      <Box fill>
        <Header background='brand' pad='small'>
          <Box direction='row' gap='small' align='center'>
            <Monitor size='large' />
            <Text size='large'>大晓视觉SaaS平台</Text>
          </Box>
          <Select options={['简体中文', 'English']} value='简体中文' />
          <Menu label={<User />} items={[ {label: '退出登录', icon: <Logout />, gap: 'small'} ]} />
        </Header>
        <Box flex>
          <Tabs flex>
            <Tab title='视图1'>
              <Box direction='row' border='between' gap='small' fill>
                <Box width='medium'>
                  <Accordion>
                    <AccordionPanel label='IPC Proxy 1'>
                      <Box margin='small' gap='xsmall'>
                        <CameraCheckBox key={0} checked label='192.168.100.10' />
                        <CameraCheckBox key={1} label='192.168.100.11' />
                        <CameraCheckBox key={2} label='192.168.100.12' />
                      </Box>
                    </AccordionPanel>
                    <AccordionPanel label='IPC Proxy 2'>
                      <Box margin='small' gap='xsmall'>
                        <CameraCheckBox key={0} checked label='192.168.200.10' />
                        <CameraCheckBox key={1} label='192.168.200.11' />
                        <CameraCheckBox key={2} label='192.168.200.12' />
                      </Box>
                    </AccordionPanel>
                  </Accordion>
                </Box>
                <Box flex wrap overflow='auto' direction='row' alignContent='start'>
                  <VideoPlayer key={0} />
                  <VideoPlayer key={1} />
                  <VideoPlayer key={2} />
                  <VideoPlayer key={3} />
                </Box>
              </Box>
            </Tab>
            <Tab title='视图2'></Tab>
          </Tabs>
        </Box>
      </Box>
    </Grommet>
  );
}

export default HomePage;