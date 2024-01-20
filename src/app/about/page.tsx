import { Metadata } from 'next';
import styles from './page.module.css';


export const metadata: Metadata = {
  title: 'About | Training Next App'
}

const About = () => {
  return (
    <h3 className={styles.header}>Select subitem</h3>
  )
}

export default About