type Props = {
    promise: Promise<Post[]>
}

export default async function UserPost({promise}: Props) {
    const posts = await promise;

    const content = posts.map(post => {
        return (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.title}</p>
                <br />
            </article>
        )
    })
  return content
}
