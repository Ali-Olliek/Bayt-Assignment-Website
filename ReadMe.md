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
----
## Design 

#### Database
- In terms of the database, we kept it simple and straight to the point.
![Database Design](assets/Database%20Design.png)

#### Authorization
- In terms of authorization and access levels, we had the following scheme.
![Permissions](assets/Permissions.png)
----
## Setup and Usage

### Backend

- Change directory to `backend`.
- Run `composer install` to install all dependencies.
- Create a database named `bayt` on MySQL.
- Create a file named `.env`, copy contents from `.env.example` to `.env`.
- Change the value for `DB_DATABASE` to `bayt`.
- Run `php artisan start` which does the following:
    - Migrate the database scheme.
    - Run the seeders:
        - Admin Seeder.
        - Students Seeder.
    - Create a JWT Secret In `.env`.
    - Serve the server on port `8000`.

### Frontend