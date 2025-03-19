import React, { useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';

const App = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading,getAccessTokenSilently } = useAuth0();
  

  const validateToken=async()=>{
    try {
      const token=await getAccessTokenSilently()
    // console.log(token)
        const res=await axios.post('http://localhost:3000/auth/callback',{token})
        console.log(res);
        
    } catch (error) {
      console.log(error);
      
    }
  }


  useEffect(()=>{
    if(isAuthenticated){
      validateToken()
    }
  },[isAuthenticated])








  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>

      <div className='container-fluid'>
        <div className='row d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>

          <div className={`col-3 shadow-lg rounded-2 rounded-top-0  border-top border-2 ${isAuthenticated ? 'border-danger' : 'border-primary'} p-3`}>


            {
              isAuthenticated && <div className='container'>

                <div className='row d-flex justify-content-center'>
                  <img src={user.picture} className='rounded-circle w-25' alt='profile'></img>
                </div>

                <div className='row my-2 d-flex justify-content-center fw-semibold' style={{ fontSize: 13 }}>
                  {user.name}
                </div>



              </div>
            }



            {isAuthenticated ?
              <div className='row d-flex justify-content-center gap-2'>
                {/* <button type='button' className='btn fw-semibold btn-secondary' style={{ fontSize: 13 }} onClick={validateToken}>Validate Token</button> */}
                <button type='button' className='btn fw-semibold btn-danger' style={{ fontSize: 13 }} onClick={() => logout()}>Logout</button>
              </div>
              :

              <div className='row d-flex justify-content-center'>
                <button type='button' className='btn fw-semibold btn-primary' style={{ fontSize: 13 }} onClick={() => loginWithRedirect()}>Login</button>
              </div>

            }
          </div>
        </div>
      </div>





    </>
  )
}

export default App