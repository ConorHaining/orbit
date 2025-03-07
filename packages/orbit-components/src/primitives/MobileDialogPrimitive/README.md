# MobileDialogPrimitive

To implement MobileDialogPrimitive component into your project you'll need to add the import:

```jsx
import MobileDialogPrimitive from "@kiwicom/orbit-components/lib/primtives/MobileDialogPrimitive";
```

After adding import into your project you can use it simply like:

```jsx
<MobileDialogPrimitive content="Your content">
  <Airplane />
</MobileDialogPrimitive>
```

## Props

Table below contains all types of the props available in the MobileDialogPrimitive component.

| Name                 | Type               | Default | Description                                                                                                                                         |
| :------------------- | :----------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**         | `React.Node`       |         | The reference element where the MobileDialogPrimitive will appear.                                                                                  |
| **content**          | `React.Node`       |         | The content to display in the MobileDialogPrimitive.                                                                                                |
| dataTest             | `string`           |         | Optional prop for testing purposes.                                                                                                                 |
| enabled              | `boolean`          | `true`  | Enable render of MobileDialogPrimitive                                                                                                              |
| renderInPortal       | `boolean`          | `true`  | Optional prop, set it to `false` if you're rendering `MobileDialogPrimitive` inside a custom portal, defaults to `true`                             |
| block                | `boolean`          | `false` | Whether the children wrapper is inline or block. Useful when children need to take up the entire container width.                                   |
| removeUnderlinedText | `boolean`          |         | Removes underline on child component, when underline is not desired.                                                                                |
| stopPropagation      | `boolean`          |         | If `true` the click event on children won't bubble. Useful when you use MobileDialogPrimitive inside another clickable element.                     |
| lockScrolling        | `boolean`          | `true`  | Whether to prevent scrolling of the rest of the page while ModalDialogPrimitive is open. This is on by default to provide a better user experience. |
| tabIndex             | `string \| number` | `"0"`   | Specifies the tab order of an element                                                                                                               |
| onShow               | `() => void`       |         | Fires when MobileDialog appears                                                                                                                     |
| labelClose           | `React.Node`       | `Close` | The text label for the close button.                                                                                                                |

## Functional specs

- The MobileDialogPrimitive component supports rendering of many different components inside its children. You can use combination of e.g. Text, Stack, List and custom image to show information to user about the CVV code. All rendered text inside the automatically:

```jsx
<MobileDialogPrimitive
  content={
    <Stack>
      <CustomImage />
      <Text>You can find the CVV in the right corner of your credit card.</Text>
      <List>
        <ListItem>Additional information</ListItem>
      </List>
    </Stack>
  }
>
  <InformationCircle />
</MobileDialogPrimitive>
```

- If you use MobileDialogPrimitive inside Alert, the Text should be automatically underlined with dotted line colored into the color of Alert.
