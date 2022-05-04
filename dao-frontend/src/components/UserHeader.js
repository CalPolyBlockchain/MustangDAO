import { AiFillFileAdd } from 'react-icons/ai';
// import {progress} from 'daisyui
function UserHeader(user) {
    return (
        <div className="flex flex-col p-3 m-4 bg-black rounded-lg text-left opacity-80">
            <div className="flex flex-row p-3 m-3 justify-between">
                <div className="">
                <p className="text-xl opacity-70">Welcome back</p>
                <p className="text-4xl text-yellow1">{user.name}</p>
                </div>
                <div className="">
                    <div className='w-30 h-30 bg-white text-center bg-opacity-30 p-2 rounded-lg '>
                    <p className='text-5xl'><AiFillFileAdd/></p>
                    <p className='text-center'> New Proposal </p>
                    </div>
                </div>
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