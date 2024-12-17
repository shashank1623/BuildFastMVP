import Link from 'next/link'

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link href={href} onClick={onClick} className="text-lg text-gray-300 hover:text-white">
      {children}
    </Link>
  )
}