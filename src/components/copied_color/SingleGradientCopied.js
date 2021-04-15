import React from "react";

const SingleGradientCopied = ({ values }) => {
  //console.log(values);

  const { colorText, rgb1, rgb2, direction } = values;

  const forStyle =
    direction == "circle" ? "radial-gradient" : "linear-gradient";

  const linearOrRadial = () => {
    if (direction == "circle") {
      return (
        <span>
          radial-gradient(circle, rgba({rgb1},0), rgba({rgb2},0));
        </span>
      );
    } else {
      return (
        <span>
          linear-gradient({direction}, rgba({rgb1},0), rgba({rgb2},0));
        </span>
      );
    }
  };

  return (
    <div>
      <div>
        <div className="copied__colorcon">
          <div
            className="copied__colorbox"
            style={{
              backgroundImage: `${forStyle}(${direction}, rgb(${rgb1}), rgb(${rgb2}))`,
            }}
          >
            &nbsp;
          </div>
          <div className="copied__colorindex">
            <p className="copied__codecolorText">
              <span className="copied__codecolor">background-color:</span>
              {colorText};
            </p>
            <p className="copied__codecolorText">
              <span className="copied__codecolor">background-image:</span>
              {linearOrRadial()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGradientCopied;
