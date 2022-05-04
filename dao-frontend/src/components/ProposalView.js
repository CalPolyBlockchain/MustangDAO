import Proposal from "./Proposal";

function ProposalView(props) {
    return (
        <div className="justify-center">
            <p className="text-4xl">Proposals</p>
            
            {props.proposals.map(proposal => {
                return (
                    <Proposal key={proposal.id} {...proposal} showVoteModal={(id) =>props.showVoteModal(id)}/>
                )
            })}
        </div>
    );
}
export default ProposalView;