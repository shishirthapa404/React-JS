const card = (user) => {

    console.log(user);
    console.log(user.name);
    return (
        <div className="card">
            <img src={user.img} alt={user.name} />
            <h2>{user.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aliquid!</p>
            <button>Click Me</button>
        </div>
    )
}

export default card
