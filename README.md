JQuery Location Picker plugin
=============================

![Location Picker](http://logicify.github.io/jquery-locationpicker-plugin/images/basic_ui.png)

This plug-in allows to easily find and select a location on the Google map. Along with a single point selection, it allows to choose an area by providing its center and the radius in meters. All the data can be saved to any HTML input element automatically as well as be processed by Javascript (callback support).

The other feature of the plug-in is automatic address resolver which allows to get address line from the selected latitude and longitude. The plug-in also supports searching by address typed into the bound input element which uses auto-complete feature from Google API to make the search process easier. In this case the marker will be automatically positioned on the map after successful address resolution. 

The plug-in currently uses JQuery and Google Maps. Integration is pretty simple:

* Document head should be extended with inclusions of the required libraries: 
```
<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src='http://maps.google.com/maps/api/js?sensor=false&libraries=places'></script>
<script src="js/locationpicker.jquery.js"></script>
```

* Put container somewhere on the page:
```
<div id="somecomponent" style="width: 500px; height: 400px;"></div>
```

* Attach the plug-in to container: 
```
<script>
$('#somecomponent').locationpicker();
</script>
```

Documentation and Examples
--------------------------

Documentation along with examples available [here](http://logicify.github.io/jquery-locationpicker-plugin/).


Credits
-------
Dmitry Berezovsky, Logicify (<http://logicify.com/>)
