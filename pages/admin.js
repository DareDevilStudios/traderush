import Adminresult from '../components/Adminresult'
import Stockdet from '../components/Stockdet';
export default function admin() {
    return(
       <div class="w-100  ">
            <h1 class="text-4xl text-center m-10">Admin</h1>
             <div class="mt-30 w-full flex  justify-center">
                {/* <Adminresult/> */}
                <Stockdet/>
            </div>
       </div>
    )
}