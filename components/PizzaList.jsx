import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>OUR FAVOURITE MENU</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                quasi adipisci nemo provident architecto alias vitae animi
                quisquam, atque tempora voluptatibus sed maxime. Reiciendis,
                architecto. Aspernatur vel commodi est consectetur!
            </p>
            <div className={styles.wrapper}>
                {pizzaList.slice(0, 8).map((pizza) => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
};

export default PizzaList;
