export default function MemeList({ memeList, imgStyle }) {
  return (
    <div>
      <h2>Meme List</h2>
      {memeList.map((meme, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <img src={meme.imgURL} style={imgStyle} alt={`Meme ${index}`} />
          <p><strong>Top Text:</strong> {meme.topText}</p>
          <p><strong>Bottom Text:</strong> {meme.bottomText}</p>
        </div>
      ))}
    </div>
  )
}