import React from "react";

const Nav: React.FC = () => {
  const content = [
    {
      id: 0,
      title: "Logo",
      onClick: () => console.log("Logo"),
      content: (
        <>
          <i className="fa-regular fa-camera-movie"></i>
        </>
      ),
    },
    {
      id: 1,
      title: "Search",
      onClick: () => console.log("Search"),
      content: (
        <>
        </>
      ),
    },
    {
      id: 2,
      title: "GH Project",
      onClick: () => console.log("GH Project"),
      content: <></>,
    },
    {
      id: 3,
      title: "Change Language",
      onClick: () => console.log("Change Language"),
      content: <></>,
    },
  ];
  return (
    <div>
      {content.map((item) => (
        <div key={item.id} onClick={item.onClick}>
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Nav;
