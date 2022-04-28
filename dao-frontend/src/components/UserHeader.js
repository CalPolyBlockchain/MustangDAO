function UserHeader(user) {
    return (
        <div className="flex flex-row sm:flex-col p-3 m-4 bg-black rounded-lg text-left justify-between text-white">
            <div className="flex flex-col p-3 m-3">
                <p className="text-xl">Welcome back</p>
                <p className="text-3xl">{user.name}</p>
            </div>
            <div className="flex flex-row justify-between ">
                <div className="flex flex-row">
                    <div>
                        <p className="text-2xl text-green3">{user.balance}</p>
                        <p className="opacity-70">DAO tokens</p>
                    </div>
                    <div className="">
                        <p className="text-2xl text-green1">
                            {user.vote_count}
                        </p>
                        <p className="opacity-70">Votes</p>
                    </div>
                </div>
            </div>
        </div>)
}
export default UserHeader;