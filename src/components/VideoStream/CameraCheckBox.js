import { CheckBox, Button } from 'grommet';
import { Video, Webcam } from 'grommet-icons';

export function CameraCheckBox({ disabled, isNew, checked, label }) {
  return (
    <CheckBox disabled={disabled} checked={checked} label={<Button plain label={label} icon={isNew ? <Webcam /> : <Video />} />} />
  );
}
