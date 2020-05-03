import React from "react";

export default function Footer() {
  return (
    <div className="bg-primary text-center media-footer">
      <h2 className="text-white header-footer">FD-TECHNOLOGIES</h2>
      <div className="footer-icon">
        <a
          target="blank"
          href="https://www.linkedin.com/in/chen-frederick-1324301a8/"
        >
          <i className="fab fa-linkedin fa-2x icon-fx" />
        </a>
        <a
          target="blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=frederick@fdtech.asia&body=Hi! Please kindly input your message here."
        >
          <i className="fa fa-envelope fa-2x icon-fx pl-4" />
        </a>
        <a target="blank" href="https://wa.link/zb52ft">
          <i className="fab fa-whatsapp-square fa-2x icon-fx pl-4"></i>
        </a>
      </div>
      <span className="text-white span-footer">
        © 2020 Frederick. All Rights Reserved
      </span>
    </div>
  );
}
