import { Gtk, bind } from 'astal';
import { time } from '$/lib';

const formatDate = (d: Date) => {
  return d.toLocaleString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
};

export default () => {
  return (
    <box halign={Gtk.Align.CENTER} spacing={4}>
      <icon icon="clock-fill-symbolic" halign={Gtk.Align.CENTER} className="text-primary" />
      <label label={bind(time).as(formatDate)} halign={Gtk.Align.CENTER} />
    </box>
  )
}
