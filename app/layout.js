import "./globals.css";
import ClientLayout from "./ClientLayout";


export const metadata = {
  metadataBase: new URL("https://wenimaestudio.com/"),
  title: {
    default: "We Nima Estudio – Diseño Digital & Desarrollo",
    template: "%s | We Nima Estudio",
  },
  description:
    "We Nima Estudio crea identidades visuales únicas, webs funcionales y experiencias digitales con creatividad, tecnología y estrategia.",
  openGraph: {
    title: "We Nima Estudio – Desarrollo, Diseño, Branding y Web",
    description:
      "Desarrollo web, diseño gráfico, branding y animaciones digitales para potenciar tu presencia online",
    url: "https://wenimaestudio.com/",
    siteName: "We Nima Estudio",
    images: [
      {
        url: "https://wenimaestudio.com/opengraph/graphwenima.png",
        width: 1200,
        height: 630,
        alt: "We Nima Estudio – Soluciones digitales creativas",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="lenis">
      <body className={`antialiased overflow-x-hidden lg:pb-[60vh] 2xl:pb-[75vh]`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
