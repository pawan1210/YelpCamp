Restful Routes

name            url                 verb            desc.
=======================================================================================
INDEX       /campgrounds            GET         Displays a list of all campgrounds
NEW         /campgrounds/new        GET         Display a form to make a new campground
CREATE      /campground             POST        Add new campground to Database
SHOW        /campground/:id         GET         Show more info about one campground


Comments Routes

New        /campgrounds/:id/comments/new    GET
Create     /campgrounds/:id/comments        POST