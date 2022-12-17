import Dropdown from '../components/Dropdown'
export default function admin() {
    const option=["op1","op1","op1"]
    return(
       <div class="w-100  ">
            <h1 class="text-4xl text-center m-10">Admin</h1>
             <div class="mt-30 w-full flex  justify-center">
                <Dropdown  option={option}/>
            </div>
       </div>
    )
}