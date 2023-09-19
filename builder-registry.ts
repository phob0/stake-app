import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Navbar/Navbar")),
  {
    name: "Navbar",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Hero/Titles")),
  {
    name: "HeroTitles",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Underhero/Underhero")),
  {
    name: "Underhero",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/FirstSlider/FirstSlider")),
  {
    name: "FirstSlider",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/FirstSlider/components/Carousel")),
  {
    name: "FirstSliderCarousel",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/FirstSlider/components/Controller")),
  {
    name: "FirstSliderController",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/SecondSlider/SecondSlider")),
  {
    name: "SecondSlider",
  }
);

Builder.registerComponent(
  dynamic(
    () => import("./components/InvestmentCalculator/InvestmentController")
  ),
  {
    name: "InvestmentController",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ThirdSlider/components/CardSlider")),
  {
    name: "CardSlider",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ThirdSlider/ThirdSlider")),
  {
    name: "ThirdSlider",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Reward/RewardSlider")),
  {
    name: "RewardSlider",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Reward/RewardStats")),
  {
    name: "RewardStats",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Footer/Footer")),
  {
    name: "Footer",
  }
);
