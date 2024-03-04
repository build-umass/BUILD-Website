import Link from 'next/link';

export default function NavbarLink({ page }) {
  const isExternal = page.link.startsWith('http');

  return (
    isExternal ? (
      <a
        href={page.link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {page.name}
      </a>) : (
      <Link href={page.link}>
        <a>
          {page.name}
        </a>
      </Link>
    )
  );
}