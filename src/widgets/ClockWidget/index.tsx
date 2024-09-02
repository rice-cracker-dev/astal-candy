import { Gtk, Variable, bind } from 'astal';

const time = Variable('time').poll(1000, "date +%H:%M:%S");

export default () => {
  return (
    <box halign={Gtk.Align.CENTER} spacing={4}>
      <icon icon="clock-fill-symbolic" halign={Gtk.Align.CENTER} className="text-primary" />
      <label label={bind(time)} halign={Gtk.Align.CENTER} />
    </box>
  )
}
