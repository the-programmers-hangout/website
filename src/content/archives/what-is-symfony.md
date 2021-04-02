## What is Symfony

Symfony is an Open Source full stack PHP framework for web applications and a set of reusable PHP libraries. Thousands of web sites and applications rely on Symfony as the foundation of their web services. And most of the leading PHP projects, such as Drupal and Laravel use Symfony components to build their applications.

Symfony aims to speed up the creation and maintenance of web applications and to replace repetitive coding tasks. It's also aimed at building robust applications in an enterprise context and aims to give developers full control over the configuration.

## Why should I use Symfony
- Modularity, the core of Symfony is really small but as your needs grow you can easily install more components without having to refactor anything.
- Flexible architecture, you can customize pretty much anything ranging from folder structure to foreign libraries.
- Scalability, thanks to Symfony’s architecture no matter how big your application grows you can always keep extending it without having to worry about having to refactor your whole codebase.
- Easy to maintain, as long as you don’t use deprecated libraries you can usually upgrade to newer versions without any issues as long as you go through the very descriptive deprecation notices that are provided by Symfony.
- Thanks to Symfony’s Composer plugin any registered dependencies that are installed will automatically have their default configuration files set up on installation and cleaned up again upon removal
- There are a great set of 3rd party libraries that can be found at https://flex.symfony.com/
- You can build anything in it that meet the needs of any business, as long as it’s web based
- Good documentation, everything you need to know is explained in steps in the documentation. It is filled to the brim with code snippets and explanations.
- Developing in Symfony is actually fun. Instead of writing low level code all day long you write relatively high level code without losing customizability and you will see your app progress really  quickly without having to spend too much time thinking about things like folder structure, design patterns, naming conventions, etc since most of those things are taken care off already or can be found in the documentation.

## How does Symfony compare to other solutions from a business perspective
Symfony is not the solution with the most raw performance, this however does not mean it is slow by any means. However for most businesses cost effectiveness is more important. For robust enterprise applications Symfony is ahead in being more cost effective to host, maintain and develop which is one of the main reasons why it is chosen over other major full stack frameworks.

## What previous experience do you need before making optimal use of Symfony
It is expected that you already know the basics of PHP, HTML, CSS and JS before starting a Symfony project. If you don’t know the basics of one of the 4 mentioned above you should first learn those before checking out Symfony. Advancing without any knowledge of these basics will hinder your experience with Symfony.

## What kind of functionality can you expect from Symfony
Symfony is a framework that works via a MVC pattern (https://en.wikipedia.org/wiki/Model–view–controller). Which means that you can define a route and after visiting that route a function in a controller class is called that returns a response.
You write the controller functions yourself and you are free to write whatever functionality needed, as long as it returns a response which can be anything like html, json or even a file.
Some of the core components of Symfony are the: templating engine, ORM, mailer, logger, form generator, dummy data generator, PHPUnit for test, security component, yaml parser, the validator and Webpack Encore which is webpack with Symfony integration for all of your frontend dependencies. With Webpack Encore it is even possible to integrate Vue or React into your project by mounting it on a Twig template. If you decide to do this you will have to choose between using frontend routing or using Symfony’s own controller routing.

## Symfony as a backend framework
It is not required to use Symfony’s fullstack capabilities if you want to use Symfony. In fact, thanks to Symfony’s modularity you don’t even have to have the frontend components installed. If you want to make a REST API using Symfony then API Platform (https://api-platform.com/) will help you set one up really fast thanks to its good integration with Symfony. It integrates with the ORM and the validator. Everything is fully customizable if you decide to go for API Platform but you can still write your own endpoints manually if you need custom actions.
‎
## Required tools you need to have set up before starting a Symfony project
First off, it is required that you have Composer installed. Composer is a package manager for PHP, if you have never heard about it I’d strongly recommend you first study it up a bit before reading any further. You can download composer at https://getcomposer.org/download/, but you will first have to have a PHP executable before being able to install Composer. By using XAMPP you will get all the other tools you need to run a PHP web server, it comes bundled with Apache, MariaDB which is an open source fork of MySQL and PhpMyAdmin which is a database viewer and a couple of other handy tools for later. You can view what is included at their site: https://www.apachefriends.org/download.html, make sure you download the version for PHP 7.4. At the time of writing this spotlight PHP 8 is still rather new and a lot of important dependencies are not yet compatible with this version.
‎

Now that we have the basic requirements installed for setting up any PHP project that uses dependencies we can proceed by installing the necessary tools to comfortably work with a Symfony project. 
- The first thing we need to install would be the Symfony CLI (command line interface) which gives you commands that you will need when starting and running your project locally, it can be downloaded at: https://symfony.com/download. 
- The second most important thing that makes life really easy when working with Symfony is PhpStorm. If you are familiar with Jetbrains you might already know of this IDE. There are designated plugins for Symfony in PhpStorm that make working with Symfony really comfortable. If you are a student you should be able to get a student license for free, if not you will get a 30 days free trial and after that you can always buy it if you like it. You can download it at https://www.jetbrains.com/phpstorm/download/. It is fine to use a different IDE like VS Code, but keep in mind that PhpStorm will be used in the tutorials linked below.

## Learning resources
Official documentation: https://symfony.com/doc/current

Official learning videos: https://symfonycasts.com/screencast/symfony

If you are new to Symfony I’d strongly recommend you first check out the official learning videos linked above. They will walk you through the basics of Symfony and help you set up your project. It doesn’t walk you through the tools you need to have set up first on the video tutorial, but we already went through them.