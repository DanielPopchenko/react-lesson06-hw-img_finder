import React from "react";
import "../../index.css";
import UseTheme from "../hooks/UseTheme";

export default function Example() {
  const { isDark, setIsDark } = UseTheme();
  return (
    <div>
      <h2>Example</h2>

      <ul>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas animi
          maxime natus saepe. Ipsum, exercitationem atque magni cum quas iure
          repellat, in possimus, inventore delectus ipsam cumque laudantium
          nisi. Fugit.
        </li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas animi
          maxime natus saepe. Ipsum, exercitationem atque magni cum quas iure
          repellat, in possimus, inventore delectus ipsam cumque laudantium
          nisi. Fugit.
        </li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas animi
          maxime natus saepe. Ipsum, exercitationem atque magni cum quas iure
          repellat, in possimus, inventore delectus ipsam cumque laudantium
          nisi. Fugit.
        </li>
      </ul>

      <button className="btn-link" onClick={() => setIsDark(!isDark)}>
        Change theme
      </button>
    </div>
  );
}
