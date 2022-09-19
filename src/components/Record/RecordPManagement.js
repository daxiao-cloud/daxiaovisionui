import { Box, Heading, Text, TextInput, DateInput, Button, List, Pagination, Layer } from 'grommet';
import { Search, CirclePlay, DocumentConfig } from 'grommet-icons';
import { useState } from 'react';
import { RecordSettings  } from './RecordSettings';
import { makeTip } from '../../hoc/makeTip';

const data = [
  '~/DaxiaoVisionRecord/daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT/2022_08_04/0_1.mp4',
  '~/DaxiaoVisionRecord/daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT/2022_08_04/1_2.mp4',
  '~/DaxiaoVisionRecord/daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT/2022_08_04/2_3.mp4',
  '~/DaxiaoVisionRecord/daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT/2022_08_04/3_4.mp4',
  '~/DaxiaoVisionRecord/daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT/2022_08_04/4_5.mp4',
];

export function RecordPManagement() {
  const [value, setValue] = useState();
  return (
    <Box gap='small' pad='small' fill>
      <Box direction='row' gap='medium' align='center'>
        <Heading>录像管理</Heading>
        <Button tip='录像设置' icon={<DocumentConfig />} onClick={() => setValue(true)} />
      </Box>
      <Box direction='row' align='center' justify='between'>
        <Box direction='row' align='center' gap='small'>
          <Text>选择日期：</Text>
          <Box width='small'><DateInput format='yyyy/mm/dd' /></Box>
          <Text>选择摄像机：</Text>
          <Box width='medium'><TextInput suggestions={['daxiaocloud.af9d40a5-7a36-5c07-b23a-851cd99fbfa5.1658472806.V1StGXR8_Z5jdHi6B-myT']} /></Box>
          <Button tip={makeTip('搜索')} icon={<Search />} />
        </Box>
      </Box>
      <List data={data} action={() => <Button plain tip={makeTip('播放视频')} icon={<CirclePlay />} />} />
      <Pagination numberItems={15} />
      {value && <Layer
        position='right'
        full='vertical'
        width='small'
        modal
        onClickOutside={() => setValue(false)}
        onEsc={() => setValue(false)}>
          <Box width='medium' pad='small'>
            <RecordSettings />
          </Box>
        </Layer>}
    </Box>
  );
}