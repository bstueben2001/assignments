import MemeDisplay from "./MemeDisplay"


export default function MemeList(props){

    //create function that maps through info from memeListArr (props), 
    // then adds prop info to the 'li' below
    const getMemes = () => {
        return props.memeList.map((meme, index) => {
            return <MemeDisplay key={index} memeText={meme.memeText} imgURL={meme.imgURL}/> 
        })
    }

    return(
        <>
            count = {props.count}
            {getMemes()}
        </>
    )
}


//make meme array
// complete memelist edit function
