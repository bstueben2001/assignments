

export default function MemeDisplay(props) {
  const imgStyle = {
    width: "450px",
    height: "600px",
    margin: "20px",
    border: "2px solid black",
    objectFit: "cover"
  }

  const containerStyle = {
    position: "relative",
    width: "450px",
    height: "600px",
    margin: "20px auto",
    fontFamily: "Impact, sans-serif",
    textTransform: "uppercase"
  }

  const textStyle = {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    color: "white",
    fontSize: "2rem",
    textShadow: "2px 2px 4px black",
    padding: "0 10px",
  }

  return (
    <div style={containerStyle}>
      <img src={props.imgURL} style={imgStyle} alt="Generated meme" />
      <div style={{ ...textStyle, top: "30px" }}>
        {props.memeText?.topText}
      </div>
      <div style={{ ...textStyle, bottom: "1px" }}>
        {props.memeText?.bottomText}
      </div>
    </div>
  )
}