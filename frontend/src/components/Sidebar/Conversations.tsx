import { useDeferredValue } from 'react';
import useGetConversation from '../../hooks/useGetConversation'
import useSearch from '../../zustand/useSearch';
import Conversation from './Conversation'

export default function Conversations() {
  const { loading, conversations } = useGetConversation();
  const { search } = useSearch();
  const deferredSearch = useDeferredValue(search);

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <ul className='list-inside list-none'>
        {conversations.map((con, index) => {
          if (con.fullname.toLowerCase().includes(deferredSearch.toLowerCase())) {
            return (
                <li key={index}>
                  <Conversation
                    _id={con._id}
                    emoji={con.emoji}
                    fullname={con.fullname}
                    profilePick={con.profilePick}
                  />
                  {index !== conversations.length - 1 && <div className='divider mt-2 mb-2 px-3'></div>}
                </li>
              )
          }
        })}
      </ul>
      {loading ? <span className='loading loading-spinner'></span> : (
        null
      )}
    </div>
  )
}
