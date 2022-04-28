
// Proposals will have name, description, status,

function vote(){
    console.log('vote');
}


export default function Proposal(proposal) {
    return (
        <div key={proposal.key}className="flex flex-col m-2 p-2">
            <p className="text-2xl text-left">{proposal.name}</p>
            <p className="text-left">{proposal.description}</p>
            <p className="text-left">{proposal.status}</p>
            <div>
                <button onClick={vote} className="btn btn-primary">Vote</button>
            </div>
        </div>
    )
}