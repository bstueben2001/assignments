export default function Display({
  imgUrl,
  title,
  description,
  _id,
  handleEditFunc,
  handleDeleteFunc,
  editMode,
  uglyInfo,
  handleChange,
  saveEdit,
  setEditMode
}) {

  const imgStyle = {
    width: "300px",
    height: "300px",
    margin: "20px",
    border: "2px solid black"
  };

  
  return (
    <div className="uglyCard">
      {editMode === _id ? (
        <>
          <input
            className="inputFields"
            name="imgUrl"
            value={uglyInfo.imgUrl}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <input
            className="inputFields"
            name="title"
            value={uglyInfo.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            className="inputFields"
            name="description"
            value={uglyInfo.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <button onClick={() => saveEdit(_id, uglyInfo)}>Save</button>
          <button onClick={() => setEditMode(null)}>Cancel</button>
        </>
      ) : (
        <>
          <div>
            <img src={imgUrl} alt={title} style={imgStyle} />
            <h2>{title}</h2>
            <h3>{description}</h3>
          </div>
          <div>
            <button onClick={() => handleEditFunc(_id)}>Edit</button>
            <button onClick={() => handleDeleteFunc(_id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}