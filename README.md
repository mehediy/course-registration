# Course Registration

## Project features

- Select courses
- Credit hour calculation
- Total price calculation
- Course selection is limited to 20 hours of total credit

## How I managed state in the project

I have used useState hook four times for different reason.

- To store the fetched data in a variable, I have used a state variable `courses`. It is in the `Cards` component. Using the data from `courses`, different `Card` is displayed.
- In the `App` component, there are three states.

  - `selectedCourse` : When `Select` button is clicked on a card, a function is called. The function adds the Card data in this state in the form of array. Before adding, some conditions are checked: if the clicked course is not already added, also if the credit hour does not exceed.
  - `creditHour` : Calculate total credit hour using selected course data and store it in the state.
  - `remainingHour` : Remaining hour is calculated and stored in the state.

  These three state data are passed to the `Cart` component and used there.
