import { HeaderPagarMe } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Section5 } from "@/components/Novo Ofertas/Section 5"
import { Cards } from "@/components/Cards"
import { Hero } from "@/components/Hero"

export default function Home() {
  return (
    <main>
      <HeaderPagarMe />
      <Hero />
      <Cards />
      <div style={{ marginTop: "-100px" }} />
      <Section5></Section5>
      <div style={{ height: "20vh" }} />
      <Footer />
    </main>
  )
}
