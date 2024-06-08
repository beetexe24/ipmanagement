<h1 align="center">IP ADDRESS MANAGEMENT</h1>

## OVERVIEW
This is a simple web-based IP address management solution to allow us to record an IP
address and comment on its assignment.

## REQUIREMENTS
* PHP 8.1.17 or higher. Use laragon `https://laragon.org/download/` or xampp `https://www.apachefriends.org/download.html`
* Laravel Framework 10.48.12 or higher
* Node v20.11.0 or higher `https://nodejs.org/en/download/package-manager`
* MySql v10.4.28-MariaDB

## INSTALLATION OF THE PROJECT
* Clone the project `git clone https://github.com/beetexe24/ipmanagement.git`
* Open command prompt then navigate to the project folder
* Run `composer install`
* Run `npm install`
* Run `npm run build`
* Provide `.env` file inside the project root folder, then setup database connection
* Run `php artisan migrate`

## USAGE
* Open command prompt then navigate to the project folder
* Run `php artisan serve`, or create a `virtual host` in XAMPP. If you are using Laragon, just right-click, hover to `www`, then select the project
* On the login page, click 'Create Account,' then log in with your credentials after successful creation
* After successfully logging in, you will be redirected to the dashboard. Click ADD NEW IP ADDRESS, then provide the IP address and its label
* To view the audit of every entry, click the `note` icon on the right side of the table
* To update the label of the ip address, click the `edit` icon on the right side of the table.
