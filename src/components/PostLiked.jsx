import emoji from "emoji-dictionary";

const PostLiked = () => {
  const heart = emoji.getUnicode("heart");
  return (
    <div className="liked">
      <span aria-label="heart">{heart}</span><h4>Du gillar detta!</h4>
    </div>
  )
}

export default PostLiked