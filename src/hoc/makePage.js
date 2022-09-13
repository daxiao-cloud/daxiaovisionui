import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';
import { HeaderBar } from '../components/HeaderBar';

export function makePage(mainWindow) {
  return (
    <Grommet full theme={grommet}>
      <Box fill>
        <HeaderBar />
        {mainWindow}
      </Box>
    </Grommet>
  );
}