import 'react-native';
import { ClassAttributes } from 'react';

declare module 'react-native' {
  interface ViewProps extends ClassAttributes<View> {
    className?: string;
  }
  interface TextProps extends ClassAttributes<Text> {
    className?: string;
  }
  interface ImageProps extends ClassAttributes<Image> {
    className?: string;
  }
  // Add more components as needed
}
