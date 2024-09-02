import { App, Astal, Gtk } from 'astal'
import { Card } from '$/components';
import { ClockWidget, SystemTrayWidget, SystemWidget } from '$/widgets';
import "./index.scss"

export const windowName = 'mainbar'

export const LeftBar = () => {  
  return (
    <box className="card" halign={Gtk.Align.START} valign={Gtk.Align.FILL}>
    </box>
  )
};

export const CenterBar = () => {  
  return (
    <box className="card" halign={Gtk.Align.CENTER} valign={Gtk.Align.FILL}>
    </box>
  )
};

export const RightBar = () => {  
  return (
    <box spacing={4} orientation={Gtk.Orientation.HORIZONTAL} halign={Gtk.Align.END} valign={Gtk.Align.FILL}>
      {/* <Card children={SystemTrayWidget()} /> */}
      <Card children={SystemWidget()} />
      <Card children={ClockWidget()} />
    </box>
  )
};

const Bar = ({ monitor }: { monitor: number }) => {
  return (
    <window
      name={`ags-${windowName}`}
      monitor={monitor}
      application={App}
      anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT }
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      margin={4}
      marginBottom={0}
    >
      <centerbox>
        <LeftBar />
        <CenterBar />
        <RightBar />
      </centerbox>
    </window>
  )
}

export default Bar

