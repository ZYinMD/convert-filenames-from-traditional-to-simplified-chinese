Recursively scan a folder. On finding a filename containing traditional Chinese characters, rename the file with simplified Chinese.

### install:

```
$ yarn --production
```

This will install dependencies, but not dev-dependencies.

### run:

```
$ node rename path
```

Where `path` is the folder containing your files. Just drag the folder into terminal.

### Note:

1. Be careful, you don't want to mess up Japanese songs, so don't drag in a big folder that may contain Japanese songs.
1. I wrote this to rename mp3 files. Be careful when dragging in a folder containing non-mp3 files.
1. Non Chinese chars in the filename will be left alone.
1. It'll also work if you drag in a single file.
1. Will not rename folders.
