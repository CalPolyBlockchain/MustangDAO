// create a home page with the info about the dao 

export default function Home(props) {
    return (
        <div className="items-center bg-darkBlue1 p-5 justify-center">
            <p className="text-3xl text-white text-center p-3 m-3"> Welcome to MustangDao</p>

            <p> Built on <img classname="w-30 h-auto" src="./celo.png"/></p>
            <div className="aspect-square rounded-full bg-white bg-opacity-30 p-10">
                
            {/* <img className="w-80 h-auto pr-1" src="./stang.png"></img> */}
            <a href="/app">
            <button className="btn  bg-green1 text-xl px-3 py-1" href="/app">Launch App</button>
            </a>

            <div className="">
                <p>Token Allocations</p>
                
            </div>
            </div>
        </div>);
}