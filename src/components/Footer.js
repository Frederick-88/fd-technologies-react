import React from "react";

export default function Footer() {
  return (
    <div className="bg-primary text-center pb-5 pt-5">
      <h1 className="text-white pt-2 pb-2">FD-TECHNOLOGIES</h1>
      <div className="pt-3 pb-4">
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
          <i class="fab fa-whatsapp-square fa-2x icon-fx pl-4"></i>
        </a>
      </div>
      <span className="text-white">© 2020 Frederick. All Rights Reserved</span>
    </div>
  );
}
