export default async function MovieDetail({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<{ region: string, lang: string }> }) {
  const { id } = await params;
  const { region, lang } = await searchParams;

  return (
    <>
      <h1>Movie ID: { id }</h1>
      <h1>Movie region: { region }</h1>
      <h1>Movie lang: { lang }</h1>
    </>
  )
}