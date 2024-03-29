import React from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious
} from '@/components/ui/carousel'
import Navbar from '../../components/Navbar';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NewsPage = () => {
  return (
  <>
  <div>
    <NavigationMenu/>
  </div>
        <div className='p-5'>
            <div className='flex justify-center items-center gap-4'>
                <h1 className='font-semibold text-4xl'>News</h1>
                <FontAwesomeIcon icon={faNewspaper} className='text-3xl'/>
            </div>
            <div className='p-3 flex gap-4 items-center justify-center'>
                <div className='w-auto border border-slate-900 p-3 px-5 rounded-md'>
                    <input type="text" placeholder='Search News' className=' focus:outline-none focus:ring-0' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>

        <div>
            <div className='flex justify-start gap-9 mt-5 mx-72'>
                <Link to={'/announcements'} >
                    <button>Anouncements</button>
                </Link>
                <Link to={'/news'} >
                <button className='underline'>News</button>
                </Link>
            </div>
            <div className='mx-72 mt-10 flex justify-center items-center gap-3 text-slate-800'>
                <div className='font-bold text-sm'>
                    <p>Today</p>
                    <p>03:00 </p>
                </div>

                <div className='border-l-2 border-slate-900 px-3'>
                <p className='text-xs'>By : Mang Tommy</p>
                    <h3 className='font-bold text-lg'>Welcome Pepito my Prend</h3>
                    <p className='text-xs font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut tempora nulla facere quae nostrum perspiciatis alias, soluta sequi eos esse in, impedit, aliquam a fuga recusandae placeat! Saepe, consequuntur? At!</p>
                </div>
            </div>
        </div>
  </>
  );
};


export default NewsPage;

