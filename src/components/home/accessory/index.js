import React from 'react';

import { BsBell } from 'react-icons/bs';

const Subcribe = () => {
  return (
    <div className="subscribe_blog mt-5">
      <p className="text-white font-weight-bold text-center pb-3 h3">Subscribe Now</p>
      <form className="form-inline">
        <div className="form-group w-100 d-flex justify-content-center">
          <input type="email" className="form-control w-50" title="EmailSubscribe" placeholder="E-mail" />
          <button type="button" className="btn btn_send">
            <BsBell size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subcribe;
