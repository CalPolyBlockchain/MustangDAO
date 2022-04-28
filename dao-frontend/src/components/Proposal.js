
// Proposals will have name, description, status,

function vote() {
    console.log('vote');
}


export default function Proposal(proposal) {
    return (
        <div key={proposal.key} className="flex flex-col w-full m-3 p-4 outline outline-4 outline-white bg-black text-white rounded-lg">
            <p className="text-2xl text-left">{proposal.name}</p>
            <p className="text-left">{proposal.description}</p>
            <p className="text-left">{proposal.status}</p>
            <div className="flex flex-row justify-between gap-4">
                {/*  Show vote totals and current proportions */}
                <div>
                    <p className="text-left text-3xl text-white"> {proposal.total_votes}</p>
                    {proposal.votes.map(vote => {
                        return (
                            <div key={vote.option} className="flex flex-row justify-between gap-4">
                                <p className="text-left text-3xl"> {vote.option}</p>
                                <p className="text-left text-3xl"> {vote.count}</p>
                            </div>)
                    })}
                </div>
                <div>
                    <button onClick={vote} className="btn btn-primary mx-4">Vote</button>
                </div>
            </div>
        </div>
    )
}