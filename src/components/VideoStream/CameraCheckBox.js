import { CheckBox, Button } from 'grommet';
import { Video, Webcam } from 'grommet-icons';

export function CameraCheckBox({ isNew, checked, label }) {
  return (
    <CheckBox checked={checked} label={<Button plain label={label} icon={isNew ? <Webcam /> : <Video />} />} />
  );
}

export function NewCameraCheckBox({ checked, label }) {
  return (
    <CheckBox checked={checked} label={<Button plain label={label} icon={<Webcam />} />} />
  );
}