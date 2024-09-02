import { Gtk, bind } from 'astal';
import AstalTray from 'gi://AstalTray';

const tray = AstalTray.Tray.get_default();

export default () => {
  return (
    <box orientation={Gtk.Orientation.HORIZONTAL}>
      {tray.items && tray.items.map((item) => (
        <label label={JSON.stringify(item)} />
      ))}
    </box>
  );
};

