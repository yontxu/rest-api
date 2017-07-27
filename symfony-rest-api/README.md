symfony-rest-api
================

The main goal on this project is being a proof of concept of an initial REST API Symfony 3.5.3 project.

## Prerequisites

You will need the following things properly installed on your computer.

* [Composer](https://getcomposer.org)
* [Mysql](https://www.mysql.com)

## Installation

* `git clone <repository-url>` this repository
* `cd rest-api/symfony-rest-api`
* `composer update`

Complete your Mysql database configuration on `app/config/parameters.yml` and run `php bin/console doctrine:schema:update --force`


## Running / Development

* `php bin/console server:run`
* The Symfony app will be available at [http://localhost:8000/](http://localhost:8000/).

This project contains routes for the consume of a Car entity: 
```
  app_cars_index             GET      ANY      ANY    /cars                              
  app_cars_show              GET      ANY      ANY    /cars/{id}                         
  app_cars_post              POST     ANY      ANY    /cars                              
  app_cars_update            PATCH    ANY      ANY    /cars/{id}                         
```