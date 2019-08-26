# Using MySQL

## For windows
Start the MySQL Service

## For linux distros
-----On Terminal----
sudo service mysql start

### For log in
mysql -u root

#### Create DB, user, grant access

create database name_db;
create user myuser identified by 'pass_name';
use name_db;
GRANT ALL PRIVILEGES ON demo_db.* to myuser;
flush privileges;
(password: 'pass')