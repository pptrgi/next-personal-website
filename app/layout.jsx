import "./globals.css";

import RootLayout from "../components/RootLayout";

export const metadata = {
  title: "p.Gitonga | Personal Website",
  description: "A personal portfolio website for Peter Gitonga",
  authors: [{ name: "Peter Gitonga" }],
  creator: "Peter Gitonga",
  keywords: ["Portfolio", "Next.js", "Fullstack Developer", "Peter Gitonga"],
  openGraph: {
    title: "p.Gitonga | Personal Website",
    description: "A personal portfolio website for Peter Gitonga",
    url: "https://pgitonga.vercel.app",
    images: [
      {
        url: "https://res.cloudinary.com/dxw5yqr3s/image/upload/v1701943079/Open%20Graph/next_portfolio_kjrppb.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "p.Gitonga | Personal Website",
    description: "A personal portfolio website for Peter Gitonga",
    creator: "@ptrgitonga",
    author: "@ptrgitonga",
    images: [
      "https://res.cloudinary.com/dxw5yqr3s/image/upload/v1701943079/Open%20Graph/next_portfolio_kjrppb.png",
    ],
  },
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
