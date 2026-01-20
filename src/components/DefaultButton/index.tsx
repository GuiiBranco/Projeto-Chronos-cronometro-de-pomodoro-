import styles from './style.module.css';

type DefaultButtonProps = {
    icon: React.ReactNode,
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefultButton({ color='green', icon, ...props }: DefaultButtonProps) {
    return (
        <button className={`${styles.button} ${styles[color]}`} {...props}>
            {icon}
        </button>
    );
};