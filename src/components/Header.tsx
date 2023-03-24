import Image from "next/image";

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <a
        href="https://www.akur8.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/akur8.svg"
          alt="Akur8 Logo"
          width={180}
          height={37}
          priority
        />
      </a>
      <h1>Senior Front-end Engineer Test</h1>
    </div>
  </header>
);

export default Header;
