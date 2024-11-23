// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PaginaConvite(props: any) {
  // console.log("PaginaConvite", props);
  return (
    <div>
      <span>{props.params.alias}</span>
    </div>
  );
}
