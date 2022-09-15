import { Box, Heading, Text, TextInput, DateInput, Button, List, Tip, Pagination } from 'grommet';
import { Search, CirclePlay } from 'grommet-icons';

const data = [
  '~/DaxiaoVisionRecord/daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT/2022_08_04/0_1.mp4',
  '~/DaxiaoVisionRecord/daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT/2022_08_04/1_2.mp4',
  '~/DaxiaoVisionRecord/daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT/2022_08_04/2_3.mp4',
  '~/DaxiaoVisionRecord/daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT/2022_08_04/3_4.mp4',
  '~/DaxiaoVisionRecord/daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT/2022_08_04/4_5.mp4',
];

export function RecordPlayback() {
  return (
    <Box gap='small' pad='small' fill>
      <Heading>录像回放</Heading>
      <Box direction='row' align='center' gap='small'>
        <Text>选择日期：</Text>
        <Box width='small'><DateInput format='yyyy/mm/dd' /></Box>
        <Text>选择摄像机：</Text>
        <Box width='medium'><TextInput suggestions={['daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT']} /></Box>
        <Tip content='搜索'>
          <Button icon={<Search />} />
        </Tip>
      </Box>
      <List data={data} action={() => (<Tip content='播放视频'><Button plain icon={<CirclePlay />} /></Tip>)} />
      <Pagination numberItems={15} />
    </Box>
  );
}