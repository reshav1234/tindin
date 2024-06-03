import { useState, useEffect } from 'react';
import image_01 from "../../Assets/business.webp";
import business_02 from "../../Assets/business_02.jpg";
import './UserProfile.css';



const UserProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [action, setAction] = useState(null); // Add action state

  const cardGroupData = [
    {
      id: 1,
      imageURL: [
        image_01,
        image_01,
        business_02,
        image_01,
        business_02,
        image_01,
        image_01,
        image_01,
      ],
    },
    {
      id: 2,
      imageURL: [
        image_01,
        image_01,
        image_01,
        image_01,
        image_01,
        image_01,
        image_01,
        image_01,
      ],
    },
  ];

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '1vmin',
    overflow: 'hidden',
  };

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
