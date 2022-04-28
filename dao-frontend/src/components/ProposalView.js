import Proposal from "./Proposal";
function ProposalView(props) {
    return (
        <div className="justify-center">
            {props.proposals.map(proposal => {
                return (
                    <Proposal key={proposal.id} {...proposal} />
                )
            })}
        </div>
        );
}
export default ProposalView;