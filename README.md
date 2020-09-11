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

1. If use ConEmu, there may be a bug where dragging a folder into git-bash will result in a WSL format (`/mnt/...`). Solution: either user WSL in ConEmu, or use git-bash/powershell/cmd in Windows Terminal.
1. Be careful, you don't want to mess up Japanese songs, so don't drag in a big folder that may contain Japanese songs.
1. I wrote this to rename mp3 files. Be careful when dragging in a folder containing non-mp3 files. If I want to match a pattern in the future, check the the readme of the package that I imported to recursively read files.
1. Non Chinese chars in the filename will be left alone.
1. Will not rename folders.
