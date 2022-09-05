import ReactPost from "./ReactPost";

const BulletinBoard = ({ posts }) => {

  return (
    <div>
      <h1> Anslagstavla</h1>
        {posts.map((post, index) => {
          return( <ReactPost key={index} question={post.question} answer={post.answer} />)
        })
        }
    </div>
  )
}

export default BulletinBoard