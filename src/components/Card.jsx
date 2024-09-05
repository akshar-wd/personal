import React from 'react';
import styles from './css/card.module.css';

// Sample card data
const cardData = [
  {
    title: "Letter 1",
    description: "This card is about our start",
    image: "/assets/photo_2023-11-02_00-44-42.jpg",
    href: "https://spotted-venom-03b.notion.site/Letter-1-5a4aefc440a847888d2b4bee7f34c2bd?pvs=4"
  },
  {
    title: "Letter 2",
    description: "Trips",
    image: "/assets/mumbai again.jpg",
    href: "https://spotted-venom-03b.notion.site/Letter-2-323a17c92eee4e24ba8c2559140dac74?pvs=4"
  },
];

const Card = ({ title, description, image, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
};

const CardList = () => {
  return (
      // <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
    <div name="Letter" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" >
      <h1 className={styles.pageTitle}>My Letters</h1>
      <div className={styles.cardsContainer}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            href={card.href}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
