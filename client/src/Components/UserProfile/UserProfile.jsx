import { useState, useEffect } from 'react';
import { getCards } from '../../api/index.js';

import './UserProfile.css';



const UserProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [action, setAction] = useState(null); // Add action state
  const [cardGroupData, setCardGroupData] = useState([])


  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '1vmin',
    overflow: 'hidden',
  };

  useEffect(() => {
    fetchCard()
  }, [])

  const fetchCard = async () => {
    try {
      const fetchedCards = await getCards()
      setCardGroupData(fetchedCards.map(card => ({
        id: card.id,
        imageURL: [
          card.image1,
          card.image2,
          card.image3,
          card.image4,
          card.image5,
          card.image6,
          card.image7,
          card.image8,
        ]
      })))
    } catch (err) {
      console.error("Error fetching card", err)
      throw err
    }
  }
  useEffect(() => {
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextIndex = action === 'like'
      ? (activeIndex + 1 <= cardGroupData.length - 1 ? activeIndex + 1 : 0)
      : (activeIndex - 1 >= 0 ? activeIndex - 1 : cardGroupData.length - 1);
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    if (currentGroup && nextGroup) {
      currentGroup.dataset.status = action === 'like' ? 'after' : 'before';
      nextGroup.dataset.status = action === 'like' ? 'becoming-active-from-before' : 'becoming-active-from-after';

      setTimeout(() => {
        nextGroup.dataset.status = 'active';
        currentGroup.dataset.status = 'unknown';
      }, 0);
    }

  }, [activeIndex, action, cardGroupData.length]);

  const handleLoveClick = () => {
    setAction('like');
    setActiveIndex((prevIndex) => (prevIndex + 1 <= cardGroupData.length - 1 ? prevIndex + 1 : 0));
  };

  const handleDislikeClick = () => {
    setAction('dislike');
    setActiveIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : cardGroupData.length - 1));
  };

  return (
    <div className="card-swiper">
      <div className="card-group">
        {cardGroupData.map((cardGroup, index) => (
          <div
            key={index}
            className="hero-group"
            data-index={index}
            data-status={
              index === activeIndex
                ? 'active'
                : 'unknown'
            }
          >
            {Array.isArray(cardGroup.imageURL) &&
              cardGroup.imageURL.map((image, imageIndex) => (
                <div key={imageIndex} className={imageIndex % 2 === 0 ? 'small-card card' : 'big-card card'}>
                  <img src={image} style={imageStyle} alt={`Image ${index}${imageIndex}`} />
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="card-swiper-button">
        <button className="button1" onClick={handleDislikeClick}></button>
        <button className="button2" onClick={handleLoveClick}></button>
      </div>
    </div>
  );
};

export default UserProfile;
