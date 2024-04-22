import image_01 from "../Assets/business.webp"


import './UserProfile/UserProfile.css'
const Register = () => {

  const images = [
    {
      id: 1,
      imageURL: image_01
    },
    {
      id: 2,
      imageURL: image_01
    },

    {
      id: 3,
      imageURL: image_01
    },
    {
      id: 4,
      imageURL: image_01
    },
    {
      id: 5,
      imageURL: image_01
    },
    {
      id: 6,
      imageURL: image_01
    },
    {
      id: 7,
      imageURL: image_01
    },
    {
      id: 8,
      imageURL: image_01
    }
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
      <div className="hero-group">
        {images.map((image, index) => (
          <div key={index} className={index % 2 == 0 ? 'small-card card' : 'big-card card'}>
            <img style={imageStyle} src={image.imageURL} alt={`Image ${index}`} />
          </div>

        ))}
      </div>
    </>
  )
}

export default Register
