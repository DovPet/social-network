import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Dovydas Petrutis",
    src: "https://scontent.fvno3-1.fna.fbcdn.net/v/t39.30808-6/242555464_4300342743381489_6202945182302144854_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=wjOj6hGsTzkAX8O2xWA&_nc_ht=scontent.fvno3-1.fna&oh=00_AT9E8nSRz-TzN2t3cQnJMR5c52LOufFG_LRQmnfDVDYQlw&oe=620680E0",
    profile: "https://scontent.fvno3-1.fna.fbcdn.net/v/t1.18169-9/17190547_1289081034507690_2404285031340810491_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Xv_tHyzbr4EAX-k8pLu&_nc_ht=scontent.fvno3-1.fna&oh=00_AT8M9ihh6l0LuTEcbLGWBmVX9n5jpCQdxPSFRA4jJcQKJQ&oe=622588B8",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex space-x-3 mx-auto overflow-x-auto justify-start sm:justify-center">
      {stories.map((story) => (
        <StoryCard
          key={story.name}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
