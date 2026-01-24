import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useState, useEffect } from "react";
import styles from "./style.module.css";

type AvailableThemes = 'light' | 'dark';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    };

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark" ? 'light' : 'dark';
            return nextTheme;
        });
    };

    // useEffect(() => {
    //     console.log('useEffect sem dependências', Date.now());
    // }); // Executado toda vez que o componente renderiza na tela

    // useEffect(() => {
    //     console.log('useEffect com array deps vazio', Date.now());
    // }, []); // Executa apenas quando o React monta o componente na tela pela primeira vez

    useEffect(() => {
        console.log('Theme mudou', theme, Date.now());
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        return () => {
            console.log('Este componente será atualizado.'); // Clean up function
        };
    }, [theme]); // Executa apenas qunado o valor de theme muda

    return(
        <nav className={styles.menu}>
            <h1>{theme}</h1>
            <a 
                href="#"
                className={styles.menuLink}
                aria-label="Ir para a Home"
                title="Ir para a Home"
            >
                <HouseIcon />
            </a>

            <a 
                href="#"
                className={styles.menuLink}
                aria-label="Ver Histórico"
                title="Ver Histórico"
            >
                <HistoryIcon />
            </a>

            <a
                href="#"
                className={styles.menuLink}
                aria-label="Configurações"
                title="Configurações"
            >
                <SettingsIcon />
            </a>

            <a
                href="#"
                className={styles.menuLink}
                aria-label="Mudar Tema"
                title="Mudar Tema"
                onClick={handleThemeChange}
            >
                {nextThemeIcon[theme]}
            </a>
        </nav>
    );
};