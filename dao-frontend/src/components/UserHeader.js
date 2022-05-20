import { AiFillFileAdd } from 'react-icons/ai';
// import {progress} from 'daisyui
function UserHeader(user) {
    return (
        <div className="static p-3 m-4 bg-black rounded-lg text-left opacity-80">
            <div className="flex flex-row p-3 m-3 justify-between">
                <div className="">
                <p className="text-xl opacity-70">Welcome back</p>
                <p className="text-4xl text-yellow1">{user.name}</p>
                </div>
            <button  onClick={()=>user.showNewProp()}className='bg-yellow1 text-2xl rounded-lg outline-4 outline outline-yellow1 hover:bg-opacity-0 hover:text-yellow text-white py-2 px-3'>
                
                    <AiFillFileAdd/>
                    New Proposal
                    </button>
               
            </div>
            <div class="stats shadow text-white bg-black">

                <div class="stat place-items-center">
                    <div class="stat-title">Your Proposals</div>
                    <div class="stat-value text-lightBlue1">{user.proposal_count}</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Your Votes</div>
                    <div class="stat-value text-secondary text-green1">{user.vote_count}</div>
                    
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Active proposals</div>
                    <div class="stat-value text-yellow1">{user.active_proposals}</div>
                </div>

            </div>
        </div>)
}
export default UserHeader;