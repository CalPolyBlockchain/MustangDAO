import Proposal from "./Proposal";
function ProposalView(props) {
    return (
        <div className="container">
            {props.proposals.map(proposal => {
                return (
                    <Proposal key={proposal.id} {...proposal} />
                )
            })}
        </div>
        );
}