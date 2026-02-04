export default function Post({ posts }) {
    const { title, body } = posts;
    return (
        <div>
            <h3>Title: {body}</h3>
            <p></p>
        </div>
    )
}