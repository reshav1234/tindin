
import { useState, useEffect } from 'react';
import image_01 from "../../Assets/business.webp";
import business_02 from "../../Assets/business_02.jpg";
import './UserProfile.css';

const UserProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    const nextIndex = activeIndex + 1 <= cardGroupData.length - 1 ? activeIndex + 1 : 0;
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    if (currentGroup && nextGroup) {
      currentGroup.dataset.status = 'after';
      nextGroup.dataset.status = 'becoming-active-from-before';

      setTimeout(() => {
        nextGroup.dataset.status = 'active';
        currentGroup.dataset.status = 'unknown';
      }, 0);
    }
  }, [activeIndex, cardGroupData.length]);

  const handleLoveClick = () => {
    const nextIndex = activeIndex + 1 <= cardGroupData.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(nextIndex);
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
                : index === (activeIndex + 1 <= cardGroupData.length - 1 ? activeIndex + 1 : 0)
                  ? 'becoming-active-from-before'
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
        <button>dislike</button>
        <button onClick={handleLoveClick}>like</button>
      </div>
    </div>
  );
};

export default UserProfile;
