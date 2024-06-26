# ascii

Ascii art, animated.

## See [animation docs](https://github.com/michaelkofron/image2ascii/tree/main/MakingWebAnimations#turning-gifs-into-image2ascii-web-animations)

### install dependencies

* [install `ImageMagick`](https://github.com/michaelkofron/image2ascii?tab=readme-ov-file#prerequisites) -- `brew install imagemagick`
* install ruby -- `brew install ruby`
* add ruby to the path -- `echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc`
* install image2ascii: `gem install image2ascii`

### use image2ascii

* clone the repo https://github.com/michaelkofron/image2ascii/tree/main/MakingWebAnimations#turning-gifs-into-image2ascii-web-animations
* in the animation dir (`/Users/nick/code/image2ascii/MakingWebAnimations`), install ruby dependencies -- `bundle install`

Now you can generate the ascii
==============================

```sh
ruby ./run.rb
```

This will create a file `steps.json`.

## use this project

This will use a local file, `steps.json` as the source for the ascii animation.
This file was generated as above, with the `ruby ./run.rb` command, then it was
copied into this folder.

```sh
npm start
```
