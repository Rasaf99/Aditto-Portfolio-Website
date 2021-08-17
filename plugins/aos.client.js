import AOS from "aos";

import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({ 

    delay:200,
       duration:1200,
        once:false

  }); // eslint-disable-line new-cap
};