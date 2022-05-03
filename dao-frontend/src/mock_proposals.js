const prop_tags = [
  {name:"Gov.", description:"Governance", color:"yellow1"},
  {name:"Funds", description:"allocation of funds", color:"lightBlue1"},
  {name:"Meeting", description:"orchestration of meeting ", color:"green1"},
  {name:"Project", description:"Project", color:"darkBlue2"},
  {name:"Snack", description:"Governance", color:"green2"},

]

const user = {
  name: "John Doe",
  balance: "100",
  vote_count: "10",
  proposal_count: "4",
  active_proposals: "2",
  emoji: "👾",
  roles: ["dev", "designer"]
}

export const mock_proposals = [
  {
    id: 1,
    name: "Proposal 1",
    description: "This is proposal 1",
    tags : [prop_tags[0]],
    status: "Open",
    vote_count: 10,
    quorum: 15,
    proposer: user,
    votes: [{ "option": "Yes", "count": 10 },
    { "option": "No", "count": 4 }]
  },
  {
    id: 1,
    name: "Make metamask great again",
    description: "This is proposal here could go some real meaty text, almost as meaty as the rest of the page",
    tags : [prop_tags[0],prop_tags[2]],
    status: "Open",
    vote_count: 10,
    quorum: 15,
    proposer: user,
    votes: [{ "option": "Yes", "count": 10 },
    { "option": "No", "count": 4 }]
  },
  {
    id: 1,
    name: "Proposal 1",
    description: "This is proposal 1",
    tags : [prop_tags[0],prop_tags[1]],
    status: "closed",
    vote_count: 10,
    quorum: 15,
    proposer: user,
    votes: [{ "option": "Yes", "count": 10 },
    { "option": "No", "count": 4 }]
  },
]
