# <h1 align = "center">EE Draws Notifier</h1>

[EE Draws Notifier](https://www.eedraws.online/) is a **free** online tool that notifies people about recent Canada's Express Entry draws. Express Entry is Canada's immigration system based on invitations run by IRCC, which issues news draws approximately every two weeks. 

## Introduction
The objective of this project is to make it easier for Express Entry candidates to know whenever a new draw was issued so that they don't have to lose hours (or days!) hitting the F5 key trying to get an update.


## Tech Used

<img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width="40" height="40">&nbsp;<img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" width="40" height="40">&nbsp;<img src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" width="40" height="40">&nbsp;<img src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" width="40" height="40">&nbsp;<img src="https://jlannoo.dev/skills/next.png" width="40" height="40">
<br/>

This is a front-end project created using `create next app`. I used React as the framework and it's 100% written using **Typescript**. The styles were created using **Tailwind CSS**. Users and Draws data are stored in a **mongoDB** database. As the whole project uses **NextJS**, it's also hosted on **Vercel** using their free hosting option.

## Features

* **Responsive Design:** The project was designed using Tailwind's **mobile-first** approach and is responsive to all screen sizes from 320px up.
* **Serverless Functions:** The app makes good use of NextJS serverless functions stored on the api routes folder and calls them using **axios**. There are 3 serverless functions:
  * **Subscribe function:** Checks whether a user already exists in our database and if not, adds him/her to it and sends a **welcome email**.
  * **CheckUpdates function:** This function fetches the information from Canada's website, confronts it with the last draw stored on the database, and if it's different, determines that a new draw has been issued, which triggers the update of the last draw information on the database and the email sending to all the users informing about the new draw.
  * **Unsubscribe function:** Every email sent to the user has an unsubscribe link (created using mongoDB's unique `_id` property) at the bottom allowing thm to unsubscribe whenever they want to. When the function is called, the app finds the user by the `_id` property passed and deletes them from the database.
- **Email Sending:** The app uses the **Sendgrid** API to send emails to the users.
- **Smart email templates:** The app uses simple but efficient HTML email templates to welcome and to inform users about new draws.
- **Modals:** The app includes two modals created using the `react-modal` library.
- **Every-Minute Updates:** The `checkUpdates` function runs every minute ensuring that users will be informed of a new draw within 60 seconds of its release. Because Vercel has a very limited use of chron jobs, I've decided to write the following script on Google Apps Script which allows cron jobs once every minute:
``` javascript
function checkUpdates() {
  const response = UrlFetchApp.fetch('https://www.eedraws.online/api/checkUpdates').getContentText();
  Logger.log(response);
}
```

## Production Environment

* Vercel deploy: [https://www.eedraws.online/](https://www.eedraws.online/)

## Screenshots

### Mobile
<img src="https://www.eedraws.online/images/combined-screenshots/mobile.png">

### Desktop
<img src="https://www.eedraws.online/images/combined-screenshots/desktop.png">

### Email Templates
<img src="https://www.eedraws.online/images/combined-screenshots/email.png">