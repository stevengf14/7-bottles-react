import styles from '../../assets/styles/header.module.css';

export default function Header() {
    return (
        <div className={styles.background}>
            <section className="hero is-medium is-align-items-center">
            <div className="hero-body">
                <div className="title is-1 has-text-link-light has-text-weight-semibold">
                    7 Bottles 
                </div>
            </div>
        </section >
        </div>
        
    );
}