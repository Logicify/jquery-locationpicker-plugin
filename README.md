jquery-locationpicker-plugin
============================

JQuery Location Picker plugin

This plug-in allows to easily find and select a location on the Google map. Along with a single point selection, it allows to choose an area by providing its center and the radius. All the data can be saved to any HTML input element automatically as well as be processed by Javascript (callback support).

The other feature of the plug-in is automatic address resolver which allows to get address line from the selected latitude and longitude. The plug-in also supports searching by address typed into the bound input element which uses auto-complete feature from Google API to make the search process easier. In this case the marker will be automatically positioned on the map after successful address resolution. 

The plug-in currently uses JQuery and Google Maps. Integration is pretty simple:

```
$('mycontainer').locationpicker();
```


