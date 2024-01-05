import {Link, useParams} from "react-router-dom"

import { useQuery, gql } from '@apollo/client';



const Pagination = ()=>{

const current = parseInt(useParams().page) || 1
const GET_PAGINATION = gql`
query {
    characters(page: ${current}) {
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;
const { loading, error, data } = useQuery(GET_PAGINATION);
  let paginationInfo 
if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;
if (!loading) {
    paginationInfo = data.characters.info
   const { pages, next, prev} = paginationInfo

   
    const classNumber ="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    const claseNumberActive ="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
 
      return (
        <div className="flex flex-col items-center">
  { /* Help text */ }
  <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing  <span className="font-semibold text-gray-900 dark:text-white">{current}</span> of <span className="font-semibold text-gray-900 dark:text-white">{pages}</span> of <span className="font-semibold text-gray-900 dark:text-white"></span> Pages
  </span>
  <div className="inline-flex mt-2 xs:mt-0">
    { /* Buttons */ }
    <Link  to={`/${prev}`} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5H1m0 0 4 4M1 5l4-4" />
        </svg>
        Prev
    </Link>
    <Link to={`/${next}`} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </Link>
  </div>
</div>) 
    }
}
export default Pagination