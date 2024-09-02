export default ({ width, height, src }: { width: number, height: number, src: string }) => {
  return (
    <box css={`
      width: ${width}px;
      height: ${height}px;
      background-image: url("${src}");
      background-size: contain;
    `} />
  )
};

