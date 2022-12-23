npx create-expo-app StickerSmash && 

cd StickerSmash

npx expo install react-dom react-native-web @expo/webpack-config

npx expo start

Declare a state variable called showAppOptions in App.js. We'll use this variable to show or hide buttons that open the modal alongside a few other options.

The value of this variable will be set to true when the user picks an image from the media library or decides to use the placeholder image.

Next, modify the pickImageAsync() function to set the value of showAppOptions to true after the user picks an image.

Then, update the button with no theme by adding an onPress prop with the following value:

Now, we can remove the alert on the <Button> component and update the onPress prop when rendering the second button in Button.js:

Next, update App.js to conditionally render the <Button> component based on the value of showAppOptions. Also, move the buttons in the conditional operator block.

For now, when the value of showAppOptions is true, let's render an empty <View> component. We'll address this state in the next step.

To render the plus icon, this button uses the <MaterialIcons> icon set from the @expo/vector-icons library.

The other two buttons also use <MaterialIcons> to display vertically aligned text labels and icons. Next, create a file named IconButton.js inside the components directory. This component accepts three props:

    icon: the name that corresponds to the icon in the MaterialIcons library.
    label: the text label displayed on the button.
    onPress: the function called when the button is pressed.

Import these buttons into App.js and replace the empty <View> component from the previous step to display them. Let's also create the onPress functions for these buttons to add the functionality later.

In the above snippet, the onReset() function is called when the user presses the reset button. When this button is pressed, we'll show the image picker button again.

The modal allows the user to choose an emoji from a list of available emoji. Create an EmojiPicker.js file inside the components directory. This component accepts three props:

    isVisible: a boolean that determines whether the modal is visible or not.
    onClose: a function that closes the modal.
    children: used later to display a list of emoji.



    The <Modal> component displays a title and a close button.
    Its visible prop takes the value of isVisible and controls if the modal is open or closed.
    Its transparent prop is a boolean value that determines whether the modal fills the entire view.
    Its animationType prop determines how it enters and leaves the screen. In this case, it is sliding from the bottom of the screen.
    Lastly, the <EmojiPicker> onClose prop is called when the user presses the close <Pressable>.

The next step is to add the corresponding styles for the <EmojiPicker> component:


    Import the <EmojiPicker> component.
    Then, create an isModalVisible state variable with the useState hook. It has a default value of false to ensure that the modal is hidden until the user presses the button to open it.
    Replace the comment in the onAddSticker() function to update the isModalVisible variable to true when the user presses the button. This will open the emoji picker.
    Create aonModalClose() function to update the isModalVisible state variable.
    Place the <EmojiPicker> component at the bottom of the <App> component, below the <StatusBar> component.

    Let's implement a horizontal list of emoji in the modal's content. We'll use is the <FlatList> component from React Native for it.

The <FlatList> component above renders all the emoji images using a <Image> component wrapped with a <Pressable> component. Later, we will improve it so that the user can tap an emoji on the screen to make it appear as a sticker on the image.

The <FlatList> component takes an array of items, which in the above snippet is provided by the emoji array variable as the value of the data prop. Then, the renderItem prop takes the item from the data and returns the item in the list. Finally, we add <Image> and the <Pressable> components to display this item.

The horizontal prop renders the list horizontally instead of vertically. The showsHorizontalScrollIndicator checks the platform using Platform module from React Native and displays the horizontal scroll bar only on the web.

Now, modify the App component. Import the <EmojiList> component and replace the comments where the <EmojiPicker>

Start by creating a new file in the components directory and call it EmojiSticker.js. Then, add the following code:


    imageSize: a value defined inside the <App> component. We will use this value in the next chapter to scale the image's size when tapped.
    stickerSource: the source of the selected emoji image.

We'll import this component in the App.js file and update the <App> component to display the emoji sticker on the image conditionally. We'll do this by checking if the pickedEmoji state is not null.

npx expo install expo-image-picker

npx expo install react-native-gesture-handler react-native-reanimated

npm install -D @babel/plugin-proposal-export-namespace-from

Then, add Reanimated's Babel plugin to babel.config.js:

npx expo start -c

Tip: We are using -c option here because we modified the babel.config.js file.
