import { patientIds } from "@/constants";

export async function generateStaticParams() {
  return patientIds.map((id: any) => ({ id: String(id) }));
}

async function getPaziente(params: any) {
  const res = await fetch(
    `https://www.gdsuite.it/ws/select_paziente_data.php?pk_id_pt=${params.id}`,
  );
  const post = await res.json();

  return post;
}

export default async function Paziente({ params }: { params: { id: any } }) {
  const data = await getPaziente(params);

  return (
    <>
      ID: {params.id}
      <div>
        Paziente:{" "}
        {data.data
          .filter(({ field }: { field: any }) =>
            ["cognome_pt", "nome_pt", "data_nascita_pt"].includes(field),
          )
          .map((item: any) => item.value)
          .reverse()
          .join(" ")}
      </div>
      <pre className="text-sm mt-8">{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
