import { MenuPage } from "@/components/menu-page";
export const runtime = 'edge';
export default async function Page({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams;
  return <MenuPage initialCategory={params.category || "all"}/>;
}
