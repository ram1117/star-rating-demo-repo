import styles from './page.module.css';
import Star from '@/components/star/Star';

export default function Home() {
  return (
  <div className={`${styles['main-container']}`}>
    <Star height={48} width={48} stroke='black' fill='gold' style={{border:'2px solid black'}} />
  </div>);
}
