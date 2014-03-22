---
layout: post
title:  Adding and Subtracting Dates and Times in PHP
date:   2012-03-11 16:57:36
categories: tutorials
---

During a recent project, I found the need to check if rows in a database were more than 6 hours old. So here's how to add and subtract dates and times in PHP...

**This adds 2 days to the current date:**

```php
$date = date('Y-m-j');
$newdate = strtotime ( '+2 day' , strtotime ( $date ) ) ;
$newdate = date ( 'Y-m-j' , $newdate );

echo $newdate;
```

**This adds 2 months to the current date:**

```php
$date = date('Y-m-j');
$newdate = strtotime ( '+2 month' , strtotime ( $date ) ) ;
$newdate = date ( 'Y-m-j' , $newdate );

echo $newdate;
```

**This adds 2 years to the current date:**

```php
$date = date('Y-m-j');
$newdate = strtotime ( '+2 year' , strtotime ( $date ) ) ;
$newdate = date ( 'Y-m-j' , $newdate );

echo $newdate;
```

**This subtracts 6 hours from the current date:**

```php
$date = date('Y-m-j');
$newdate = strtotime ( '-6 hour' , strtotime ( $date ) ) ;
$newdate = date ( 'Y-m-j' , $newdate );

echo $newdate;
```

**This subtracts 10 minutes from the current date:**

```php
$date = date('Y-m-j');
$newdate = strtotime ( '-10 minute' , strtotime ( $date ) ) ;
$newdate = date ( 'Y-m-j' , $newdate );

echo $newdate;
```

If you want to change if from the current date, then simple replace the current date with the desired one...

This adds 1 year to the date 2012-11-25:

```php
$date = date('2011-11-25');
$newdate = strtotime ( '+1 year' , strtotime ( $date ) ) ;
$newdate = date ( 'Y-m-j' , $newdate );

echo $newdate;
```
