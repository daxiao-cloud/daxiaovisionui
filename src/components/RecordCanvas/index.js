import { Box } from 'grommet';
import { Sidebar } from '../Sidebar';

export function RecordCanvas() {
  return (
    <Box direction='row' gap='xxsmall' border='between' fill>
      <Sidebar />
      <Box>录像</Box>
    </Box>
  );
}