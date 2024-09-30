import type { Metadata } from "next";
import Link from "next/link";
import Image from 'next/image';
import globalstyles from "../scss/gloabal.module.scss"
import styles from "../scss/header.module.scss"

export const metadata: Metadata = {
  title: "Game Of Thrones",
  description: "Game Of Thrones best practices api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={globalstyles.bodystyle}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={150} height={150} />
            </Link>
          </div>
          <nav>
            <ul className={styles.navlist}>
              <li>
                <Link href="/houses">Houses</Link>
              </li>
              <li>
                <Link href="/characters">Chacracters</Link>
              </li>
              <li>
                <button>Login</button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
        </footer>
      </body>
    </html>
  );
}
