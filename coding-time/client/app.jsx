App = React.createClass({
  // add reactMeteorData mixin - need to connect our data to our view
  mixins: [ReactMeteorData],

  // get data from database and store it in the hours variable
  getMeteorData: function() {
    // get all data from Hours Collection
    var hours = Hours.find().fetch();
    // return key valuestore
    return {
      "hours": hours
    };
  },
  // use React's render function and write some JSX
  // uses regular HTML to support 2 column structure
  // and div for each component we will have
  render: function() {
    // return JSX inside of brackets
    return (
      <div>
        <h1>Hours Speant Coding...</h1>
        <HourForm />
      </div>
    );
  }
});
