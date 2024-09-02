import { Gtk } from 'astal';
import Network from './Network';

export default () => {
  return (
    <box orientation={Gtk.Orientation.HORIZONTAL}>
      <Network />

    </box>
  );
};

