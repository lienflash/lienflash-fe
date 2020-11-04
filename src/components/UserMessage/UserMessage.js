import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const UserMessage = ({ dateDifference, status, handleClick }) => {

  return (
    //  {/* buttons depending on where in the process they are */ }
    <div>
      {(dateDifference > 10 || status === 'NOI Eligible') &&
        <Popup trigger={<button className='btn-submit'>Submit NOI</button>} position="top left">
          {close => (
            <section className="popup-msg">
              Please confirm if you would like to submit a NOI for this job. 
              <br /> <br />
              Your account will be charged $0.00.
              <button className="close" onClick={close}>Close
              &times;
              </button>
              <button className="confirm" onClick={() => handleClick(2)}>Confirm
              </button>
            </section>
          )}
        </Popup>
      }
      
      {(status === 'Good Standing' || status === 'NOI Eligible') &&
        <Popup trigger={<button className='btn-submit'>Remove Job</button>} position="top left">
          {close => (
            <section className="popup-msg">
              Are you sure you want to remove this job?
              <button className="close" onClick={close}>Close
              &times;
              </button>
              <button className="confirm" onClick={() => handleClick(5)}>Confirm
            </button>
            </section>
           )}
        </Popup>
        }
      
      {status === 'NOI Filed' &&
        <Popup trigger={<button className='btn-submit'>Submit Lien</button>} position="top left">
          {close => (
            <section className="popup-msg">
              Please confirm if you would like to submit a NOI for this job.
              <br /><br />
              Your account will be charged $0.00.
              <button className="close" onClick={close}>Close
              &times;
              </button>
              <button className="confirm" onClick={() => handleClick(3)}>Confirm
              </button>
            </section>
          )}
        </Popup>
      }

      {status === 'Lien Filed' &&
        <Popup trigger={<button className='btn-submit'>Submit Release of Lien</button>} position="top left">
          {close => (
            <section className="popup-msg">
              Please confirm if you would like to release the lien for this job.
              <br /><br />
              Your account will be charged $0.00.
              <button className="close" onClick={close}>Close
              &times;
              </button>
              <button className="confirm" onClick={() => handleClick(5)}>Confirm
              </button>
            </section>
          )}
        </Popup>
      }
    </div>
  )
};

export default UserMessage;