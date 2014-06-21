# Sample Gulpfile

This is a sample [Gulp](http://gulpjs.com) asset builder. All the action is in gulpfile.js_; [check it out](https://github.com/swashcap/sample-gulpfile/blob/master/gulpfile.js)!

## Tasks

There are three sample tasks in this project centered around files:

* **Styles:** Process Sass files and add vendor prefixes. Do this by running `gulp styles` from project root.
* **Scripts:** Lint JavaScript files and minify them. Do this by running `gulp scripts` from the project root.
* **Images:** Minify and optimize images. Do this by running `gulp images` from the project root.

Development speed can be increased by **watching** files for changes and running the appropriate task. For simplicity, this only works styles and scripts. Do this by running `gulp watch` from the project root.

## Setup

Running these sample tasks requires some setup. Here’s what you’ll need:

* **[Sass](http://sass-lang.com):** a “CSS preprocessor” that extends regular ol’ CSS with some goodies
* **[GulpJS](http://gulpjs.com):** a command line “task runner” that makes building and deployment easy

### Installing Sass

1. You need to have [Ruby running on your machine](https://www.ruby-lang.org/en/downloads/) (most systems come with it pre-installed).
2. Open a [shell window](http://en.wikipedia.org/wiki/Shell_(computing)) and run `gem install sass`.

Refer to Sass’s official [Installation guide](http://sass-lang.com/install) for additional assistance.

### Getting NodeJS Up and Running

1. GulpJS runs on [Node.js](http://nodejs.org/). [Download and install Node.js](http://nodejs.org/download/).
2. To install GulpJS and its dependencies, navigate to this project’s root folder in a shell window and run `npm install`.