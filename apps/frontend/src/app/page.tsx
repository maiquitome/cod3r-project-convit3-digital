import { PageTemplate } from "@/src/components/template/PageTemplate";
import { Evento } from "@/src/core";

export default function Home() {
  const e: Partial<Evento> = {};
  return (
    <PageTemplate>
      <div>Inicio</div>
    </PageTemplate>
  );
}
