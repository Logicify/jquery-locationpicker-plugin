jquery-locationpicker-plugin
============================

JQuery Location Picker plugin

This plug-in allows to easily find and select location on the Google map. Except of single point it allows to choose some area by providing center of the area and some radius. All the date can be saved to any html input element automatically as well as processed with javascript (callback support).

The other feature of the plug-in is automatical address resoulver wich allows to get address line from the selected latitude and longitude. Also plug-in supports search by address typed into the binded input element which uses autocomplete feature from Google API to make search process easier. In this case marker will be automatically positioned on the map after successull address resolution. 

Currently plug-in uses JQuery and Google Maps. Integration is pretty simple:

```
$('mycontainer').locationpicker();
```


