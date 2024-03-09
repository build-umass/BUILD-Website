import Link from 'next/link';

export default function NavbarLink({ page, linkDisplay }) {
  const isExternal = page.link.startsWith('http');

  return (
    isExternal ? (
      <a
        href={page.link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {linkDisplay || page.name}
      </a>) : (
      <Link href={page.link}>
        <a>
          {linkDisplay || page.name}
        </a>
      </Link>
    )
  );
}