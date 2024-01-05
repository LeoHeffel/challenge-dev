import { createContext, useState } from "react";
import { useQuery, gql } from '@apollo/client';


export const QueryContext = createContext();

const QueryProvider = ({ children }) => {
   
    const [filter, setFilter] = useState(null)
    const [page, setPage] = useState(1)
    
    const GET_CHARACTERS = gql`
    query {
        characters(filter: ${ filter }, page: ${page}) {
          results {
            id
            name
            image
          }
        }
      }
      
  `;
  const GET_PAGINATION = gql`
  query {
      characters(filter: ${ filter },page: ${page}) {
        info {
          count
          pages
          next
          prev
        }
      }
    }
  `;


    return (
        <QueryContext.Provider value={{filter, setFilter, GET_CHARACTERS, GET_PAGINATION, page, setPage}}>
            {children}
        </QueryContext.Provider>
    )
}
export default QueryProvider