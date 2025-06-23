import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, []);
  return (
   <div className="flex w-[130vh] h-[90vh] rounded-lg overflow-hidden bg-gray-200">
  <Sidebar />
  <MessageContainer />
</div>

  )
}

export default HomePage