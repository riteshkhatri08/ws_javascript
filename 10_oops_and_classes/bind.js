class React {
  constructor() {
    this.library = "React";
    this.server = "http://127.0.0.1/5501";

    // requirement
    //! Below doesn't work becuase when click event is triggered
    // current context is not passed to handleClick
    // document
    //   .querySelector(".mybutton")
    //   .addEventListener("click", this.handleClick);
       // ? to fix thsi we need to bind current context to handle click
  document
  .querySelector(".mybutton")
  .addEventListener("click", this.handleClick.bind(this));
  }

 

  handleClick() {
    console.log("button is clicked " );
    console.log(this)
    console.log(this.server);
  }
}

const app = new React();
