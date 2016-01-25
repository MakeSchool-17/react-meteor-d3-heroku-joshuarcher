//Give your component a name called HourForm - use React.createClass to create the object
HourForm = React.createClass({

  handleSubmit: function(event) {

    // prevent default for event
    event.preventDefault();

    // going to want to use ReactDOM.findDOMNode
    // to find the form field inputs
    // apparently you can just attach a reference,
    // but lets do that later...

    var hourInput = this.refs.hoursSpent;
    var dateInput = this.refs.dateRecorded;

    var hours = hourInput.value;
    var date = moment(dateInput.value).toDate();

    // Use Meteor's call function
    // Pass the insertHour function as first parameter
    // Pass the hours value as the second parameter
    // Pass the date value as the third parameter -
    // Use Moments toDate function to pass it as an ISO date
    // Pass an anonymous callback as the fourth parameter
    // that only alerts if something goes wrong (the callback has error (if there's one)
    // and the returned id as passed in parameters (if the call succeeded))
    Meteor.call("insertHour", hours, date, function(error, response) {
      if (error) {
        console.log(error.reason);
        console.log(response);
        return
      } else {
        console.log("great success");
        return
      }
    });

    hourInput.value = ""
    dateInput.value = ""

  },

  render: function() {
    // Return your JSX within brackets -
    // the HTML should display a simple form with
    // 2 input elements and a submit button
    return (
      <div>
        <h3>Hours Spent Coding</h3>
        <form onSubmit={this.handleSubmit}>
          <input ref="hoursSpent" type="text" />
          <input ref="dateRecorded" type="date" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
});
