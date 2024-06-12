/* eslint-disable react/prop-types */
const ImageShow = ({image}) => {
  return (
    <>
    <div>
      <img src={image.src.large}/>
    </div>
    </>
  )
}

export default ImageShow