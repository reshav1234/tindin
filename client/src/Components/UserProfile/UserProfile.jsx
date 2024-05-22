
import image_01 from "../../Assets/business.webp"


import './UserProfile.css'
const UserProfile = () => {

  const cardGroupData = [
    {
      id: 1,
      imageURL: [
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        }
      ]
    },
    {
      id: 2,
      imageURL: [
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        },
        {
          imageURL: image_01
        }
      ]
    },


  ]


  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '1vmin',
    overflow: 'hidden'
  }

  return (
    <>
      <div className="card-swiper">
        <div className="card-group">
          {cardGroupData.map((cardGroup, index) => (
            <div key={index} className="hero-group" data-index={index} data-status={index == 0 ? 'active' : 'unknown'}>
              {Array.isArray(cardGroup.imageURL) && cardGroup.imageURL.map((image, imageIndex) => (
                <div key={imageIndex} className={imageIndex % 2 == 0 ? 'small-card card' : 'big-card card'}>
                  <img src={image.imageURL} style={imageStyle} alt={`Image ${index}${imageIndex}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="card-swiper-button">
          <button>dislike</button>
          <button>like</button>
        </div>
      </div>

    </>
  )
}

export default UserProfile
