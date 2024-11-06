import image from "./assets/profile.jpg"
function Cards(){
  return(
    <div className="cards">
      <img  className="image" src={image} alt="info" ></img>
    <h2 className="title">karthick</h2>
    <p className="text">i am learning full stack web development  </p>
    </div>

  )
}
export default Cards