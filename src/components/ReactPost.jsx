import PostLiked from "./PostLiked";
import { useState } from 'react';

const ReactPost = ({ question, answer }) => {
  const [liked, setLiked ] = useState(false);

  return (
    <div className="post">
      <h2>Fråga</h2>
      <h3>{question}</h3>
      <h4>Svar</h4>
      <p>{answer}</p>
      {liked ? <PostLiked /> :  <button className="button" onClick={()=> setLiked(true)}>Gilla</button>}
    </div>
  )
}

export default ReactPost