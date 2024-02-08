import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullhorn } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom"
import { NavigationMenu } from "@/components/ui/navigation-menu"

export default function AllAnnouncement() {
  return (
    <>
    <div>
    <NavigationMenu/>
  </div>
        <div className='p-5'>
            <div className='flex justify-center items-center gap-4'>
                <h1 className='font-semibold text-4xl'>Announcements</h1>
                <FontAwesomeIcon icon={faBullhorn} className='text-3xl'/>
            </div>
            <div className='p-3 flex gap-4 items-center justify-center'>
                <div className='w-auto border border-slate-900 p-3 px-5 rounded-md'>
                    <input type="text"
                        placeholder='Search Announcements'
                        className='focus:outline-none focus:ring-0'
                        />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
        <div>
            <div className='flex justify-start gap-9 mt-5 mx-72'>
                <Link to={'/announcement'} >
                    <button className='underline'>Anouncements</button>
                </Link>
                <Link to={'/'} >
                <button>News</button>
                </Link>
            </div>
            <div className='mx-72 mt-10 flex justify-center items-center gap-3 text-slate-800'>
                <div className='font-bold text-sm'>
                    <p>Today</p>
                    <p>03:00 </p>
                </div>

                <div className='border-l-2 border-slate-900 px-3'>
                <p className='text-xs'>By : Mang Tommy</p>
                    <h3 className='font-bold text-lg'>Welcome Pepito My Prend</h3>
                    <p className='text-xs font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut tempora nulla facere quae nostrum perspiciatis alias, soluta sequi eos esse in, impedit, aliquam a fuga recusandae placeat! Saepe, consequuntur? At!</p>
                </div>
            </div>
        </div>
    </>
  )
}
