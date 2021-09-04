import React from "react";
export default ({ heading, links }) => {
  return (
    <div>
      <h4 className="foter-sub-head">{heading}</h4>
      <div className="footer-sub-area">
        {links.map((x, i) => (
          <a href={x.href} key={i} className="foter-sub-a">
            {x.name} {x.hasSpan ? x.span() : <></>}
          </a>
        ))}
      </div>
    </div>
  );
};
