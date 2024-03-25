
export function Button () {
    const createStore = () => {
        console.log('clicked')
    }
    return (
        <div className="bg-white">
            <button onClick={createStore}>Créer un store</button>
        </div>
    )
}