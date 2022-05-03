import {useState} from 'react';

const verify_vote_option = (vote_option) => {
    if (vote_option === "Yes" || vote_option === "No") {
        return true;
    } else {
        return false;
    }
}

// SCAFFOLDING FOR VOTE MODAL NOT COMPLETE
function VoteModal(proposal){
    // const { proposal } = props.proposal;
    return (
        <div className='bg-green3'>
            <div className="flex flex-col w-full m-3 bg-black bg-opacity-60 text-white rounded-lg">
                {/* <p></p>{proposal.title} */}
                {proposal.votes.map(vote => {
                    return (
                        <div className="flex flex-row">
                        <input type="checkbox" name={vote.name} value="Yes" />
                        <label>Yes</label>
                        <p>Current # {vote.count}</p>
                        </div>)})}

                <div>
                    <button className='cast-vote'>Cast Vote</button>
                    
                </div>
                </div>
        </div>);
}
export default VoteModal;