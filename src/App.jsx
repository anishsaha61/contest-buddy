import React from "react";
import "./App.css";
// import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//component imports
import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Components/LandingPage/LandingPage";
import AboutPage from "./Components/AboutPage/AboutPage";

function App() {
  const mediaCardData = [
    {
      icon: "https://clist.by/imagefit/static_resize/250x250/img/resources/leetcode_com.png",
      id: 102,
      name: "leetcode.com",
    },
    {
      icon: "https://clist.by/imagefit/static_resize/250x250/img/resources/hackerearth_com.png",
      id: 73,
      name: "hackerearth.com",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/ccinfo61.appspot.com/o/HackerRank_icon.png?alt=media&token=a00374d7-752e-421b-a68b-2846767e57b5",
      id: 63,
      name: "hackerrank.com",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/ccinfo61.appspot.com/o/google_logo.png?alt=media&token=64df547f-53a7-4804-8231-dcac2ec27190",
      id: 35,
      name: "codingcompetitions.withgoogle.com",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/ccinfo61.appspot.com/o/SPOJ_logo.png?alt=media&token=c0219898-6b34-4809-ad91-d15e59139f85",
      id: 26,
      name: "spoj.com",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/ccinfo61.appspot.com/o/topcoder_logo.png?alt=media&token=5d077f17-948b-4205-b186-051407169ed0",
      id: 12,
      name: "topcoder.com",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/ccinfo61.appspot.com/o/cc-logo.svg?alt=media&token=d15bff79-8e8b-4a32-895b-98919af8048f",
      id: 2,
      name: "codechef.com",
    },
    {
      icon: "https://clist.by/imagefit/static_resize/250x250/img/resources/codeforces_com.png",
      id: 1,
      name: "codeforces.com",
    },
  ];

  // useEffect(() => {
  //   Axios.get(
  //     "https://thingproxy.freeboard.io/fetch/https://clist.by/api/v2/resource",
  //     {
  //       headers: {
  //         Authorization:
  //           " ApiKey lathe31:74db8fd4613bd16ca49128bd90c7ab96a23fee44",
  //       },
  //       params: {
  //         order_by: "-id",
  //         name__in:
  //           "codechef.com,codeforces.com,codingcompetitions.withgoogle.com,facebook.com/hackercup,hackerearth.com,hackerrank.com,leetcode.com,spoj.com,topcoder.com",
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       console.log(res.data);
  //       setUrlObjects(res.data.objects);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <LandingPage mediaCardData={mediaCardData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
