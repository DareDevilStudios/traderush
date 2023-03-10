import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import GoogleChart from '../components/GoogleChart'
import Trade_top from '../components/Trade_top'
import Trading_down from '../components/Trading_down'
import { useState, useEffect } from 'react'
import { Alert } from "@mui/material";
import { sizeHeight } from '@mui/system'

const inter = Inter({ subsets: ['latin'] })
const win = "Winner"

const tradingpage = () => {

    const [Result, setResult] = useState(false)
    const [Insights, setInsights] = useState("")
    const [Published, setPublished] = useState("")

    useEffect(() => {
        let result = localStorage.getItem('result')
        const insights = localStorage.getItem('insights')
        if (result == "false") {
            result = false
        }
        else {
            result = true
        }
        setResult(result)
        setInsights(insights)
        setPublished(localStorage.getItem('published'))
    }, [])

    console.log(Result, Insights)

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-900 h-screen">
                <Navbar />
                {
                    Published == "true" ? 
                    Result ?

                        <div className="w-full h-screen flex justify-center items-center flex-col">
                            <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">You have won the prize!!</h5>
                            </a>
                            <div class="mt-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <h1 class="mb-2 text-2xl text-white  font-semibold">Insights</h1>
                                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{Insights}</p>
    
                            </div>
                        </div>
    
                        :
    
                        <div className="w-full h-screen flex justify-center items-center flex-col">
                            
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Better luck next time</h5>
                            </a>
                            <div class="mt-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <h1 class="mb-2 text-2xl text-white  font-semibold">Insights</h1>
                                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{Insights}</p>
    
                            </div>
                        </div>
    
                    
                    :
                    <div className="">
                        <div className="w-full h-screen flex justify-center items-center flex-col">
                            <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Results will be out soon!!</h5>
                            </a>
                        </div>
                    </div>
                }
            </main>
        </>
    )
}

export default tradingpage
