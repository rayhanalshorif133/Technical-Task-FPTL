## Task-Details
- User Registration: A new user should be able to register themselves providing essential details like name, email, and password.
- User Login/Logout: Users should be able to log in and log out of the system.
- Task Creation: Logged-in users should be able to create tasks. Each task should include a title, status(open, in-progress, done), description, and deadline.
- Task Assignment: Users should be able to assign tasks to other registered users. An email notification should be sent to the assignee when a task is assigned.

## Porject View
- <p align="center">
  <a href="https://drive.google.com/file/d/1O81w3YCQjqK7rljStBbDIc3zpgKZ9EWG/view?usp=sharing">
    <img
      src="https://github.com/rayhanalshorif133/Technical-Test-FPTL/blob/development/public/images/Technical_Test_(Fingerprint_Technology_Limited).gif"
      alt="Bootstrap logo"
      width="auto"
      height="auto"
    />
  </a>
</p>


## Quick-Start

- Open CMD and Following these steps
- Step 1: Git Clone 
  ```html
  git clone https://github.com/rayhanalshorif133/Technical-Test-FPTL.git
  ```
- Step 2: Goto Folder
  ```html
  cd Technical-Test-FPTL
  ```
- Step 3: Run this command
  ```html
  composer install
  ```
- OR
  ```html
  composer update
  ```
- Step 4: Copy .env.example to .env and setup mysql database with 
  mail server
  
- Step 5: Run this command
  ```html
  npm install 
  ```
- Step 6: Run this command
  ```html
  php artisan migrate:fresh
  ```
  - Note:
  Automatically create new 3 to 4 user and task as a demo (For using seeder)
  - Email: admin@example.com
  - Password: password
- Step 7: Run this command 
  ```html
  php artisan key:generate 
  ```
- Step 8: Run this command
  ```html
  npm run dev
  ```
- Step 9: Run this command in another CMD
  ```html
  php artisan serve
  ```
- Final step: Goto http://localhost:8000/ and Login
