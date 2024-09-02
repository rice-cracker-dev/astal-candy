import { bind } from 'astal';
import AstalNetwork from 'gi://AstalNetwork';

const network = AstalNetwork.get_default();

const icons = {
}

export default () => {
  return (
    <box>
      <label label={bind(network, 'primary').toString()} />
    </box>
  );
};
