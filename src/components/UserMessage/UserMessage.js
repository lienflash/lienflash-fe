import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const UserMessage = ({ dateDifference, status, handleClick }) => {

  return (
    // {/* buttons depending on where in the process they are */ }
    <div>
      {(dateDifference > 10 || status === 'NOI Eligible') &&
        <Popup trigger={<button className='btn-submit'>Submit NOI</button>} position="top left">
          {close => (
            <section className="popup-msg">
              Please confirm if you would like to purchase ... for $45.00
              <button className="close" onClick={close}>Close
              &times;
              </button>
              <button className="confirm" onClick={() => handleClick(0)}>Confirm
              </button>
            </section>
          )}
        </Popup>
      }
   
      {status === 'NOI filed' &&
        <Popup trigger={<button className='btn-submit'>Submit Lien</button>} position="top left">
          {close => (
            <section className="popup-msg">
              Please confirm if you would like to purchase ... for $45.00
                <button className="close" onClick={close}>Close
              &times;
              </button>
              <button className="confirm" onClick={() => handleClick(2)}>Confirm
              </button>
            </section>
          )}
        </Popup>
      }

      {status === 'Lien Filed' &&
        <Popup trigger={<button className='btn-submit'>Submit Release of Lien</button>} position="top left">
        {close => (
          <section className="popup-msg">
            Please confirm if you would like to release lien... for $45.00
            <button className="close" onClick={close}>Close
            &times;
            </button>
            <button className="confirm" onClick={() => handleClick(3)}>Confirm
            </button>
          </section>
        )}
      </Popup>
      }

      <Popup trigger={<button className='btn-submit'>Remove Job</button>} position="top left">
        {close => (
          <section className="popup-msg">
            Are you sure you want to remove this job?
            <button className="close" onClick={close}>Close
            &times;
            </button>
            <button className="confirm" onClick={() => handleClick(4)}>Confirm
            </button>
          </section>
        )}
      </Popup>
    </div>
  )
};

export default UserMessage;