import { PageTemplate } from "@/src/components/template/PageTemplate";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout(props: any) {
  return <PageTemplate>{props.children}</PageTemplate>;
}
