import React from "react";
import { social, links } from "./data";
import { FaTimes } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className="sidebar-header">
        <h2 className="logo">LOGO</h2>
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, text, icon, url } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
