export default function Search() {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const query = formData.get('query')
        const response = await fetch(`https://pokeapi.co/api/v2/ability/?limit=20&offset=20`)
        console.log(response)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="query" />
            <button type="submit">Search</button>
        </form>
    )
}
