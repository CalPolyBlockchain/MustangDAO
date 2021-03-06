
// Proposals will have name, description, status,
import { clipAddress } from "../utils/formatting";
import ProposalData from "./ProposalData";
import { progress } from "daisyui";

export default function Proposal(proposal) {
    return (
        <div key={proposal.key} className="flex flex-col w-full m-3 bg-black bg-opacity-60 text-white rounded-lg">
            <div className="flex mt-0 px-4 py-2 flex-row bg-black rounded-lg bg-opacity-60 justify-between">
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
                <div className="flex flex-col p-1 m-1">
                    {/* user emoji */}
                    <p className="text-2xl p-1">{proposal.proposer.emoji}</p>
                    <p className="opacity-60 text-sm">proposed by </p>
                </div>
            </div>
            <div className="px-4 py-1 text-left">
                <p className=" max-w-xl">{proposal.description}</p>
                <a href="">
                <p className="pl-3 underline hover:font-bold ">View forum  </p>
                </a>
                <div className="flex flex-row justify-between gap-4">
                    {/*  Show vote totals and current proportions */}
                    <div>
                        <p className="text-left text-3xl text-white"> {proposal.total_votes}</p>

                        {/* <ProposalData/> */}
                        <div className="flex flex-row justify-between gap-2 text-center">
                            {proposal.tags.map((tag, i) => {
                                return (
                                    <div key={i} className={`px-2 py-1 m-1  text-sm rounded-full bg-${tag.color}`}>{tag.name}</div>)
                            })}
                        </div>
                    </div>
                    <div className="flex flex-row gap-6">
                        {proposal.vote_count - proposal.quorum < 0 ? (
                            (<div className=" pt-1">
                                <progress className="m-2 mb-0 progress bg-lightBlue1 progress-secondary rounded-full w-56 h-4" value={proposal.vote_count} max={proposal.quorum} />
                                <p className="text-right text-sm opacity-60">{proposal.quorum - proposal.vote_count} Votes to reach Quorum</p>
                            </div>)) : (null)}
                        {proposal.votes.map((vote, i) => {
                            return (
                                <div key={i} className="flex flex-col">
                                    <p className="text-left text-3xl text-yellow1"> {vote.count}</p>
                                    <p className="text-left text-xl"> {vote.option}</p>
                                </div>)
                        })}
                        <button onClick={()=>proposal.showVoteModal(proposal.id)} className="btn bg-transparent hover:bg-green1 hover:text-white outline outline-2 outline-green1 text-lg font-bold text-green1  mx-4">Vote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}