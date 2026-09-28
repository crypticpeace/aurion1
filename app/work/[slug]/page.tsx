import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import ClientShowcase from "@/components/work/ClientShowcase";
import { clients, getClient } from "@/lib/clients";

export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const client = getClient(params.slug);
  if (!client) return { title: "Work | Aurion Digital" };
  return {
    title: `${client.name} | Aurion Digital`,
    description: client.summary,
  };
}

export default function ClientPage({ params }: { params: { slug: string } }) {
  const client = getClient(params.slug);
  if (!client) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ClientShowcase client={client} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
