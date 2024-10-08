# Angular Form Undo/Redo Functionality

## Project Overview

This project implements an Undo/Redo functionality in a form within an Angular application. The form allows users to input and edit various fields such as text inputs, checkboxes, and dropdowns. The Undo/Redo feature enables users to revert or reapply changes made to the form fields, enhancing the user experience by allowing error correction and reversion.

## Features

- _Reactive Form Setup:_

  - The form is built using Angular’s reactive forms module, which simplifies state management and allows for easy tracking of changes.

- _Undo/Redo Functionality:_

  - _Undo:_ Reverts the most recent change made to the form fields.
  - _Redo:_ Reapplies the most recently undone change.

- _State Management:_

  - A robust state management system is implemented to track the history of changes made to the form.
  - The history of changes is stored using an appropriate data structure (e.g., stack or array) to facilitate easy Undo/Redo operations.

- _User Interface:_
  - Buttons or links are provided for triggering Undo and Redo actions.
  - Visual feedback is given to users when Undo/Redo actions are available or have been performed.
  - The Undo button is disabled when there are no changes to undo, and the Redo button is disabled when there are no changes to redo.

## Installation

1. Clone the repository:
   bash
   git clone <repository_url>

2. Navigate to the project directory:
   bash
   cd <project_directory>

3. Install the necessary dependencies:
   bash
   npm install

4. Run the application:
   bash
   ng serve

   The application will be available at http://localhost:4200.

## Implementation Details

### Form Setup

- The form is created using Angular's reactive forms module, which allows for easy management of form controls and their states.

### Undo/Redo Buttons

- _Undo Button:_
  - Reverts the most recent change made to the form.
  - Disabled when there are no changes to undo.
- _Redo Button:_
  - Reapplies the most recently undone change.
  - Disabled when there are no changes to redo.

### State Management

- A history of form states is maintained using a stack or array. Each time a form field is changed, the previous state is pushed onto the stack. Undo and Redo operations manipulate this stack to revert or reapply changes.

### Undo/Redo Actions

- _Undo Action:_
  - Pops the last state from the history stack and restores the form to that state.
- _Redo Action:_
  - Pushes the last undone state back onto the form.

### Visual Feedback

- The UI is updated to reflect the availability of Undo/Redo actions, with buttons being enabled or disabled accordingly.
- Notifications or status messages can be displayed to inform the user when an Undo or Redo action is performed.

## Testing

To test the Undo/Redo functionality:

1. Open the form in the application.
2. Make a change to any form field.
3. Click the Undo button to revert the change.
4. Click the Redo button to reapply the undone change.
5. Observe the form fields and buttons for proper behavior.

## Conclusion

This implementation provides a smooth and intuitive way for users to manage their inputs in the form. The Undo/Redo functionality enhances user experience by allowing quick corrections and efficient state management.

For any issues or contributions, please submit a pull request or report an issue in the repository.

---

_Author:_ [Your Name]  
_Date:_ [Project Completion Date]  
*Version:* 1.0.0
