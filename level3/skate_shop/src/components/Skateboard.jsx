
export default function Skateboard({name, size, style, design, price}){

    const sizeElements = size.map((num, index) => {
        return  (
            <p key={index}>{num}</p>
        )
    })

    return (
    <div className="skateboard">
      <h2>{name}</h2>
      <p>Sizes:</p>
      {sizeElements}
      <p>{style}</p>
      <p>{design}</p>
      <p>{price}</p>
    </div>
    )
}