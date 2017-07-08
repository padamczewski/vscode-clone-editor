# Visual Studio Code - Clone Editor Extension

Clone Editor is VS Code extension, which allows to duplicate active editor to any group.

## Features

#### Default action

By default Clone Editor auto selects the group to which the editor will be duplicated. It's behaviour is described and shown below:

If there is only one editor group active, it will be cloned **into second group**.

![Gif where there is one editor group active](https://raw.githubusercontent.com/padamczewski/vscode-clone-editor/master/assets/gif/total-1.gif)

If there are two editor groups and the first one is active, it will be cloned **into second group**.

![Gif where there are two editor groups and the first one is active](https://raw.githubusercontent.com/padamczewski/vscode-clone-editor/master/assets/gif/total-2-active-1.gif)

If there are two editor groups and the second one is active, it will be cloned **into first group**.

![Gif where there are two editor groups and the second one is active](https://raw.githubusercontent.com/padamczewski/vscode-clone-editor/master/assets/gif/total-2-active-2.gif)

If there are three editor groups and the first one is active, it will be cloned **into second group**.

![Gif where there are three editor groups and the first one is active](https://raw.githubusercontent.com/padamczewski/vscode-clone-editor/master/assets/gif/total-3-active-1.gif)

If there are three editor groups and the second one is active, it will be cloned **into third group**.

![Gif where there are three editor groups and the second one is active](https://raw.githubusercontent.com/padamczewski/vscode-clone-editor/master/assets/gif/total-3-active-2.gif)

If there are three editor groups and the third one is active, it will be cloned **into second group**.

![Gif where there are three editor groups and the third one is active](https://raw.githubusercontent.com/padamczewski/vscode-clone-editor/master/assets/gif/total-3-active-3.gif)

#### Additional actions

The default action doesn't cover all possible use cases for working with three groups. Additional actions were provided to handle that.

**Right and Left Side actions**  
Editor will be cloned to chosen side

**Specific group number**  
Editor will be cloned to specified group


### Keybindings

This extension contributes the following keybindings:

|       Command             |    Description  |
|         ----              |        ----     |
| cloneEditor.defaultGroup  | Clone editor into default group |
| cloneEditor.previousGroup | Clone editor into group on the left side |
| cloneEditor.nextGroup     | Clone editor into group on the right side |
| cloneEditor.firstGroup    | Clone editor into first group |
| cloneEditor.secondGroup   | Clone editor into second group |
| cloneEditor.thirdGroup    | Clone editor into third group |


### 0.0.1

- Cloning editors functionality
- Contirbution commands
- Basic test
