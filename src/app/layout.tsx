import "./global.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
    title: "Brewery",
    description: "Generated by Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
