import "./globals.css";

import RootLayout from "../components/RootLayout";

export const metadata = {
  title: "p.Gitonga",
  description: "A personal website",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
