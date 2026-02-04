import './Post.css'
export default function Post({ post }) {
    const { title, body, userId, id } = post;
    return (
        <div className='post'>
            <h4>User ID: {userId}</h4>
            <h4>ID: {id}</h4>
            <h3>Title: {title}</h3>
            <p>{body}</p>
        </div>
    )
}