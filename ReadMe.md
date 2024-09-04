## Bayt Assignment - Website

> Using Laravel PHP framework. We need a website that does as follows:
> - Allows us to List, Add, Delete, and Modify Student information.
> - Has Login, Registration, and Logout
> - Comes up with seeded admin user
> - When you register a new user, that user is regular (non admin)
> - Only admin users are allowed to make other users admin
> - Only admin users are allowed to Edit, Add, Delete students
> - Only regular users and admin users are allowed to list students (i.e. this information is not available to logged out users)
> - Students have id, name, age, and residence location
> - You are welcome to use any SQL database
> - You are welcome to use any PHP or Laravel library

## Setup and Usage

### Backend

- change directory to `backend`.
- run `composer install` to install all dependencies.
- create a database named `bayt` on MySQL. 
- run `php artisan start`, this custom command will run the migrations, seed the database, and run the development server for you.

### Frontend