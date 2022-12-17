import Box from '@mui/material/Box';
import Stockdet from './Stockdet';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


export default function Adminresult() {

    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];

    return (
        <div class="w-100 flex">
            <div class="w-50 rounded-md flex flex-col p-5 justify-center mt-9">
                <div className="w-100 rounded-md flex p-5 justify-center mt-9 bg-blue-100">
                    <h1 className="p-3 mr-4">The result is </h1>
                      
                      <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    helperText="Selected Currency"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                      <button type="submit" className="text-white h-max mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GO...</button>
                </div>
                <div class="mt-10">
              
                    <form action="">
                      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Insights</label>
                      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Why this?..."></textarea>
                      <button type="submit" className="mt-5 text-white h-max mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>

                </div>
           </div>
           <div class="50">
                  <Stockdet/>
           </div>
      </div>
    )
}