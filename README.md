<!-- CrudCo Url Shortner -->

<!-- Admin info -->
- sammitchell
- admin@example.com
- safepass1

<!-- REQUIREMENTS -->

Users can submit a long URL.
URLs are saved in a database.
Unique IDs are generated for each URL.
The short url is available via a list when a user logs in.

<!-- Tech Stacks -->

- PostgreSQL - Database
- Django + Django REST Framework + SimpleJWT - Backend
- React - Frontend

<!-- Workflow -->
<!-- Frontend -->
- User submits URL
- URL is shortneed (How?  What Library?)
- Long and Short URL are saved with User ID association
- User gets list of URL titles with links to shortened versions

<!-- UI -->
- Require: Title and URL
- Optional: Custom short URL (limited characters), generated automatically if the user doesn't provide

<!-- Backend -->
- Short version is sent to the API
    - API takes ID of short version and uses it to find long version
    - site is redirected to the long UL after clicking the short URL link

<!-- Data Models -->

<!-- Tables Needed -->

- Users
    - ID -> Primary Key (auto generated)
    - Username
    - Password
    - Token
- URLs
    - ID -> Primary Key (auto generated)
    - Long URL
    - Short URL
    - User ID -> Foreign Key!

<!-- Relationship -->

Users (one) -> URLs (many)