
// Proposals will have name, description, status,
import { clipAddress } from "../utils/formatting";
import ProposalData from "./ProposalData";
import { progress } from "daisyui";
function vote() {
    console.log('vote');
}

export default function Proposal(proposal) {
    return (
        <div key={proposal.key} className="flex flex-col w-full m-3 bg-black bg-opacity-60 text-white rounded-lg">
            <div className="flex mt-0 px-4 py-2 flex-row bg-black rounded-lg bg-opacity-40 justify-between">
                <div className="flex flex-col mt-2 mx-3">
                    <p className="text-3xl text-left">{proposal.name}</p>
                    <div className="flex flex-row pt-1">
                        {proposal.status === 'Open' ? (
                            <div className="badge bg-green1">{proposal.status}</div>
                        ) : (
                            <div className="badge badge-lightBlue1 w-12">{proposal.status}</div>
                        )}
                    </div>
                </div>
                <div className="p-1 m-1">
                    <p className="opacity-60 text-lg">proposed by </p>
                    {/* user emoji */}
                    <p className="text-4xl">{proposal.proposer.emoji}</p>
                </div>
            </div>
            <div className="px-4 py-1">
                <p className="text-left max-w-xl">{proposal.description}</p>
                <p className="text-left">{proposal.status}</p>
                <div className="flex flex-row justify-between gap-4">
                    {/*  Show vote totals and current proportions */}
                    <div>
                        <p className="text-left text-3xl text-white"> {proposal.total_votes}</p>
                        
                        {/* <ProposalData/> */}
                        <div className="flex flex-row justify-between gap-2 text-center">
                            {proposal.tags.map((tag, i) => {
                                return (
                                    <div key={i} className={`px-2 py-1 m-1 rounded-full bg-${tag.color}`}>{tag.name}</div>)
                            })}
                        </div>
                    </div>
                    <div className="flex flex-row gap-6">
                    {proposal.votes.map((vote,i) => {
                            return (
                                <div key={i} className="flex flex-col">
                                    <p className="text-left text-3xl text-yellow1"> {vote.count}</p>
                                    <p className="text-left text-xl"> {vote.option}</p>
                                </div>)
                        })}
                        <button onClick={vote} className="btn bg-transparent outline outline-2 outline-green1 text-lg font-bold text-green1  mx-4">Vote</button>
                    </div>
                    {/* INDICATE PROG TO QUORUM */}

                </div>
                <div className="flex flex-col justify-end">
                    {proposal.vote_count - proposal.quorum > 0 ? (
                        (<div>
                            <progress className=" m-3 progress bg-lightBlue1 progress-secondary rounded-full w-56 h-4" value={proposal.vote_count} max={proposal.quorum} />
                            <p className="text-right text-sm opacity-60">{proposal.vote_count - proposal.quorum} Votes to reach Quorum</p>
                        </div>)) : (null)}
                </div>
            </div>
        </div>
    )
}