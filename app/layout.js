import './globals.css';

export const metadata = {
  title: 'Next.js + SQLite',
  description: 'A simple Next.js app with SQLite database'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
