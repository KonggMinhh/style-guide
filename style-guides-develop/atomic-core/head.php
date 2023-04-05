<!DOCTYPE html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
<head>
    <base href="../">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://kendo.cdn.telerik.com/2022.2.802/styles/kendo.bootstrap-main.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="atomic-core/css/site.css">
    
    <link rel="stylesheet" type="text/css" href="css/styles.css">

    <link rel="stylesheet" href="//malihu.github.io/custom-scrollbar/jquery.mCustomScrollbar.min.css">

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,500&amp;display=swap" rel="stylesheet">
    <!-- <script src="node_modules/@progress/kendo-ui/js/kendo.all.min.js"></script> -->
    
    <script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
    <script src="https://kendo.cdn.telerik.com/2022.2.802/js/kendo.all.min.js"></script>
    <?php
        $filename = '../atomic-head.php';
        if (file_exists($filename)) {
            include("../atomic-head.php");
        }
    ?>
    
    <?php
    
        $parse_uri = explode( 'wp-content', $_SERVER['SCRIPT_FILENAME'] );

        $file_name =  $parse_uri[0] . 'wp-load.php';

        if (file_exists($file_name)) {
        require_once( $parse_uri[0] . 'wp-load.php' );
        }

    ?>

    


</head>
