import { View } from 'react-native';
import { MyButton } from './Button';

export default {
  title: 'MyButton',
  component: MyButton,
  decorators: [
    (Story) => (
        <View style={{ padding: 20, gap: 20 }}>
          <Story />
        </View>
    ),
  ],
};

export const Basic = {
  args: {
    text: 'Press me',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    text: 'Press me',
    variant: 'secondary',
  },
};

export const Gradient = {
  args: {
    text: 'Press me',
    variant: 'gradient',
  },
};