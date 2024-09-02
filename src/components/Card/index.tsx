export default ({ children, variant = 'surface-100', ...rest }: {
  children: any;
  variant?: string;
  [x: string]: any;
}) => {
  return (
    <box {...rest} className={`card ${variant}`}>
      {children}
    </box>
  )
}

