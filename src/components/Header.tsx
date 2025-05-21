type HeaderProps = { navItems: string[] };

export default function Header({ navItems }: HeaderProps) {
    return (
        <header>
            <nav>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};