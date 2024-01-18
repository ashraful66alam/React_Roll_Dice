import React from "react";
// import { numberToImage } from "../lib/numberToImage";
import Dice1 from "../assets/1.png";
import reactLogo from "../assets/react.svg";

class Dice extends React.Component {
  state = { number: 1, image: reactLogo, date: new Date(), show: true };
  ChangeNumber = () => {
    var endingNumber = Math.floor(Math.random() * 6) + 1;
    console.log(endingNumber)

    this.clockTimer = setInterval(() => {
      this.tick();
    }, 300);

    // this.setState({
    //   number: randomNumber,
    //   image: `/${randomNumber}.png`,
    // });

    setTimeout(()=> {
      clearInterval(this.clockTimer);
      console.log("weeeeeeeeeeeeeeeee");
      this.setState({
        show: true,
      });
    }, endingNumber*1000);
  };

  tick() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    this.setState({
      number: randomNumber,
      image: `/${randomNumber}.png`,
      date: new Date(),
      show: false,
    });
    // console.log(randomNumber);
  }
  render() {
    const { image, show } = this.state;

    return (
      <>
        {/* <h1>{this.state.date.toLocaleTimeString("en-US")}</h1> */}

        <img className="dice" src={image} alt="" />

        {show && <button onClick={this.ChangeNumber}>Roll Dice</button>}
      </>
    );
  }
}

export default Dice;
